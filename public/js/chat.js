let map;
let bridges = [];
let recognition = null;
let isListening = false;
let botSpeakEnabled = true;
let synthesis = window.speechSynthesis;
let currentUtterance = null;

function initMap() {
    map = new BMapGL.Map('baidu-map');
    map.centerAndZoom(new BMapGL.Point(105.0, 36.0), 5);
    map.enableScrollWheelZoom(true);
    
    try {
        map.setMapStyleV2({
            style: 'light'
        });
    } catch (e) {
        console.log('地图样式设置失败，使用默认样式');
    }
    
    loadBridges();
    initVoiceRecognition();
}

function initVoiceRecognition() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log('您的浏览器不支持语音识别功能');
        document.getElementById('mic-btn').title = '浏览器不支持语音识别';
        document.getElementById('mic-btn').style.opacity = '0.5';
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'zh-CN';
    
    recognition.onstart = function() {
        isListening = true;
        document.getElementById('mic-btn').classList.add('listening');
        document.getElementById('voice-indicator').classList.add('show');
        document.getElementById('voice-status').textContent = '正在聆听...';
    };
    
    recognition.onresult = function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');
        
        document.getElementById('user-input').value = transcript;
        
        if (event.results[0].isFinal) {
            setTimeout(() => {
                sendMessage();
            }, 500);
        }
    };
    
    recognition.onerror = function(event) {
        console.error('语音识别错误:', event.error);
        stopListening();
        
        if (event.error === 'no-speech') {
            showToast('没有检测到语音，请再说一次~');
        } else if (event.error === 'not-allowed') {
            showToast('请允许麦克风权限后使用语音功能');
        } else {
            showToast('语音识别出错，请重试~');
        }
    };
    
    recognition.onend = function() {
        stopListening();
    };
}

function toggleVoice() {
    if (!recognition) {
        showToast('您的浏览器不支持语音识别功能');
        return;
    }
    
    if (isListening) {
        recognition.stop();
    } else {
        try {
            recognition.start();
        } catch (e) {
            console.error('启动语音识别失败:', e);
        }
    }
}

function stopListening() {
    isListening = false;
    document.getElementById('mic-btn').classList.remove('listening');
    document.getElementById('voice-indicator').classList.remove('show');
    document.getElementById('voice-status').textContent = '在线';
}

function toggleBotSpeak() {
    botSpeakEnabled = !botSpeakEnabled;
    const btn = document.getElementById('speak-btn');
    
    if (botSpeakEnabled) {
        btn.classList.add('active');
        btn.title = '语音播报：开启';
    } else {
        btn.classList.remove('active');
        btn.title = '语音播报：关闭';
    }
}

function speak(text) {
    if (!botSpeakEnabled) return;
    
    if (synthesis.speaking) {
        synthesis.cancel();
    }
    
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'zh-CN';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;
    
    const voices = synthesis.getVoices();
    const chineseVoice = voices.find(v => v.lang.includes('zh'));
    if (chineseVoice) {
        currentUtterance.voice = chineseVoice;
    }
    
    currentUtterance.onstart = function() {
        document.getElementById('speak-btn').classList.add('speaking');
    };
    
    currentUtterance.onend = function() {
        document.getElementById('speak-btn').classList.remove('speaking');
    };
    
    currentUtterance.onerror = function() {
        document.getElementById('speak-btn').classList.remove('speaking');
    };
    
    synthesis.speak(currentUtterance);
}

function stopSpeaking() {
    if (synthesis.speaking) {
        synthesis.cancel();
        document.getElementById('speak-btn').classList.remove('speaking');
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
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
            
            marker.addEventListener('click', () => {
                showBridgePopup(bridge);
            });
            
            map.addOverlay(marker);
        }
    });
}

function showBridgePopup(bridge) {
    document.getElementById('popup-name').textContent = bridge.name;
    document.getElementById('popup-location').textContent = bridge.location || '';
    document.getElementById('popup-type').textContent = bridge.bridgeType || '';
    document.getElementById('popup-year').textContent = bridge.constructionYear || '';
    document.getElementById('popup-desc').textContent = bridge.description || '';
    
    document.getElementById('bridge-popup').classList.add('show');
    
    if (bridge.latitude && bridge.longitude) {
        map.panTo(new BMapGL.Point(bridge.longitude, bridge.latitude));
        map.setZoom(12);
    }
    
    speak(`这是${bridge.name}，位于${bridge.location || ''}。${bridge.description || ''}`);
}

function closePopup() {
    document.getElementById('bridge-popup').classList.remove('show');
    stopSpeaking();
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

async function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    stopSpeaking();
    showTyping();
    
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        });
        
        const data = await response.json();
        
        removeTyping();
        addMessage(data.message, 'bot');
        
        speak(data.message);
        
        if (data.action && data.action.type === 'bridge') {
            setTimeout(() => {
                navigateToBridge(data.action);
            }, 1000);
        }
    } catch (error) {
        removeTyping();
        const errorMsg = '抱歉，我现在有点忙，请稍后再试~';
        addMessage(errorMsg, 'bot');
        speak(errorMsg);
    }
}

function addMessage(content, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'bot' ? '桥' : '我';
    
    messageDiv.innerHTML = `
        <div class="avatar">${avatar}</div>
        <div class="message-content">${content}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTyping() {
    const messagesContainer = document.getElementById('chat-messages');
    
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot-message';
    typingDiv.id = 'typing-indicator';
    typingDiv.innerHTML = `
        <div class="avatar">桥</div>
        <div class="typing">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function removeTyping() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function navigateToBridge(action) {
    const bridge = bridges.find(b => b.id === action.bridgeId);
    
    if (bridge) {
        showBridgePopup(bridge);
        
        const navMsg = `正在跳转到${bridge.name}...`;
        addMessage(navMsg, 'bot');
    }
}

function askBot(question) {
    document.getElementById('user-input').value = question;
    sendMessage();
}

if (!document.getElementById('speak-btn')) {
    document.getElementById('speak-btn')?.classList.add('active');
}

window.onload = initMap;
