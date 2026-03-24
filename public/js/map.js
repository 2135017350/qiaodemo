let map;
let bridges = [];
let markers = [];
let gestureEnabled = false;
let handModel = null;
let video, canvas, ctx;

// Bug Fix #7: 缓存已加载的模型，避免重复加载
let cachedHandModel = null;

const BAIDU_MAP_AK = 'axsFrFPnexU0a1m6VKYwAQ6BLPuhfvKj';

function initMap() {
    map = new BMapGL.Map('baidu-map');
    map.centerAndZoom(new BMapGL.Point(105.0, 36.0), 5);
    map.enableScrollWheelZoom(true);

    // Bug Fix #5: BMAP_EARTH_MAP 在 BMapGL 中需要单独 try/catch，避免静默失败
    try {
        map.setMapType(BMAP_EARTH_MAP);
    } catch (e) {
        console.warn('地图类型设置失败，使用默认地图类型:', e);
    }

    try {
        map.setMapStyleV2({ style: 'dark' });
    } catch (e) {
        console.warn('地图样式设置失败:', e);
    }

    loadBridges();
}

async function loadBridges() {
    try {
        const response = await fetch('/api/bridges');
        bridges = await response.json();
        addBridgeMarkers();
    } catch (error) {
        console.error('加载桥梁数据失败:', error);
    }
}

function addBridgeMarkers() {
    bridges.forEach(bridge => {
        if (bridge.latitude && bridge.longitude) {
            const point = new BMapGL.Point(bridge.longitude, bridge.latitude);
            const marker = new BMapGL.Marker(point);
            marker.bridgeId = bridge.id;
            marker.addEventListener('click', () => showBridgeInfo(bridge));
            map.addOverlay(marker);
            markers.push(marker);
        }
    });
}

function showBridgeInfo(bridge) {
    document.getElementById('bridge-name').textContent = bridge.name;
    document.getElementById('bridge-location').textContent = bridge.location || '';
    // Bug Fix #1: 兼容两种后端的字段名
    // Spring Boot (Jackson) 返回 camelCase: bridgeType, constructionYear
    // Node.js (mysql2) 返回 snake_case: bridge_type, construction_year
    document.getElementById('bridge-type').textContent = bridge.bridgeType || bridge.bridge_type || '';
    document.getElementById('bridge-year').textContent = bridge.constructionYear || bridge.construction_year || '';
    document.getElementById('bridge-length').textContent = bridge.length || '';
    document.getElementById('bridge-span').textContent = bridge.span || '';
    document.getElementById('bridge-desc').textContent = bridge.description || '';
    document.getElementById('bridge-history').textContent = bridge.history || '';
    document.getElementById('bridge-info').classList.add('show');
    if (bridge.latitude && bridge.longitude) {
        map.panTo(new BMapGL.Point(bridge.longitude, bridge.latitude));
    }
}

function closeBridgeInfo() {
    document.getElementById('bridge-info').classList.remove('show');
}

function toggleGestureControl() {
    gestureEnabled = !gestureEnabled;
    const status = document.getElementById('gesture-status');
    const btn = document.getElementById('gesture-toggle');

    if (gestureEnabled) {
        status.textContent = '手势控制: 开启';
        status.classList.add('active');
        btn.textContent = '关闭手势控制';
        startCamera();
    } else {
        status.textContent = '手势控制: 关闭';
        status.classList.remove('active');
        btn.textContent = '开启手势控制';
        stopCamera();
    }
}

async function startCamera() {
    video = document.getElementById('camera-feed');
    canvas = document.getElementById('gesture-canvas');
    ctx = canvas.getContext('2d');

    try {
        // Bug Fix #8: 修改摄像头约束条件，使用 ideal 而非 exact，增加设备兼容性
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { 
                width: { ideal: 640 }, 
                height: { ideal: 480 }, 
                facingMode: 'user' 
            } 
        });
        video.srcObject = stream;
        video.play();
        
        video.onloadedmetadata = () => {
            // Bug Fix #4: 将 canvas 的逻辑尺寸与视频实际像素尺寸对齐
            // 同时通过 CSS 保证显示尺寸正确（CSS 已设置 width:100%, height:300px）
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            initHandPose();
        };
    } catch (err) {
        console.error('摄像头访问失败:', err);
        alert('无法访问摄像头，请检查权限');
        gestureEnabled = false;
        document.getElementById('gesture-toggle').textContent = '开启手势控制';
        document.getElementById('gesture-status').textContent = '手势控制: 关闭';
        document.getElementById('gesture-status').classList.remove('active');
    }
}

async function initHandPose() {
    try {
        document.getElementById('gesture-status').textContent = '加载手势模型...';

        // Bug Fix #7: 复用已缓存的模型，避免重复加载
        if (cachedHandModel) {
            handModel = cachedHandModel;
            document.getElementById('gesture-status').textContent = '手势控制: 开启';
            console.log('复用已缓存的 Handpose 模型');
            detectHands();
            return;
        }

        // Bug Fix #9: 检查 handpose 库是否已加载，支持多种加载方式
        if (typeof handpose === 'undefined') {
            throw new Error('Handpose 库未加载，请检查网络连接');
        }

        handModel = await handpose.load();
        cachedHandModel = handModel;
        document.getElementById('gesture-status').textContent = '手势控制: 开启';
        console.log('Handpose 模型加载成功');
        detectHands();
    } catch (err) {
        console.error('手势模型加载失败:', err);
        document.getElementById('gesture-status').textContent = '模型加载失败，请检查网络';
        // Bug Fix #9: 降级处理，禁用手势控制但不中断应用
        gestureEnabled = false;
        document.getElementById('gesture-toggle').disabled = true;
        document.getElementById('gesture-toggle').title = '手势模型加载失败';
    }
}

async function detectHands() {
    if (!gestureEnabled || !handModel) return;

    try {
        const predictions = await handModel.estimateHands(video);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Bug Fix #4: 绘制视频帧到 canvas（逻辑尺寸与视频一致，CSS 负责缩放显示）
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (predictions.length > 0) {
            const landmarks = predictions[0].landmarks;
            const gesture = recognizeGesture(landmarks);
            
            drawHand(landmarks, ctx);
            
            document.getElementById('gesture-status').textContent = '手势: ' + getGestureName(gesture);

            handleGesture(gesture);
        } else {
            document.getElementById('gesture-status').textContent = '手势控制: 开启（未检测到手）';
        }
    } catch (err) {
        console.error('手势识别错误:', err);
    }

    if (gestureEnabled) {
        requestAnimationFrame(detectHands);
    }
}

function recognizeGesture(landmarks) {
    const thumbTip = landmarks[4];
    const indexTip = landmarks[8];
    const middleTip = landmarks[12];
    const ringTip = landmarks[16];
    const pinkyTip = landmarks[20];

    const thumbBase = landmarks[2];   // 拇指第二关节（更稳定的参考点）
    const indexBase = landmarks[5];
    const middleBase = landmarks[9];
    const ringBase = landmarks[13];
    const pinkyBase = landmarks[17];

    const palmCenter = landmarks[0];  // 手腕/掌根

    // Bug Fix #2: 拇指伸展判断改用与掌根的距离比较
    // 拇指是横向伸展的，用拇指尖与食指根部的距离判断更准确
    const thumbIndexDist = Math.hypot(thumbTip[0] - indexBase[0], thumbTip[1] - indexBase[1]);
    const palmSize = Math.hypot(palmCenter[0] - middleBase[0], palmCenter[1] - middleBase[1]);
    const thumbOpen = thumbIndexDist > palmSize * 0.6;

    // 其余四指：指尖 Y 坐标小于指根 Y 坐标即为伸展（图像坐标系 Y 轴向下）
    const indexOpen  = indexTip[1]  < indexBase[1]  - palmSize * 0.1;
    const middleOpen = middleTip[1] < middleBase[1] - palmSize * 0.1;
    const ringOpen   = ringTip[1]   < ringBase[1]   - palmSize * 0.1;
    const pinkyOpen  = pinkyTip[1]  < pinkyBase[1]  - palmSize * 0.1;

    const fingers = [thumbOpen, indexOpen, middleOpen, ringOpen, pinkyOpen];
    const fingersOpen = fingers.filter(f => f).length;

    // 方向判断：以掌根为参考点，更稳定
    const indexYDiff = indexTip[1] - palmCenter[1];
    // Bug Fix #3: 前置摄像头镜像修正，X 轴方向取反
    // 用户向右指 → 镜像画面中 X 坐标减小 → indexXDiff < 0 → 应判断为 right
    const indexXDiff = -(indexTip[0] - palmCenter[0]);

    // 张手：4根以上手指伸展
    if (fingersOpen >= 4) {
        return 'open';
    }
    
    // Bug Fix #2: 握拳：只需要四指（食中无小）均弯曲即可，不强求拇指
    if (!indexOpen && !middleOpen && !ringOpen && !pinkyOpen) {
        return 'close';
    }
    
    // 单指指向（食指伸展，其余弯曲）
    if (indexOpen && !middleOpen && !ringOpen && !pinkyOpen) {
        if (Math.abs(indexYDiff) > Math.abs(indexXDiff)) {
            // 主要是垂直方向
            if (indexYDiff < -palmSize * 0.3) return 'up';
            if (indexYDiff > palmSize * 0.3) return 'down';
        } else {
            // 主要是水平方向
            if (indexXDiff > palmSize * 0.3) return 'right';
            if (indexXDiff < -palmSize * 0.3) return 'left';
        }
    }
    
    // 双指指向（食指+中指伸展）
    if (indexOpen && middleOpen && !ringOpen && !pinkyOpen) {
        if (Math.abs(indexYDiff) > Math.abs(indexXDiff)) {
            if (indexYDiff < -palmSize * 0.25) return 'up';
            if (indexYDiff > palmSize * 0.25) return 'down';
        } else {
            if (indexXDiff > palmSize * 0.25) return 'right';
            if (indexXDiff < -palmSize * 0.25) return 'left';
        }
    }

    return 'unknown';
}

function drawHand(landmarks, ctx) {
    // Bug Fix #4: 绘制时直接使用 landmarks 坐标（已与 canvas 逻辑尺寸对齐）
    ctx.strokeStyle = '#c9a227';
    ctx.fillStyle = '#c9a227';
    ctx.lineWidth = 2;

    for (let i = 0; i < landmarks.length; i++) {
        const [x, y] = landmarks[i];
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
    }

    const connections = [
        [0,1],[1,2],[2,3],[3,4],
        [0,5],[5,6],[6,7],[7,8],
        [0,9],[9,10],[10,11],[11,12],
        [0,13],[13,14],[14,15],[15,16],
        [0,17],[17,18],[18,19],[19,20],
        [5,9],[9,13],[13,17]  // 补充掌骨横向连接，使骨架更完整
    ];

    connections.forEach(([i, j]) => {
        const [x1, y1] = landmarks[i];
        const [x2, y2] = landmarks[j];
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    });
}

function getGestureName(gesture) {
    const names = {
        'up': '👆 向上',
        'down': '👇 向下',
        'left': '👈 向左',
        'right': '👉 向右',
        'open': '✋ 张开',
        'close': '✊ 握拳',
        'unknown': '⌛ 等待'
    };
    return names[gesture] || gesture;
}

let lastGesture = null;
let gestureCount = 0;
// Bug Fix #6: 为缩放操作添加独立冷却时间，避免连续触发
let lastActionTime = 0;
const ZOOM_COOLDOWN = 800;   // 缩放冷却时间（ms）
const PAN_COOLDOWN = 300;    // 平移冷却时间（ms）

function handleGesture(gesture) {
    if (gesture === 'unknown') {
        lastGesture = null;
        gestureCount = 0;
        return;
    }

    if (gesture === lastGesture) {
        gestureCount++;
    } else {
        gestureCount = 1;
        lastGesture = gesture;
    }

    // Bug Fix #6: 使用时间戳控制触发频率，而非帧计数清零
    // 平移手势：连续保持 8 帧后开始触发，之后按冷却时间连续触发
    // 缩放手势：需要稳定保持 10 帧，且有更长冷却时间
    const now = Date.now();
    const isPan = ['up', 'down', 'left', 'right'].includes(gesture);
    const isZoom = ['open', 'close'].includes(gesture);

    const requiredFrames = isZoom ? 10 : 8;
    const cooldown = isZoom ? ZOOM_COOLDOWN : PAN_COOLDOWN;

    if (gestureCount < requiredFrames) return;
    if (now - lastActionTime < cooldown) return;

    lastActionTime = now;
    
    const pan = 100;
    const currentZoom = map.getZoom();

    switch (gesture) {
        case 'up':
            map.panBy(0, -pan);
            break;
        case 'down':
            map.panBy(0, pan);
            break;
        case 'left':
            map.panBy(-pan, 0);
            break;
        case 'right':
            map.panBy(pan, 0);
            break;
        case 'open':
            if (currentZoom < 18) {
                map.zoomIn();
            }
            break;
        case 'close':
            if (currentZoom > 3) {
                map.zoomOut();
            }
            break;
    }
}

function stopCamera() {
    if (video && video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
    if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    // Bug Fix #7: 不清除 cachedHandModel，下次开启时复用
    handModel = null;
    lastGesture = null;
    gestureCount = 0;
    lastActionTime = 0;
}

document.getElementById('gesture-toggle').addEventListener('click', toggleGestureControl);
window.onload = initMap;
