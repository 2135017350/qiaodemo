
if(judgeisMobile()){
	if(window.location.href.split("?")[1] != undefined){
		window.location.replace('https://news.cgtn.com/event/2022/The-Song-Painted-H5/index.html?' + window.location.href.split("?")[1]);
	}else{
		window.location.replace('https://news.cgtn.com/event/2022/The-Song-Painted-H5/index.html');
	}
}

var loadJsList = new Array();
// Fallback函数定义，确保模块加载失败时不会报错
function shijingFun(){ console.log('shijing模块跳过'); }
function shenxianFun(){ console.log('shenxian模块跳过'); }

var seriesNum = GetQueryString('num');
if(GetQueryString('lang') == "zh"){
	var language = "CN";
}else{
	var language = "EN";
}



musicPlayPause('',"https://news.cgtn.com/event/2022/The-Song-Painted/mp3/loading.mp3");

// var yejingW =$(".InfernalBox .mirrorBgBox .yejing").width();
// var yejingH = $(".InfernalBox .mirrorBgBox .yejing").height();

// $(".InfernalBox .mirrorBgBox .yejing").css({"width":yejingW,"height":yejingH,"font-size":0,})
// //var ce = ((100-(parseInt(documentFontSize)))/100)+1;
// $(".InfernalBox .mirrorBgBox .yejing .mirrorPop1").css({"width":(yejingW/(parseInt(documentFontSize)/100))+"px","height":(yejingH/(parseInt(documentFontSize)/100))+"px"})

//init("loading_canvas","loading","loading_dom_overlay_container","CE548ED7309A4C1CACFF9693A4723B32",[{src:"images/loading_atlas_.png", id:"loading_atlas_"}],1920,1080);
/*
var loaderUrl = "Build/SHPC_PAC_FN.loader.js";
var script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
	createUnityInstance(document.querySelector("#unity-canvas"), {
		dataUrl: "Build/SHPC_PAC_FN.data.unityweb",
		frameworkUrl: "Build/SHPC_PAC_FN.framework.js.unityweb",
		codeUrl: "Build/SHPC_PAC_FN.wasm.unityweb",
		streamingAssetsUrl: "StreamingAssets",
		companyName: "DefaultCompany",
		productName: "New Unity Project",
		productVersion: "1.0",
	}, (progress) => {
		//$(".load .progress span").text(progress);
		$(".load .progress span").html(Math.round(progress*100) + "%");
		if(Math.round(progress*100)  == 100 ){
			if(language == "EN"){//英文
				$(".load .progress span").html('<img src="https://news.cgtn.com/event/2022/The-Song-Painted/style/img/start.png"/>');
				$(".unity-desktop .skip").html('Skip<i></i>');
				$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=en");
				$(".navigation .header .header_list .list_dom.picture a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=en");

			}else if(language == "CN"){//中文
				$(".load .progress span").html('<img src="https://news.cgtn.com/event/2022/The-Song-Painted/style/img/startCN.png"/>');
				$(".unity-desktop .skip").html('跳过<i></i>');
				$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=zh");
				$(".navigation .header .header_list .list_dom.picture a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=zh");
			}
			$(".load .progress span img").click(function(){
				musicPlayPause('.unity-desktop .volume',"https://news.cgtn.com/event/2022/The-Song-Painted/mp3/perform.mp3");
				$(".unity-desktop").fadeIn(2000);
				
				setTimeout(function(){
					$(".unity-desktop .jiantou").show();
				},10000)  
			})
		}
		//$(".load .progress span").html(Math.round(progress*100) + "%");
		//console.log(progress+ "%");
	}).then((unityInstance) => {
		//$(".load").fadeOut(1000);
		//musicPlayPause('.unity-desktop .volume',"https://news.cgtn.com/event/2022/The-Song-Painted/mp3/perform.mp3");
		//$(".unity-desktop").fadeIn(2000);
		//console.log("加载完成加载完成加载完成加载完成加载完成");
		//var loaderTimer = setTimeout(function () {
			//loader.load();
		//},5000)
		
	
	}).catch((message) => {
		console.log(message);
		alert(message);
	});
};
document.body.appendChild(script);
*/
loader.load();

// $(".load").hide();
// animationEnd();
// loader.load();
var portalCollect=0;
function animationEnd(){
	document.querySelector("#behindAudioPlay").pause();
	$(".load").remove();
	$(".unity-desktop").fadeOut(800,function(){
		$(this).remove();
	});
	$(".portal").show();
	
	if(seriesNum > 0 && seriesNum < 7){
		//portalCollect = seriesNum;
		//console.log(portalCollect);
		updateURLParameter("num", seriesNum,true);
		$(".portal").addClass("portalBack");
		$(".portal .partyPart .PartIcon").eq((seriesNum-1)).addClass("collect");
		$(".portal .partyBack .PartAnim").eq((seriesNum-1)).addClass("collect");
	}else{
		updateURLParameter("num", "0",true);
		//console.log("出")
	}
	
	/*垂类选择*/
	// init("children_canvas","children","children_dom_overlay_container","5D2D2A96A6D94367AB29EFD34203C13A",[{src:"https://news.cgtn.com/event/2022/The-Song-Painted/images/children_atlas_.png", id:"children_atlas_"},{src:"images/children_atlas_2.png", id:"children_atlas_2"}],1700,1100);
	// init("shijing_canvas","shijing","shijing_dom_overlay_container","B8CAF5A8D68F4618A6D82B8B56EB5D57",[{src:"https://news.cgtn.com/event/2022/The-Song-Painted/images/shijing_atlas_.png", id:"shijing_atlas_"}],1790,1080);
	// init("wenren_canvas","wenren","wenren_dom_overlay_container","E3EEAC7B149C4A3E8595312F5B6281C8",[{src:"https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren_atlas_.png", id:"wenren_atlas_"}],1600,860);
	// init("yiren_canvas","yiren","yiren_dom_overlay_container","4444060226F241E38D9F3A4C4F416FE7",[{src:"https://news.cgtn.com/event/2022/The-Song-Painted/images/yiren_atlas_.png", id:"yiren_atlas_"},{src:"images/yiren_atlas_2.png", id:"yiren_atlas_2"}],1700,1080);
	// init("shinv_canvas","shinv","shinv_dom_overlay_container","3E2B295E6A1B4F1FB5DD5F1F67BB7735",[{src:"https://news.cgtn.com/event/2022/The-Song-Painted/images/shinv_atlas_.png", id:"shinv_atlas_"}],1700,1100);	
	init("shenxian_canvas","shenxian","shenxian_dom_overlay_container","F8FC3E858E294AE5A665665A8502234E",[{src:"images/shenxian_atlas_.png", id:"shenxian_atlas_"}],1024,821);
	// Echo.initEcho({
	// 	offset: 100,		//离可视区域多少像素的图片可以被加载
	// 	throttle:0 		//图片延时多少毫秒加载
	// });
}

$(window).on('beforeunload', function () {
	$(window).scrollTop(0);
});

/*临时跳过*/
// $(".load").fadeOut(0);
// $("html,body").css("overflow","inherit");
// $(".unity-desktop").remove();
// $(".partyPartContent").show(0);

// $(".partyPartContent").show();
// $(".partyPartContent .ertongPC").show();


$(".portal .partyPart .PartIcon").click(function(){
	updateURLParameter("num", "0");
	portalCollect = $(this).index();
	updateURLParameter("num", portalCollect+1,true);
	
	$(".navigation .header .header_party ul li").eq(portalCollect).addClass("cur").siblings().removeClass("cur")
	//if($("html,body").css("overflow") != "auto"){
		$("html,body").css("overflow","inherit");
		$(".partyPartContent").show();
		$(".portal").fadeOut(1000);
	//}
	$(".partyPartContent .series").eq(portalCollect).show();
	if(portalCollect == 0 && portalCollect == 3 && portalCollect == 5){
		$(".navigation").addClass("white").show();
	}else{
		$(".navigation").removeClass("white").show();
	}
	CNandEN()
})
$(".portal .partyPart .PartIcon").hover(function(){
	//portalCollect = $(this).index();
	$(".portal").addClass("portalBack");
	$(".portal .partyPart .PartIcon").eq($(this).index()).addClass("collect");
	$(".portal .partyBack .PartAnim").eq($(this).index()).addClass("collect");
},function(){
	//if(!$(".portal").hasClass("portalBackCur")){
		$(".portal").removeClass("portalBack");
		$(".portal .partyPart .PartIcon").removeClass("collect");
		$(".portal .partyBack .PartAnim").removeClass("collect");
	//}
})

$(".navigation .header .header_left").click(function () {
	document.body.scrollTop=document.documentElement.scrollTop = 0
	document.querySelector("#behindAudioPlay").pause();
	$("html,body").css("overflow","hidden");
	$(".partyPartContent").hide();
	$(".partyPartContent .series").hide();
	$(".portal").show();

	window.history.go(-1);
})


$(".navigation .header .header_party ul li").click(function(){
	updateURLParameter("num", $(this).index()+1,true);
	// document.removeEventListener('scroll', function(e) { })
	// window.removeEventListener('scroll', function(e) { })
$(".navigation .header .header_party ul li").eq($(this).index()).addClass("cur").siblings().removeClass("cur")
if( portalCollect != $(this).index()){
	document.body.scrollTop=document.documentElement.scrollTop = 0
	//$('html').animate({ scrollTop: 0 }, 50,function(){
		$("html,body").css("overflow-x","hidden");
	//})//页面滚动效果
	
	//portalCollect = $(this).index();
	if($(this).index() > portalCollect ){  	 //左边
	$(".partyPartContent .series").eq(portalCollect).stop().show().css("position","absolute").animate({"left":"-100%"},800,function(){$(this).attr("style","").hide()});
	$(".partyPartContent .series").eq($(this).index()).stop().show().css({"position":"absolute","right":"-100%","top": "0"}).animate({"right":"0"},800,function(){
		$(this).attr("style","").show();
		$("html,body").css("overflow-x","inherit");
	});
	}else if($(this).index() < portalCollect ){    //右边
	$(".partyPartContent .series").eq(portalCollect).stop().show().css("position","absolute").animate({"left":"100%"},800,function(){$(this).attr("style","").hide()});
	$(".partyPartContent .series").eq($(this).index()).stop().show().css({"position":"absolute","left":"-100%","top": "0"}).animate({"left":"0"},800,function(){
		$(this).attr("style","").show()
		$("html,body").css("overflow-x","inherit");
	});
	}else{
	
	}
	document.body.scrollTop=document.documentElement.scrollTop = 1
	portalCollect = $(this).index()
	CNandEN()
}
})


var store = [],portalCollectBack=-1;
function seriesListFun(){
	if(portalCollectBack != portalCollect){
		portalCollectBack = portalCollect
		musicPlayPause('.navigation .header .header_list .list_dom.audioDom',"https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool0"+(portalCollect+1)+".mp3");
	}
	if(portalCollect == 0){
		$(".navigation").addClass("white");
		var nodes = $('.Cool01 img[data-echo]');
		loadJs('ertongJS', 'static/js/ertong.js',function() {
			ertongFun();
		})
		if(typeof ertongFun == "function"){
			ertongFun();
		}
	}else if(portalCollect == 1){
		var nodes = $('.Cool02 img[data-echo]');
		$(".navigation").removeClass("white");
		loadJs('shijingJS', 'static/js/shijing.js',function() {
			shijingFun();
		})
	}else if(portalCollect == 2){
		var nodes = $('.Cool03 img[data-echo]');
		$(".navigation").removeClass("white");
		loadJs('yirenJS', 'static/js/yiren.js',function() {
			yirenFun();
		})
	}else if(portalCollect == 3){
		var nodes = $('.Cool04 img[data-echo]');
		$(".navigation").addClass("white");
		loadJs('shinvJS', 'JSstart/jquery.mousewheel.js',function() {
		loadJs('shinvJS2', 'static/js/shinv.js',function() {
			shinvFun();
		})
		})
	}else if(portalCollect == 4){
		var nodes = $('.Cool05 img[data-echo]');
		$(".navigation").addClass("white");
		loadJs('wenrenJS', 'static/js/wenren.js',function() {
			wenrenFun();
		})
	}else if(portalCollect == 5){
		var nodes = $('.Cool06 img[data-echo]');
		$(".navigation").removeClass("white");
		loadJs('shenxianJS', 'static/js/shenxian.js',function() {
			shenxianFun();
		})
	}else{
		//console.log("切换出错");
	}
	for (var i = 0; i < nodes.length; i++) {
		store.push(nodes[i]);
	}
	_pollImages() 
}



/*滚动监听*/
var clientHeight = document.documentElement.clientHeight;
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
var viewH = parseInt($(document).height());  	//可见高度
var contentH = parseInt($(window).height());  //内容高度
var controller = new ScrollMagic.Controller(); //视差滚动公共方法

var scrollTopPast = scrollTop;
var scrollTopPastTrue = true;
function _pollImages() {
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	
	//console.log("监听=="+scrollTop)
	viewH = parseInt($(window).height());		//可见高度
	contentH = parseInt($(window).height());  //内容高度
	if(scrollTopPast < scrollTop && scrollTopPastTrue == true){	//下
		if(scrollTop - scrollTopPast > 5){
			scrollTopPastTrue = false;
			$(".navigation").stop(true).animate({"top":"-100%"},500);
		}
	}else if(scrollTopPast > scrollTop  && scrollTopPastTrue == false) {	
		scrollTopPastTrue = true
		$(".navigation").stop(true).animate({"top":"0"},500);
	}
	scrollTopPast = scrollTop;
	
	// if(portalCollect == 0){
	// 	ertongFunScroll();
	// }else if(portalCollect == 1){
		
	// }else if(portalCollect == 2){
		
	// }else if(portalCollect == 3){
		
	// }else if(portalCollect == 4){
		
	// }else if(portalCollect == 5){
		
	// }else if(portalCollect == 6){
		
	// }else{
	// 	//console.log("监听出错");
	// }
	
for (var i = store.length; i--;) {
		var self = store[i];
		if (_inView(self)) {
			self.src = self.getAttribute('data-echo');
			store.splice(i, 1);
		}
	}
	

};


if (document.addEventListener) {
	window.addEventListener('scroll', _pollImages, false);
} else {
	window.attachEvent('onscroll', _pollImages);
}


var _inView = function(el) {
	var coords = el.getBoundingClientRect();
	return ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight) + parseInt(500));
};



/*
模糊检索
let keyword = "内容"; //需要搜索的关键字
let originalArr = [{"name":"内容","age":"18"},{"name":"内容2","age":"18"},{"name":"内容3","age":"18"}] //原始数组
let teacherList = this.originalArr.filter(array => array.name.match(keyword)); //关键代码
//console.log(teacherList) //匹配筛选之后的目标数组
*/

$(".navigation .header .header_list .list_dom.CN").click(function(){
	language = "CN";
	CNandEN()
})

$(".navigation .header .header_list .list_dom.EN").click(function(){
language = "EN";
CNandEN()
})


// $.ajax({
//    url: "./json/tt01.json",
//    dataType: 'json',
//    type: 'GET',
//    timeout: 30000,
//    error: function(){
//      alert("基本qq废了!");
//    },
//    success: function(data){
	// 	var dataChoose = data.log.entries;
	// 	for (key in dataChoose){
	// 		//console.log(dataChoose[key].request.url);
			
	// 	}
	
//    }
//  })


function CNandEN(){
	var data = domtext;
// $.ajax({
//   url: "./json/text.json",
//   dataType: 'json',
//   type: 'GET',
//   timeout: 3000,
//   error: function(){
//     alert("基本废了!");
//   },
//   success: function(data){
		
	if(language == "EN"){//英文
		updateURLParameter("lang", "en",true);
		$("head title").text('The Song, Painted');
		var dataChoose = data[portalCollect].choose[0]
		$("body").css("font-family","AbhayaLibreRegular");
		$(".Cool0"+(portalCollect+1)).removeClass("CN");
		$(".Cool0"+(portalCollect+1)).addClass("EN");
		// for (key in data[portalCollect].choose[0]){
		//   $(".Cool0"+(portalCollect+1)).removeClass("CN");
		//   $(".Cool0"+(portalCollect+1)).addClass("EN");
		//   $(".Cool0"+(portalCollect+1)+" ."+key).html(data[portalCollect].choose[0][key])
		// }
		$(".navigation .header .header_list .list_dom.CN").removeClass("cur");
		$(".navigation .header .header_list .list_dom.EN").addClass("cur");
		$(".navigation .header").addClass("EN").removeClass("CN");
		$(".navigation .header .header_left a").html("HOME")
		$(".navigation .header .header_list .list_dom.video a i").html("INSIGHT")
		$(".navigation .header .header_list .list_dom.picture a i").html("GALLERY")
		$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=en");
		$(".navigation .header .header_list .list_dom.picture a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=en");

	}else if(language == "CN"){//中文
		updateURLParameter("lang", "zh",true);
		$("head title").text('千年调');
		var dataChoose = data[portalCollect].choose[1]
		$("body").css("font-family","SourceHanSansCN");
		$(".Cool0"+(portalCollect+1)).removeClass("EN");
		$(".Cool0"+(portalCollect+1)).addClass("CN");
		// for (key in data[portalCollect].choose[1]){
		//   $(".Cool0"+(portalCollect+1)).removeClass("EN");
		//   $(".Cool0"+(portalCollect+1)).addClass("CN");
		//   $(".Cool0"+(portalCollect+1)+" ."+key).html(data[portalCollect].choose[1][key])
		// }
		$(".navigation .header .header_list .list_dom.CN").addClass("cur");
		$(".navigation .header .header_list .list_dom.EN").removeClass("cur");
		$(".navigation .header").addClass("CN").removeClass("EN");
		$(".navigation .header .header_left a").html("首页")
		$(".navigation .header .header_list .list_dom.video a i").html("入画")
		$(".navigation .header .header_list .list_dom.picture a i").html("赏画")
		$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=zh");
		$(".navigation .header .header_list .list_dom.picture a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=zh");
	}
		var keyindex = 0;
		for (key in dataChoose){
			keyindex ++;
			var dataCon = dataChoose[key];
			if(dataCon.length == 1){
				//console.log(dataCon[0]["PC"]);
				//console.log(dataCon[0]["H5"]);
				$(".Cool0"+(portalCollect+1)+" ."+key).html(dataCon[0]["PC"])
			}else{
				$(".Cool0"+(portalCollect+1)+" ."+key).html(dataCon)
			}
			if(keyindex == 26){
				//console.log(key)
				seriesListFun()
				//console.log("11111")
			}
		}
	//console.log("2222")
	//if(Object.keys(dataChoose).length == 26){
		//seriesListFun()
	//}
	
//   }
// })
}

function loadJs(id, url, callback, skipOnError) {
	if(loadJsList.indexOf(id) >= 0){
		callback();
	}else{
		loadJsList.push(id);
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		script.id = id;
		script.onload = script.onreadystatechange = function() {
			//alert(script.readyState);
			if (script.readyState && script.readyState != 'loaded' && script.readyState != 'complete') return;
			script.onreadystatechange = script.onload = null
			if (callback) callback();
		}
		script.onerror = function() {
			console.warn('JS文件加载失败，跳过: ' + url);
			script.onload = script.onerror = null;
			// 如果设置了跳过标记，仍然执行回调（用于后备函数）
			if (skipOnError && callback) callback();
		};
		document.body.appendChild(script);
	}
}

// loadJs('jQuery', 'jquery.js',function() {
// 	$('#loading').html('jquery.js加载完毕')
// })

//init("loading_canvas","loading","loading_dom_overlay_container","CE548ED7309A4C1CACFF9693A4723B32",[{src:"images/loading_atlas_.png", id:"loading_atlas_"}],1920,1080);
function init(canvas,animation,overlay,Composition,manifest,w,h) {
	// 检查AdobeAn是否已加载（防止动画模块缺失时报错）
	if(typeof AdobeAn === 'undefined') {
		console.warn('AdobeAn未定义，跳过动画初始化');
		return;
	}
	loadJs(animation, "static/js/"+animation+'.js',function() {
		initFun(canvas,animation,overlay,Composition,manifest,w,h);
	}, true);
}
function initFun(canvas,animation,overlay,Composition,manifest,w,h) {
	var anim_container = document.getElementById(animation);
	var canvas = document.getElementById(canvas);
	var dom_overlay_container = document.getElementById(overlay);
	var comp=AdobeAn.getComposition(Composition);
	//console.log(anim_container.childNodes)
	var lib=comp.getLibrary();
	createjs.MotionGuidePlugin.install();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp,canvas,animation,anim_container, dom_overlay_container,Composition,w,h)});
	var lib=comp.getLibrary();
	loader.loadManifest(manifest);
}
function handleFileLoad(evt, comp) {
	var images=comp.getImages();
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}
function handleComplete(evt,comp,canvas,animation,anim_container, dom_overlay_container,Composition,w,h) {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	var lib=comp.getLibrary();
	var ss=comp.getSpriteSheet();
	var queue = evt.target;
	var ssMetadata = lib.ssMetadata;
	for(i=0; i<ssMetadata.length; i++) {
		ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
	}
	var exportRoot = eval("new lib."+animation+"()");    ///关键
	var stage = new lib.Stage(canvas);	
	//Registers the "tick" event listener.
	var fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.framerate = 24;
		createjs.Ticker.addEventListener("tick", stage);
	}
	//Code to support hidpi screens and responsive scaling.
	AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container],stage,w,h);	
	AdobeAn.compositionLoaded(Composition);
	fnStartAnimation();

}


/*静音按钮*/

/*一级演绎*/
// $(".unity-desktop  .volume").click(function(){
// 	if($(this).hasClass("volume_up")){
// 		$(this).removeClass("volume_up").addClass("volume_off");
// 	}else{
// 		$(this).removeClass("volume_off").addClass("volume_up");
// 	}
// })

$(".unity-desktop .skip").mouseenter(function(){
	$(this).find("i").stop(true,true).animate({"width":"100%"},200)
})
$(".unity-desktop .skip").mouseleave(function(){
	$(this).find("i").stop(true,true).animate({"width":"0px"},200)
})
$(".unity-desktop .skip").click(function(){
	animationEnd();
})


/*导航内*/
// $(".navigation .header .header_list .list_dom.audioDom").click(function(){
// 	if($(this).hasClass("cur")){
// 		$(this).removeClass("cur");
// 	}else{
// 		$(this).addClass("cur");
// 	}
// })
/*音频控制*/
var isMusicOpen = true;
var imgDom,musicDom
function musicPlayPause(img, music) {
	musicDom = document.querySelector("#behindAudioPlay");
	musicDom.src = music;
	if(img == ""){
		musicPlay();
		document.addEventListener('WeixinJSBridgeReady', function () {
			musicPlay();
		},false);
	}else{
		imgDom = $(img);
		imgDom.unbind();
		if(imgDom.hasClass("volume_up")){
			musicPlay();
			imgDom.addClass('volume_up').removeClass('volume_off');
		}else{
			musicPause()
			imgDom.addClass('volume_off').removeClass('volume_up');
		}
		// 监听微信内置浏览器是否加载完成（只有微信端口才可以调用）
		document.addEventListener('WeixinJSBridgeReady', function () {
			if(imgDom.hasClass("volume_up")){
				musicPlay();
			}else{
				musicPause()
			}
		},false);
		// 绑定音乐图片的点击事件
		imgDom.click(function(){
			if (isMusicOpen) {
				imgDom.addClass('volume_off').removeClass('volume_up');
				musicPause();
			} else {
				imgDom.addClass('volume_up').removeClass('volume_off');
				musicPlay();
			}
		})
	}
	// 播放
	function musicPlay() {
		musicDom.play().catch(function(e) {
			console.log('音频自动播放被阻止，请点击页面后开启声音');
			isMusicOpen = false;
		});
		isMusicOpen = true;
	}
	// 暂停
	function musicPause() {
		musicDom.pause();
		isMusicOpen = false;
	}
}


/*  图片放大浮层 ***************************************************/
var audio = $('#audioTag').get(0);
var viewerOpenSeadragon,audioDomVolume_up;
$(".introduceFloat,.groupImage .imageList .img,.groupImage .imageList .imgMany ul li,.groupImage_ind03 .show_box .show_list li").click(function(){
	if($(".navigation .header .header_list .list_dom.audioDom").hasClass("volume_up")){
		audioDomVolume_up = true;
		document.querySelector("#behindAudioPlay").pause();
	}else{
		audioDomVolume_up = false;
	}
	groupFloatFun(this)
})

function groupFloatFun(obj){
	$(".groupFloat .conFloat .right .collect").addClass("icon-right").removeClass("icon-left");
	$(".groupFloat .conFloat .right").animate({right:"0%"},0);
	$(".groupFloat .conFloat .right .icon").removeClass("cur");
	if(language == "EN"){//英文
		var data = paintsEN;
	}else if(language == "CN"){//中文
		var data = paintsCN;
	}
	// $.ajax({
//       url: jsonUrl,
//       dataType: 'json',
//       type: 'GET',
//       timeout: 30000,
//       error: function(xml){
	// 		//alert("slow network please try again later!");
	// 		//console.log("paints_en.json网络速度慢，请稍后再试！");
//       },
//       success: function(data){
			for (key in data){
				//console.log(data[key].origin_image.split(".")[0] +"======"+ thisImg.split(".")[0])
				if(data[key].origin_image.split(".")[0] == $(obj).attr("data-img").split(".")[0]){
					$(".groupFloat .conFloat .right h2,.groupFloat .right .txt h2").html(data[key].title);
					$(".groupFloat .conFloat .right .details p").html(data[key].author+"<br/>"+data[key].skill+"<br/>"+data[key].size+"<br/>"+data[key].belong);
					$(".groupFloat .conFloat .right .describe p").html(data[key].description[0]);
					if(language == "EN"){//英文
						$(".groupFloat .conFloat .music").attr("src","https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_narrator/EN/"+data[key].audio);
					}else if(language == "CN"){//中文
						$(".groupFloat .conFloat .music").attr("src","https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_narrator/CN/"+data[key].audio);
					}
					// $(".groupFloat .conFloat .music")[0].play();
					$('.icon-btn').removeClass('icon-pause').addClass('icon-play');
					// audio.addEventListener('timeupdate', updateProgress, false); // 监听音频播放时间并更新进度条
					// audio.addEventListener('ended', audioEnded, false); // 监听播放完成事件
					
					infoOutputImages(data[key].origin_image.split('.')[0])
					return
				}
			}
	//     }
	// })
$(".groupFloat").show();
}

$(".groupFloat .conFloat .right .collect").click(function(){
if($(".groupFloat .conFloat .right").css("right") == "0px"){
	$(".groupFloat .conFloat .right .collect").addClass("icon-left").removeClass("icon-right");
	$(".groupFloat .conFloat .right").animate({right:-32.23+"%"},20);
}else{
	$(".groupFloat .conFloat .right .collect").addClass("icon-right").removeClass("icon-left");
	$(".groupFloat .conFloat .right").animate({right:0},20);
}
})


$(".groupFloat .control .audioClose").click(function(){
	
	$(".groupFloat").hide();
	$(".a-progress .pgs-total .pgs-play").css("width","0");
	$(".groupFloat .conFloat .music")[0].pause();
	$(".groupFloat .conFloat .music").attr("src","");
	viewerOpenSeadragon.removeOverlay("main-viewer");
	if(audioDomVolume_up){
		document.querySelector("#behindAudioPlay").play().catch(function(e){});
	}
})

$('#audioTag').on("loadedmetadata", function () {
$('#audioTime').text(transTime(this.duration));
$(document).on('touchend', '.pgs-total', function (e) {
	var x = e.originalEvent.changedTouches[0].clientX - this.offsetLeft;
	var X = x < 0 ? 0 : x;
	var W = $(this).width();
	var place = X > W ? W : X;
	audio.currentTime = (place / W) * audio.duration;
	$(this).children().css({width: (place / W) * 100 + "%"});
	updateProgress();
});
});

$('#playPause').click(function () {
audio.addEventListener('timeupdate', updateProgress, false); // 监听音频播放时间并更新进度条
audio.addEventListener('ended', audioEnded, false); // 监听播放完成事件
// 改变暂停/播放icon
if (audio.paused) {
	audio.play();
	$('.icon-btn').removeClass('icon-play').addClass('icon-pause');
} else {
	audio.pause();
	$('.icon-btn').removeClass('icon-pause').addClass('icon-play');
}
})

// 转换音频时长显示
function transTime(time) {
var duration = parseInt(time);
var minute = parseInt(duration / 60);
var sec = duration % 60 + '';
var isM0 = ':';
if (minute == 0) {
	minute = '00';
} else if (minute < 10) {
	minute = '0' + minute;
}
if (sec.length == 1) {
	sec = '0' + sec;
}
return minute + isM0 + sec
}
// 更新进度条
function updateProgress() {
var audio = document.getElementById('audioTag');
var value = Math.round((Math.floor(audio.currentTime) / Math.floor(audio.duration)) * 100, 0);
$('#progress').css('width', value * 1 + '%');
$('#playedTime').html(transTime(audio.currentTime));
}
// 播放完成
function audioEnded() {
var audio = document.getElementById('audioTag');
audio.currentTime = 0;
audio.pause();
$('#playPause>span').removeClass('icon-pause').addClass('icon-play');
}

function groupFloatRightCon(){
	var  H = $(".groupFloat .conFloat .right").outerHeight(true);
	var H01 = $(".groupFloat .conFloat .right h2").outerHeight(true);
	var H02 = $(".groupFloat .conFloat .right .audioPlay").outerHeight(true);
	var H03 = $(".groupFloat .conFloat .right .details").outerHeight(true);
	var H04 = $(".groupFloat .conFloat .right .describe").outerHeight(true);
	//console.log(H04 +"==="+ (H-H01-H02-H03-50))
	if(H04 > (H-H01-H02-H03-50)){
		//console.log("111")
		$(".groupFloat .conFloat .right .describe").height(H-H01-H02-H03-50);
		$(".groupFloat .conFloat .right .describe").css("overflow-y","scroll");
	}else{
		//console.log("222")
		$(".groupFloat .conFloat .right .describe").css("overflow-y","inherit");
	}
	
}

function infoOutputImages(pathImg){
	$(".groupFloat .conFloat .left #main-viewer").html('')
	$(".groupFloat").show();
	groupFloatRightCon();
	
	//$(".groupFloat .conFloat .left").html('<div id="main-viewer"><div id="nav-viewer"><div class="selection"></div></div></div>')
	$(".groupFloat .conFloat .left #main-viewer").html('')
	var urlServer ="https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_images/";
	//var urlServer ="./dzc_output_images/";
	//console.log(urlServer+pathImg+".xml");
	$.ajax({
		url: urlServer+pathImg+".xml",
		dataType: 'xml',
		type: 'GET',
		timeout: 30000,
		error: function(xml){
		//console.log("dzc_output_images=="+xml)
			//alert("slow network please try again later!");
			alert("网络速度慢，请稍后再试！");
		},
		success: function(xml){
			//console.log(xml);
			var infoImage = $(xml).find("Image");
			var infoSize = $(xml).find("Size");
			var duomo = {
				Image: {
					xmlns: infoImage.eq(0).attr("xmlns"),
					Url: urlServer+pathImg+"_files/",
					Format: infoImage.eq(0).attr("Format"),
					Overlap: infoImage.eq(0).attr("Overlap"),
					TileSize: infoImage.eq(0).attr("TileSize"),
					Size: {
						Width:  infoSize.eq(0).attr("Width"),
						Height: infoSize.eq(0).attr("Height")
					}
				}
			};
			//console.log(duomo);
			viewerOpenSeadragon = OpenSeadragon({
				id: 'main-viewer',
				//prefixUrl: 'images/',
				tileSources: duomo,

				showNavigator: true,
				
				navigatorPosition:   "BOTTOM_RIGHT",
				showNavigator:  true,
				navigatorHeight:   "150px",
				navigatorWidth:    "200px",

				zoomInButton:   "zoom-in",         //放大
				zoomOutButton:  "zoom-out",        //缩小
				homeButton:     "home",            //恢复默认
				fullPageButton: "full-page",       //全屏
				nextButton:     "next",            //下一张图片
				previousButton: "previous",        //前一张图片
			
			});

		}

	})
}



/*视频列表*/
//$(".groupVideo .videoPlayList ul li").eq(0).show();

videoPlayListFun($("#videoPlayList01"));
videoPlayListFun($("#videoPlayList02"));
videoPlayListFun($("#videoPlayList03"));
videoPlayListFun($("#videoPlayList04"));
videoPlayListFun($("#videoPlayList05"));
videoPlayListFun($("#videoPlayList06"));
function videoPlayListFun(obj){
	var left_btn = obj.find(".pageList .left_btn");
	var right_btn = obj.find(".pageList .right_btn");
	var radius_btn = obj.find(".pageList .radius_btn i");
	var left_btn = obj.find(".pageList .left_btn");
	var left_btn = obj.find(".pageList .left_btn");
	var objList = obj.find("ul li");
	var automatic,len = 0,leng =objList.length,lenCur = leng
	left_btn.on('click', function () {
		len--
		slidesFun(len);
	});
	right_btn.on('click', function () {
		len++
		slidesFun(len);
	});
	radius_btn.on('click', function () {
		slidesFun($(this).index());
	})
	obj.mouseover(function () {
		clearInterval(automatic);
	})
	// obj.mouseout(function () {
	// 	lunbo_auto();
	// })
	// function lunbo_auto() {
	// 	automatic = setInterval(function () {
	// 		len++; 
	// 		slidesFun(len);
	// 	}, 5000)
	// }
	function slidesFun(data){
		len = data;
		if(data > leng-1){len = 0}
		if(data < 0){len = leng-1}
		objList.eq(len).stop(true,true).fadeIn(800);
		objList.eq(lenCur).stop(true,true).fadeOut(800);
		radius_btn.eq(len).addClass('cur').siblings().removeClass('cur');
		lenCur = len;
	}
	//lunbo_auto();
	slidesFun(0)
}



/*视频浮层*/
var videoPlayer,myVideo;
function getVideo(url,preview) {
	videoPlayer = $("#myVideo").get(0);
	if(typeof(videoPlayer)!="undefined"){
		var myVideo = videojs('myVideo');
		myVideo.dispose();
	}
	let html = `<video id="myVideo" fill style=" width: 300px;height: 300px;" class="video-js warn-video vjs-default-skin vjs-big-play-centered" controls preload="auto" data-setup='{}'></video>`;
	let node = document.createRange().createContextualFragment(html);
	document.querySelector("#videoPlay").appendChild(node);
	myVideo = videojs("myVideo", {
		"autoplay": true,
		"loop": false,
		"preload": true,
		"width": $(".groupMp4 .conFloat .left").width(),
		"height":$(".groupMp4 .conFloat .left").height(),
		"posterImage": true,
		"poster": "https://statics.cctv.cn/static_new/2022/CGTN/dzc_output_painting/"+preview,
		"textTrackDisplay": false,
		"loadingSpinner": false,
		"bigPlayButton": true,
		"controls": true,
		"controlBar": true,
		"errorDisplay": false,
		"textTrackSettings": true,
		sources: [{
			src: url, //视频地址
			type: "application/x-mpegURL",
		},],
	});
	myVideo.play().catch(function(e){});
}


$(".groupMp4 .conFloat .left .video .video-js").css("height","100vh");

$(".groupVideo .videoPlayList ul li").click(function(){
	
	if($(".navigation .header .header_list .list_dom.audioDom").hasClass("volume_up")){
		audioDomVolume_up = true;
		document.querySelector("#behindAudioPlay").pause();
	}else{
		audioDomVolume_up = false;
	}
	
	$(".groupMp4 .conFloat .right .collect").addClass("icon-right").removeClass("icon-left");
	$(".groupMp4 .conFloat .left").animate({width:67.66+"%"},20);
	$(".groupMp4 .conFloat .right").animate({right:0},20);
	
	if(language == "EN"){//英文
		var data = videosEN;
	}else if(language == "CN"){//中文
		var data = videosCN;
	}
	for (key in data){
		if(data[key].video_img.split(".")[0] == $(this).attr("data-img").split(".")[0]){
			$(".groupMp4 .right .txt h2").html(data[key].title);
			$(".groupMp4 .conFloat .right .txt .details p").html(data[key].author);
			$(".groupMp4 .conFloat .right .txt .describe p").html(data[key].author_desc[0]+"<br/><br/>"+data[key].video_desc[0]);
			$(".groupMp4").show();
			getVideo(data[key].video_url,data[key].video_img);
			groupMp4RightCon();
			return
		}
	}
	
})

$(".groupMp4 .conFloat .right .collect").click(function(){
if($(".groupMp4 .conFloat .right").css("right") == "0px"){
	$(".groupMp4 .conFloat .right .collect").addClass("icon-left").removeClass("icon-right");
	$(".groupMp4 .conFloat .left").animate({width:100+"%"},20);
	$(".groupMp4 .conFloat .right").animate({right:-32.23+"%"},20);
}else{
	$(".groupMp4 .conFloat .right .collect").addClass("icon-right").removeClass("icon-left");
	$(".groupMp4 .conFloat .left").animate({width:67.66+"%"},20);
	$(".groupMp4 .conFloat .right").animate({right:0},20);
}
})

$(".groupMp4 .control .audioClose").click(function(){
	if(audioDomVolume_up){
		document.querySelector("#behindAudioPlay").play().catch(function(e){});
	}
	videoPlayer = $("#myVideo").get(0);
	if(typeof(videoPlayer)!="undefined"){
		var myVideo = videojs('myVideo');
		myVideo.dispose();
	}
	$(".groupMp4").hide();
})

function groupMp4RightCon(){
	$(".groupMp4 .conFloat .right .describe").attr("style","");
	var  H = $(".groupMp4 .conFloat .right").outerHeight(true);
	var H01 = $(".groupMp4 .conFloat .right h2").outerHeight(true);
	var H02 = $(".groupMp4 .conFloat .right .icon").outerHeight(true);
	var H03 = $(".groupMp4 .conFloat .right .details").outerHeight(true);
	var H04 = $(".groupMp4 .conFloat .right .describe").outerHeight(true);
	//console.log(H04 +"==="+ (H-H01-H02-H03-50))
	if(H04 > (H-H01-H02-H03-50)){
		//console.log("111")
		$(".groupMp4 .conFloat .right .describe").height(H-H01-H02-H03-50);
		$(".groupMp4 .conFloat .right .describe").css("overflow-y","scroll");
	}else{
		//console.log("222")
		$(".groupMp4 .conFloat .right .describe").css("overflow-y","inherit");
	}
}

/*关于我们*/
$(".groupWe .imgBg02").mouseenter(function(){
	$(".groupWe .text01").hide();
	$(".groupWe .text02").show();
	$(".groupWe .imgBg").stop(true).animate({"width":"23.17em"},300,function(){$(".groupWe .imgBg01,.groupWe .imgBg02").css("background","none");})
})
$(".groupWe .imgBg02").mouseleave(function(){
	$(".groupWe .imgBg01,.groupWe .imgBg02").attr("style","");
	$(".groupWe .imgBg").stop(true).animate({"width":"4.88em"},300,function(){$(".groupWe .text02").hide();
	$(".groupWe .text01").show();})
})




function updateURLParameter(param, paramVal,type){
	var newAdditionalURL = "";
	var tempArray = window.location.href.split("?");
	//var tempArray = url.href.split("?");
	var baseURL = tempArray[0];
	var additionalURL = tempArray[1];
	var temp = "";
	if (additionalURL) {
		tempArray = additionalURL.split("&");
		for (i=0; i<tempArray.length; i++){
			if(tempArray[i].split('=')[0] != param){
				newAdditionalURL += temp + tempArray[i];
				temp = "&";
			}
		}
	}
	var rows_txt = temp + "" + param + "=" + paramVal;
	//return baseURL + "?" + newAdditionalURL + rows_txt;
	if(type){
		window.history.replaceState(null, null, baseURL + "?" + newAdditionalURL + rows_txt);  	//修改url
	}else{
		window.history.pushState(null, null, baseURL + "?" + newAdditionalURL + rows_txt); 		//记录url
	}

}


$(function(){
	//pushHistory();
	window.addEventListener("popstate", function(e) {
		//console.log("监听到返回按钮事件啦=="+GetQueryString("lang")+"=="+GetQueryString("num"));
		//根据自己的需求实现自己的功能
		//window.location.href = 'https://www.baidu.com'
		// if(GetQueryString("num") == 0){
			
		// }
		// $(".portal").show();
		// $(".partyPartContent .series").hide();
		// $(".navigation").hide();

		document.body.scrollTop=document.documentElement.scrollTop = 0
		document.querySelector("#behindAudioPlay").pause();
		$("html,body").css("overflow","hidden");
		$(".partyPartContent").hide();
		$(".partyPartContent .series").hide();
		$(".portal").show();
		
	}, false);

	// function pushHistory() {
	// 	var state = {
	// 		title: "title",
	// 		url: "#"
	// 	};
	// 	window.history.pushState(state, "title", "#");
	// }
});




