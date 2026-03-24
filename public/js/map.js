let map;
let bridges = [];
let markers = [];
let gestureEnabled = false;
let handModel = null;
let video, canvas, ctx;

const BAIDU_MAP_AK = 'axsFrFPnexU0a1m6VKYwAQ6BLPuhfvKj';

function initMap() {
    map = new BMapGL.Map('baidu-map');
    map.centerAndZoom(new BMapGL.Point(105.0, 36.0), 5);
    map.enableScrollWheelZoom(true);
    map.setMapType(BMAP_EARTH_MAP);

    try {
        map.setMapStyleV2({ style: 'dark' });
    } catch (e) {
        console.log('地图样式设置失败');
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
    document.getElementById('bridge-type').textContent = bridge.bridgeType || '';
    document.getElementById('bridge-year').textContent = bridge.constructionYear || '';
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
        const stream = await navigator.mediaDevices.getUserMedia({ 
            video: { width: 640, height: 480, facingMode: 'user' } 
        });
        video.srcObject = stream;
        video.play();
        
        video.onloadedmetadata = () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            initHandPose();
        };
    } catch (err) {
        console.error('摄像头访问失败:', err);
        alert('无法访问摄像头，请检查权限');
        gestureEnabled = false;
    }
}

async function initHandPose() {
    try {
        document.getElementById('gesture-status').textContent = '加载手势模型...';
        handModel = await handpose.load();
        document.getElementById('gesture-status').textContent = '手势控制: 开启';
        console.log('Handpose模型加载成功');
        detectHands();
    } catch (err) {
        console.error('手势模型加载失败:', err);
        document.getElementById('gesture-status').textContent = '模型加载失败';
    }
}

async function detectHands() {
    if (!gestureEnabled || !handModel) return;

    try {
        const predictions = await handModel.estimateHands(video);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        if (predictions.length > 0) {
            const landmarks = predictions[0].landmarks;
            const gesture = recognizeGesture(landmarks);
            
            drawHand(landmarks, ctx);
            
            document.getElementById('gesture-status').textContent = '手势: ' + getGestureName(gesture);

            handleGesture(gesture);
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

    const thumbBase = landmarks[1];
    const indexBase = landmarks[5];
    const middleBase = landmarks[9];
    const ringBase = landmarks[13];
    const pinkyBase = landmarks[17];

    const palmCenter = landmarks[0];

    const fingers = [
        thumbTip[1] < thumbBase[1],
        indexTip[1] < indexBase[1],
        middleTip[1] < middleBase[1],
        ringTip[1] < ringBase[1],
        pinkyTip[1] < pinkyBase[1]
    ];

    const fingersOpen = fingers.filter(f => f).length;
    const thumbIndexDist = Math.hypot(indexTip[0] - thumbTip[0], indexTip[1] - thumbTip[1]);
    
    const indexYDiff = indexTip[1] - indexBase[1];
    const indexXDiff = indexTip[0] - indexBase[0];

    if (fingersOpen === 5 && thumbIndexDist > 50) {
        return 'open';
    }
    
    if (fingersOpen === 0) {
        return 'close';
    }
    
    if (fingersOpen === 1 && fingers[1]) {
        if (indexYDiff < -20) return 'up';
        if (indexYDiff > 20) return 'down';
        if (indexXDiff > 20) return 'right';
        if (indexXDiff < -20) return 'left';
    }
    
    if (fingersOpen === 2 && fingers[1] && fingers[2]) {
        if (indexYDiff < -15) return 'up';
        if (indexYDiff > 15) return 'down';
        if (indexXDiff > 15) return 'right';
        if (indexXDiff < -15) return 'left';
    }

    return 'unknown';
}

function drawHand(landmarks, ctx) {
    const w = canvas.width;
    const h = canvas.height;

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
        [0,17],[17,18],[18,19],[19,20]
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

function handleGesture(gesture) {
    if (gesture === 'unknown') {
        lastGesture = null;
        gestureCount = 0;
        return;
    }

    if (gesture === lastGesture) {
        gestureCount++;
    } else {
        gestureCount = 0;
        lastGesture = gesture;
    }

    if (gestureCount < 15) return;
    
    gestureCount = 0;
    
    const pan = 80;
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
    handModel = null;
    lastGesture = null;
    gestureCount = 0;
}

document.getElementById('gesture-toggle').addEventListener('click', toggleGestureControl);
window.onload = initMap;
