

if(GetQueryString('lang') == "zh"){
	var language = "CN";
	WeixinShareFun("千年调","相约宋朝画中人，共谱一曲“千年调”")
}else{
	var language = "EN";
	WeixinShareFun("The Song Painted","Meet the Song Dynasty humans in these millennium-old paintings")
}




var publicRemPageTool = function(dsize,type){
	this.dsize = dsize;
	this.type = type;
}

publicRemPageTool.prototype = {
    isCMSNEWPage:function(){
        var _CMSNEWPage = false;
        if(location.href.indexOf('CMSNEW/pageModule/edit')!= -1 || location.href.indexOf('CMSNEW/previewPage?pageId')!= -1 || location.href.indexOf('CMSNEW/editPage?pageId')!= -1 || location.href.indexOf('CMS/mvc/page/view')!= -1){
          _CMSNEWPage = true
        }
        return _CMSNEWPage;
    },
    isCMSNEWPageWidth:function(dsize,type){
        var _w = '';
        if($('#H5EditPage').length > 0 ){
          _w = $('#H5EditPage').width();
		}
        return _w;
    },
	 setbaseFont:function(dsize,type){
		var timerNum = 0;
		var timer = null;
		var ua = navigator.userAgent.toLowerCase();
		var isWeixin = ua.indexOf('micromessenger') != -1;

		var isGrounds = function () {
			return typeof grounds !== 'undefined' && typeof grounds.getDeviceInfo === 'function';
		}
		var getGroundsWidth = function () {
			var deviceInfo = grounds.getDeviceInfo();
			var screen = deviceInfo.getScreen();
			return screen.split('x')[0] / window.devicePixelRatio;
		}
		var getWidth = function () {
				if (isGrounds()) {
					return getGroundsWidth();
				} else {
					return window.innerWidth;
				}
			}

		function getBigFont() {
			var docEl = document.documentElement;
			var docWidth = getWidth();
			var fakeBody = document.createElement('body');
			var rem = docWidth / 7.5;
			docEl.style.fontSize = rem + 'px';
			var d = document.createElement('div');
			d.style.cssText =
				'width:1rem;height:0;overflow: hidden;position:absolute;z-index:-1;visibility: hidden;';
			fakeBody.appendChild(d);
			docEl.appendChild(fakeBody);
			// var realRem = (window.getComputedStyle(d, null).width.split('px')[0]/1).toFixed(1)/1;
			var realRem = isGrounds() ?  getGroundsWidth() / 7.5 : d.getBoundingClientRect().width.toFixed(1) / 1;
			// var realRem = d.offsetWidth;
			docEl.removeChild(fakeBody);
			//docEl.style.cssText = '';
			return {
				realRem: Math.floor(realRem),
				rem: Math.floor(rem)
			};
		}

		function _setweixinfont_szie(){
            var __fontDiff = getBigFont();
            if(type){
                    var t = 100, o = dsize, 
                    e = document.documentElement.clientWidth || window.innerWidth, 
                    n = Math.max(Math.min(e, 480), 320), 
                    h = 50;
                    320 >= n && (h = Math.floor(n / o * t * .99)), 
                    n > 320 && 362 >= n && (h = Math.floor(n / o * t * 1)), 
                    n > 362 && 375 >= n && (h = Math.floor(n / o * t * 1)), 
                    n > 375 && (h = Math.floor(n / o * t * .97));
                
                
                    if(__fontDiff.realRem!=__fontDiff.rem){
                        document.documentElement.style.fontSize = h/(__fontDiff.realRem/__fontDiff.rem) + "px"
                    }else{
                        document.documentElement.style.fontSize = h + "px"
                    }
            }else{
                    var width = dsize;
                    var deviceWidth = document.documentElement.clientWidth;
                    deviceWidth = deviceWidth>320?deviceWidth:320;
            
                    if(__fontDiff.realRem!=__fontDiff.rem){
                    
                    if(deviceWidth>width){
                        document.documentElement.style.fontSize=Math.floor(width/(width/100))/(__fontDiff.realRem/__fontDiff.rem)+"px";
                    }else{
                        document.documentElement.style.fontSize=Math.floor(deviceWidth/(width/100))/(__fontDiff.realRem/__fontDiff.rem)+"px";
                    }
                }else{
                    if(deviceWidth>width){
                        document.documentElement.style.fontSize=Math.floor(width/(width/100))+"px";
                    }else{
                        document.documentElement.style.fontSize=Math.floor(deviceWidth/(width/100))+"px";
                    }
                }
            }
        }

		if(isWeixin){
			 _setweixinfont_szie();
			timer = setInterval(function(){
				timerNum++;
				if(timerNum == 10){
					clearInterval(timer);
					return;
				}
				_setweixinfont_szie();
			}, 10);
		}else{
			if(type){
				var t = 100, o = dsize, 
				e = this.isCMSNEWPage() ? this.isCMSNEWPageWidth() : (document.documentElement.clientWidth || window.innerWidth), 
				n = Math.max(Math.min(e, 480), 320), 
				h = 50;
				320 >= n && (h = Math.floor(n / o * t * .99)), 
				n > 320 && 362 >= n && (h = Math.floor(n / o * t * 1)), 
				n > 362 && 375 >= n && (h = Math.floor(n / o * t * 1)), 
				n > 375 && (h = Math.floor(n / o * t * .97)), 
        document.documentElement.style.fontSize = h + "px";
			}else{
				var width = dsize;
        var deviceWidth = this.isCMSNEWPage() ? this.isCMSNEWPageWidth() : document.documentElement.clientWidth;
				deviceWidth = deviceWidth>320?deviceWidth:320;
				if(deviceWidth>width){
					document.documentElement.style.fontSize=Math.floor(width/(width/100))+"px";
				}else{
					document.documentElement.style.fontSize=Math.floor(deviceWidth/(width/100))+"px";
				}
			}
		}
		



	 },
	 showProper:function(dsize,type){
		 this.setbaseFont(dsize,type);
		 var L = this;
		 $(window).bind('resize', function (e) {
			 setTimeout(function(){
				 L.setbaseFont(dsize,type);
			 },300)
		 });

		 if(L.isCMSNEWPage() && $('#H5EditPage').length > 0 ){
			var _t = this;
			var observer = new MutationObserver(function (mutations, observer) {
				mutations.forEach(function (mutation) {
					L.setbaseFont(dsize,type);
				});
			});
			var config = {
				attributes: true,
				attributeOldValue: true,
				attributeFilter: [
					'style'
				]
			};
			var el = document.getElementById('H5EditPage');
			observer.observe(el, config);
		}

		 L.callbackOnpageshow(dsize,type);
	 },
	 callbackOnpageshow:function(dsize,type){
		 var L = this;
		 window.onpageshow = function(event) {
			 if (event.persisted || navigator.userAgent.indexOf('iPhone') > -1) {
				 setTimeout(function(){
					 L.setbaseFont(dsize,type);
					 L.setCallbackFactory();
				 },200)
			 }
		 }
	 },
	 setCallbackFactory:function(){
	 }
}

/*验证方法 */
function verificationfu(v){
	try{
		v = eval('(' + v + ')');
		if(v&&typeof(v)=="function"){
			return true;
		}else{
			return false;
		}
	}catch(e){}
}

/* 移动跳转PC*/
function publicJump(l){
	var wh =window.location.href;
	if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)|| (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
		
	}else if(wh.indexOf('CMSNEW/pageModule/edit')!= -1 || wh.indexOf('CMSNEW/previewPage?pageId')!= -1 || wh.indexOf('CMSNEW/editPage?pageId')!= -1 || wh.indexOf('CMS/mvc/page/view')!= -1 || wh.indexOf('CMS/producePage')!= -1){
		
	}else{
		window.location.href=l;
	}
}

/* 判断是否是移动,是返回true,否返回false*/
function judgeisMobile(){
	if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent)|| (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
		return true;
	}else{
		return false;
	}
}
/* 判断是屏幕比例和设计比例*/
function judgeScreenBlSize(){
	var windowWidth = document.documentElement.clientWidth > 750 ? 750 : document.documentElement.clientWidth;  
	var windowHeight = document.documentElement.clientHeight > 1334 ? 1334 : document.documentElement.clientHeight;
	var shijibl = 750/1334;
	var zhenshibi = windowWidth / windowHeight; 
	if(zhenshibi > shijibl){
		return true;
	}else{
		return false;
	}
}

var _videoObj = { 
	_ajax:function(url,cb,jcb,cFun){   //u 地址 cb回调函数名  jsoncb重写回调函数名  cFun执行方法 
		$.ajax({
			url: url,
			type:"get",
			dataType:"jsonp",
			cache:true,
			jsonp:cb,// 重写回调函数名字
			jsonpCallback:jcb,
			error:function(){
				//alert('数据异常,请稍后再试')
			},
			success:function(data){
				cFun(data);
			}
		});
	},
	_getAjaxScript:function(url){  //动态加载js
		var el = document.createElement("script");
		el.type="text/javascript";
		el.lang="javascript";
		el.src = url;
		document.getElementsByTagName("body")[0].appendChild(el);
	},
	_add0:function(m){
		return m<10?'0'+m:m 
	},
	_formatSeconds:function(value){//转化为分钟秒
	    var theTime = parseInt(value);// 秒
	    var theTime1 = 0;// 分
	    var theTime2 = 0;// 小时
	    if(theTime >= 60) {
	        theTime1 = parseInt(theTime/60);
	        theTime = parseInt(theTime%60);
	        if(theTime1 >= 60) {
	        theTime2 = parseInt(theTime1/60);
	        theTime1 = parseInt(theTime1%60);
	        }
	    }
	    var result = this._add0(parseInt(theTime));
	    if(theTime1 > 0) {
			result = ""+this._add0(parseInt(theTime1))+':'+result;
		}else{
			result = "00"+':'+result;
		}
		if(theTime2 > 0) {
			result = this._add0(parseInt(theTime2))+':'+result;
		}else{
			result = "00"+':'+result;
		}
	    return result;
	},
	_format:function(timestamp){//转化为分钟秒
		var time = new Date(timestamp);
		var year = time.getFullYear();
		var month = time.getMonth()+1;
		var date = time.getDate();
		var num =  year+'-'+this._add0(month)+'-'+this._add0(date);
		return num;
	},
	_RandomNum:function(Min, Max) { //随机数方法
      	var Range = Max - Min;
      	var Rand = Math.random();
      	if(Math.round(Rand * Range)==0){      
      	  return Min + 1;
      	}
      	var num = Min + Math.round(Rand * Range);
     	 return num;
	}
}



/*异步加载*/
window.Echo = (function(window, document, undefined) {
	'use strict';
	var store = [],
	offset,
	throttle,
	poll;
	var _inView = function(el) {
		var coords = el.getBoundingClientRect();
		return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(offset));
	};
	var _pollImages = function() {
		for (var i = store.length; i--;) {
			var self = store[i];
			if (_inView(self)) {
				self.src = self.getAttribute('data-echo');
				store.splice(i, 1);
			}
		}
	};
	var _throttle = function() {
		clearTimeout(poll);
		poll = setTimeout(_pollImages, throttle);
	};
	var init = function(obj) {
		var nodes = $('[data-echo]');
		var opts = obj || {};
		offset = opts.offset || 0;
		throttle = opts.throttle || 250;
		for (var i = 0; i < nodes.length; i++) {
			store.push(nodes[i]);
		}
		_throttle();
		if (document.addEventListener) {
			window.addEventListener('scroll', _throttle, false);
		} else {
			window.attachEvent('onscroll', _throttle);
		}
	};
	return {
		init: init,
		render: _throttle
	};
})(window, document);



function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}



/*分享*/
function WeixinShareFun(title,desc){
	config = {
		title:title,											//分享标题
		desc:desc,		//分享描述
		url:window.location.href,						//分享链接
		img:"https://news.cgtn.com/event/2022/The-Song-Painted/images/wx.jpg"			// 分享图片
	};
	wx.ready(function(){
		//自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
		wx.updateTimelineShareData({
			title: config.title,	// 分享标题
			link: config.url,
			imgUrl: config.img,		// 分享图标
			success: function () {
				//console.log("设置成功，分享到朋友圈");
			}
		});
		//自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
		wx.updateAppMessageShareData({
			title: config.title,	// 分享标题
			desc: config.desc,		// 分享描述
			link: config.url,
			imgUrl: config.img,		// 分享图标
			success: function () {
				//console.log("设置成功，分享给朋友");
			}
		});
	});
}
$.ajax({
	type: 'GET',
	url: 'https://wechat.cgtn.com/socialweb/social/weixin/getKeys.do?url=' + encodeURIComponent(location.href.split('#')[0]),
	contentType: 'application/json',
	dataType: 'json',
	success: function(data){
		wx.config({
			debug: false,
			appId: 'wxd61ff47456d31b8e', // 必填，公众号的唯一标识
			timestamp: data.data.timestamp, // 必填，生成签名的时间戳
			nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
			signature: data.data.signature,// 必填，签名，见附录1
			jsApiList: ['updateTimelineShareData','updateAppMessageShareData'] // 功能列表，我们要使用JS-SDK的什么功能
		});
	},
	error: function(e){
		// 本地调试时跳过微信API，线上环境不受影响
		console.log('微信JSSDK跳过（非线上域名）');
	}
})


//config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在 页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready 函数中。
wx.ready(function(){
	//自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
	wx.updateTimelineShareData({
		title: config.title,	// 分享标题
		link: config.url,
		imgUrl: config.img,		// 分享图标
		success: function () {
			//console.log("设置成功，分享到朋友圈");
		}
	});
	//自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
	wx.updateAppMessageShareData({
		title: config.title,	// 分享标题
		desc: config.desc,		// 分享描述
		link: config.url,
		imgUrl: config.img,		// 分享图标
		success: function () {
			//console.log("设置成功，分享给朋友");
		}
	});
});
wx.error(function(res){
	//ajaxErro(res);
	//console.log("微信授权失败，重新刷新页面");
});
