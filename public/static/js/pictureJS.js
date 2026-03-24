
$("html,body").css("overflow","inherit");

var widthresize = window.innerWidth;
var ispc;
if(window.innerWidth<=1024){
    ispc = false;
}else{
    ispc = true;
}
function updateHref(){
    //window.location.href=window.location.href;
    //window.location.reload(); 
}
$(window).resize(function () {//小于1024时刷新页面
	if(window.innerWidth<=1024){
        updateHref();          
        ispc=false;
    }
    if(window.innerWidth>1024){
        updateHref();
        ispc=true;
    }
});

var config = {
	title:"The Song Painted",											//分享标题
	desc:"Meet the Song Dynasty humans in these millennium-old paintings",		//分享描述
	url:window.location.href,						//分享链接
	img:"https://news.cgtn.com/event/2022/The-Song-Painted/images/wx.jpg"			// 分享图片
};
if(GetQueryString('lang') == "zh"){
	var language = "CN";
	WeixinShareFun("千年调","相约宋朝画中人，共谱一曲“千年调”")
	$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=zh");

}else{
	var language = "EN";
	WeixinShareFun("The Song Painted","Meet the Song Dynasty humans in these millennium-old paintings")
	$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=en");
}

var num = GetQueryString('num')-1;
let originalArrData;    //原始数组
let teacherListData;    //检索数据
var ImggeListpage = 0;
var AllstartTrue = true;
$(".navigation .header .header_list .list_dom.CN").click(function(){
    language = "CN";
    CNandEN()
})

$(".navigation .header .header_list .list_dom.EN").click(function(){
    language = "EN";
    CNandEN()
})

CNandEN();


function CNandEN(){	
	show_listENandCN();
	
	$(".groupImage_ind03 .show_null").hide();
	$(".groupImage_ind03 .retrieval").hide();
	$(".groupImage_ind02").show();
	
    if(language == "EN"){//英文
		updateURLParameter("lang", "en");
		$("head title").text('The Song Painted');
        $("body").css("font-family","AbhayaLibreRegular");
		$(".navigation .header .header_list .list_dom.CN").removeClass("cur");
		$(".navigation .header .header_list .list_dom.EN").addClass("cur");
        $(".navigation .header").addClass("EN").removeClass("CN");
		$(".page_wrap").addClass("EN").removeClass("CN");
        $(".navigation .header .header_left a").html("HOME")
        $(".navigation .header .header_list .list_dom.video a i").html("INSIGHT")
        $(".navigation .header .header_list .list_dom.picture a i").html("GALLERY")
        $(".groupImage_ind02 h2").html("GALLERY")
        $(".groupImage_ind02 p").html("Swipe through high-resolution images of over 100 paintings from the Song Dynasty to see what life looked like a millennium ago and learn about the golden age of art in imperial China.")
        $(".groupImage_ind01 .show_box .show_list li").each(function(index){
        	$(this).find("img").attr("src",$(this).find("img").attr("data-EN"));
        })
		$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=en");		
        originalArrData = paintsEN;
    }else if(language == "CN"){//中文
		updateURLParameter("lang", "zh");
		$("head title").text('千年调');
        $("body").css("font-family","SourceHanSansCN");
		$(".navigation .header .header_list .list_dom.EN").removeClass("cur");
		$(".navigation .header .header_list .list_dom.CN").addClass("cur");
        $(".navigation .header").addClass("CN").removeClass("EN");
		$(".page_wrap").addClass("CN").removeClass("EN");
        $(".navigation .header .header_left a").html("首页")
        $(".navigation .header .header_list .list_dom.video a i").html("入画")
        $(".navigation .header .header_list .list_dom.picture a i").html("赏画")
        $(".groupImage_ind02 h2").html('<img src="https://news.cgtn.com/event/2022/The-Song-Painted/style/img/imageListCN.png">')
        $(".groupImage_ind02 p").html("这里汇集了百余幅宋代人物画经典作品，高清再现宋朝的世间百态，带你领略中国绘画史上的全盛时期，一睹笔墨下的千年画韵。")
        $(".groupImage_ind01 .show_box .show_list li").each(function(index){
        	$(this).find("img").attr("src",$(this).find("img").attr("data-CN"));
        })
		$(".navigation .header .header_list .list_dom.video a").attr("href","https://news.cgtn.com/event/2022/The-Song-Painted/insight/index.html?lang=zh");

        originalArrData = paintsCN;
    }
	if(AllstartTrue){
		Allstart();
		AllstartTrue = false;
	}
    // $.ajax({
    //     url: jsonUrl,
    //     dataType: 'json',
    //     type: 'GET',
    //     timeout: 30000,
    //     error: function(xml){
    //         //console.log("基本废了!");
    //     },
    //     success: function(data){
            dataFun(originalArrData);
    //     }
    // })
	setTimeout(function(){
		if(num >= 0){
			groupFloatFun(originalArrData[num].origin_image,num)
		}
	},1000)
}



function dataFun(data){
    var ImggeListpage = 0;
    var dataHTML ='';
    var dataHTMLpage ='';
	
    for (key in data){
        if((parseInt(key)+1)%18 == 1){
            ImggeListpage++;
            if(key == 0){
                dataHTML += '<ul class="show_list cur">';
                dataHTMLpage +='<li class="cur">'+ImggeListpage+'</li>';
            }else{
                dataHTML += '<ul class="show_list">';
                dataHTMLpage +='<li>'+ImggeListpage+'</li>';
            }
        }
        dataHTML += `<li data-img="`+data[key].origin_image+`" data-id="`+ key +`">
                <div class="img_box"><img src="https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_painting/`+data[key].cover+`" alt="`+data[key].title+`" title="`+data[key].title+`"></div>
                <div class="title" title="`+data[key].title+`">`+data[key].title+`</div>
                <div class="solid"></div>
                <div class="con">
                    <p title="`+data[key].author+`">`+data[key].author+`</p>
                    <p title="`+data[key].size+`&nbsp;&nbsp;`+data[key].skill+`">`+data[key].size+`&nbsp;&nbsp;`+data[key].skill+`</p>
                    <p title="`+data[key].belong+`">`+data[key].belong+`</p>
                </div>
            </li>`;
        if((parseInt(key)+1)%18 == 0 && (parseInt(key)+1) != 0){
          
            dataHTML += '</ul>'
        }
    }
    dataHTML += '</ul>'
    $("#show_box").html(dataHTML);
    if(ImggeListpage<=1){
        $(".groupImage_ind04").hide();
    }else{
        $(".groupImage_ind04").show();
        $("#page_list").html(dataHTMLpage);
    }
    $(".groupImage_ind03 .show_box .show_list li").click(function(){
		// if(language == "EN"){//英文
		// 	$(".groupFloat").addClass("EN").removeClass("CN");
		// }else if(language == "CN"){//中文
		// 	$(".groupFloat").addClass("CN").removeClass("EN");
		// }
		// $(".groupFloat .conFloat .arrowhead").removeClass("cur");
		// $(".groupFloat .conFloat .arrowhead").css({bottom:"3rem"})
		// $(".groupFloat .conFloat .right").removeClass("cur");
		// $(".groupFloat .conFloat .right").css({height:"3rem"});
		updateURLParameter("num", (parseInt($(this).attr("data-id"))+1));
        groupFloatFun($(this).attr("data-img"),$(this).attr("data-id"))
    })
    $(".groupImage_ind04 .page_box .page_list li").click(function(){
        $("html,body").scrollTop($(".groupImage_ind03").offset().top);
        $(".groupImage_ind03 .show_box .show_list").eq($(this).index()).addClass("cur").siblings().removeClass("cur");
        $(this).addClass("cur").siblings().removeClass("cur");
    })
}

$(".groupImage_ind01 .show_box .show_list li").click(function(){
	// if(language == "EN"){//英文
	// 	$(".groupFloat").addClass("EN").removeClass("CN");
	// }else if(language == "CN"){//中文
	// 	$(".groupFloat").addClass("CN").removeClass("EN");
	// }
	// $(".groupFloat .conFloat .arrowhead").removeClass("cur");
	// $(".groupFloat .conFloat .arrowhead").css({bottom:"3rem"})
	// $(".groupFloat .conFloat .right").removeClass("cur");
	// $(".groupFloat .conFloat .right").css({height:"3rem"});
	updateURLParameter("num", (parseInt($(this).attr("data-id"))+1));
	groupFloatFun($(this).attr("data-img"),$(this).attr("data-id"))
})



function Allstart(){
	if (!ispc) {
		
		new Swiper('#sports', {
			loop: true, // 循环模式选项
			autoplay: {
			   delay: 3000,
			   disableOnInteraction: false,
			},

			pagination: {
				el: '.swiper-pagination',
			},
		})
	} else {
		// pc轮播
		
		//$(".groupImage_ind01 .show_box .show_list li").eq(0).show();
		slidesFun(0)
		$('.left_btn').on('click', function () {
			len--
			slidesFun(len);
		});
		$('.right_btn').on('click', function () {
			len++
			slidesFun(len);
		});
		$('.radius_btn i').on('click', function () {
			slidesFun($(this).index());
		})
		lunbo_auto();
		$('.show_box').mouseover(function () {
			clearInterval(automatic);
		})
		$('.show_box').mouseout(function () {
			lunbo_auto();
		})
	}
}

var automatic,len = 0,leng = $('.groupImage_ind01 .show_box .show_list li').length,lenCur = leng
function lunbo_auto() {
	automatic = setInterval(function () {
		len++; 
		slidesFun(len);
	}, 5000)
}
function slidesFun(data){
	len = data;
	if(data > leng-1){len = 0}
	if(data < 0){len = leng-1}
	$('.groupImage_ind01 .show_box .show_list li').eq(len).stop(true,true).fadeIn(800);
	$('.groupImage_ind01 .show_box .show_list li').eq(lenCur).stop(true,true).fadeOut(800);
	$('.radius_btn i').eq(len).addClass('cur').siblings().removeClass('cur');
	lenCur = len;
}

function show_listENandCN(){
	$('.groupImage_ind01 .show_box .show_list li').each(function(index){
		if(language == "EN"){
			if(judgeisMobile()){
				$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("src",$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("data-h5-en"))
			}else{
				$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("src",$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("data-pc-en"))
			}
		}else if(language == "CN"){
			if(judgeisMobile()){
				$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("src",$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("data-h5-cn"))
			}else{
				$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("src",$('.groupImage_ind01 .show_box .show_list li').eq(index).find("img").attr("data-pc-cn"))
			}
		}
	})
}

$(".navigation .header .header_left a").click(function(){
	if(judgeisMobile()){
		window.open("https://news.cgtn.com/event/2022/The-Song-Painted-H5/index.html","_self");
	}else{
		window.open("https://news.cgtn.com/event/2022/The-Song-Painted/index.html","_blank");
	}
})

/*搜索 */
var searchVal;
$('#imageSearch').bind('keypress', function (event) { 
	if (event.keyCode == "13") { 
	   //alert("fds");
		// $("#imageSearchdet").click(function(){
			searchFun();
		//});
	}
})
$("#imageSearchdet").click(function(e){
    e.stopPropagation();
	searchFun();
})

function searchFun(){
	searchVal = $("#imageSearch").val().replace(/\s+/g,'');
	 if(searchVal == "" || searchVal == null || searchVal == undefined){
	     searchVal = $("#imageSearch").attr("placeholder");
	 }
	 $(".header .header_seh").animate({"width": "0%"},5,function(){$(this).hide()});
	 $(".groupImage_ind02").hide();
	 $("html,body").scrollTop($(".groupImage_ind03").offset().top);
	 var teacherListDataTitle = originalArrData.filter(originalArrData => originalArrData.title.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataAuthor = originalArrData.filter(originalArrData => originalArrData.author.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataSkill= originalArrData.filter(originalArrData => originalArrData.skill.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataType= originalArrData.filter(originalArrData => originalArrData.type.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataSize= originalArrData.filter(originalArrData => originalArrData.size.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataBelong= originalArrData.filter(originalArrData => originalArrData.belong.toLowerCase().match(searchVal.toLowerCase()));
	 // var teacherListDataDescription= originalArrData.filter(originalArrData => originalArrData.description[0].toLowerCase().match(searchVal.toLowerCase()));
	 // teacherListData = teacherListDataTitle.concat(teacherListDataAuthor).concat(teacherListDataSkill).concat(teacherListDataType).concat(teacherListDataSize).concat(teacherListDataBelong).concat(teacherListDataDescription);
	 // //console.log(teacherListDataTitle);
	 ////console.log(teacherListData);
		////console.log(teacherListData);
		// teacherListData = jQuery.uniqueSort(teacherListData);
		// //console.log(teacherListData);
		////console.log(teacherListDataTitle);
		//teacherListData = removalArr(teacherListDataTitle)
	 //console.log(teacherListDataTitle);
		
	 $(".groupImage_ind03 .retrieval").show().html('<div class="text"><span>'+searchVal+'</span><i></i></div>')
	// window.history.replaceState('', '', changeURLArg(window.location.href, 'imageSearch',searchVal));
	 if(teacherListDataTitle.length <= 0){
	     $(".groupImage_ind03 .show_null p i").html(searchVal);
	     $(".groupImage_ind03 .show_null").show();
	 }else{
	     $(".groupImage_ind03 .show_null").hide();
	 }
		
	 dataFun(teacherListDataTitle);
		
	 $(".groupImage_ind03 .retrieval .text i").click(function(){	//删除搜索
	    // window.history.replaceState('', '', changeURLArg(window.location.href, '',''));
	     $(".groupImage_ind03 .show_null").hide();
	     $(".groupImage_ind03 .retrieval").hide();
	     $(".groupImage_ind02").show();
	     dataFun(originalArrData)
	 })
}

function removalArr(arrData){
	  ////console.log(arrData);
	let hash = {};
	arrData = arrData.reduce((preVal, curVal) => {
		hash[curVal.id] ? '' : hash[curVal.id] = true && preVal.push(curVal);
		////console.log("arrData=="=);
		return preVal
	}, [])
}
$('.navigation .header .header_list .list_dom.search').on('click', function(e) {
    e.stopPropagation();
    $("#imageSearch").val("");
    $(".header .header_seh").show().animate({"width":"5em"},500);
})
$('#imageSearch').on('click', function(e) {
e.stopPropagation();
})
$('html,body').on('click', function() {
    $("#imageSearch").val("");
    $(".header .header_seh").animate({"width": "0"},500,function(){$(this).hide()});
})



// 动态修改链接
function changeURLArg(url,arg,arg_val){
    var pattern=arg+'=([^&]*)';
    var replaceText=arg+'='+arg_val;
    if(arg == ""){
        return url.split('?')[0];
    }
    if(url.match(pattern)){
        var tmp='/('+ arg+'=)([^&]*)/gi';
        tmp=url.replace(eval(tmp),replaceText);
        return tmp;
    }else{
        if(url.match('[\?]')){
            return url+'&'+replaceText;
        }else{
            return url+'?'+replaceText;
        }
    }
    return url+'\n'+arg+'\n'+arg_val;
}






/*  图片放大浮层 */
var audio = $('#audioTag').get(0);
var viewerOpenSeadragon;
function groupFloatFun(obj,id){
	if(ispc){
		//$(".groupFloat .conFloat .right .icon").removeClass("cur");
		$(".groupFloat .conFloat .right .collect").addClass("icon-right").removeClass("icon-left");
		$(".groupFloat .conFloat .right").animate({right:"0%"},0);
	}else{
		$(".groupFloat .conFloat .right .titleSmall").show();
		$(".groupFloat .conFloat .arrowhead").removeClass("cur");
		$(".groupMp4 .conFloat .right h2").css("height","1.2rem");
		$(".groupFloat .conFloat .arrowhead").css({bottom:"3rem"})
		$(".groupFloat .conFloat .right").removeClass("cur");
		$(".groupFloat .conFloat .right").css({height:"3rem"});
	}
	if(language == "EN"){//英文
		$(".groupFloat").addClass("EN").removeClass("CN");
	}else if(language == "CN"){//中文
		$(".groupFloat").addClass("CN").removeClass("EN");
	}
	
	// $(".groupFloat .conFloat .right h2,.groupFloat .right .txt h2").text(data[key].title);
	// $(".groupFloat .conFloat .right .details p,.groupFloat .right .txt .txt01").html(data[key].author+"<br/>"+data[key].skill+"<br/>"+data[key].size+"<br/>"+data[key].belong);
	// $(".groupFloat .conFloat .right .describe p,.groupFloat .right .txt .txt02").text(data[key].description[0]);
	// infoOutputImages(data[key].origin_image.split('.')[0])
	var data = originalArrData;
	// $.ajax({
 //        url: jsonUrl,
 //        dataType: 'json',
 //        type: 'GET',
 //        timeout: 30000,
 //        error: function(xml){
	// 		//alert("slow network please try again later!");
	// 		alert("paints_en.json网络速度慢，请稍后再试！");
 //        },
 //        success: function(data){
			for (key in data){
				if(data[key].origin_image.split(".")[0] == obj.split(".")[0]){
					$(".groupFloat .conFloat .right .titleSmall").text(data[key].title);
					$(".groupFloat .conFloat .right .txt h2").text(data[key].title);
					$(".groupFloat .conFloat .right .txt .details p").html(data[key].author+"<br/>"+data[key].skill+"<br/>"+data[key].size+"<br/>"+data[key].belong);
					$(".groupFloat .conFloat .right .txt .describe p").html(data[key].description[0]);
					
					if(language == "EN"){//英文
						$(".groupFloat .conFloat .music").attr("src","https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_narrator/EN/"+data[key].audio);
					}else if(language == "CN"){//中文
						$(".groupFloat .conFloat .music").attr("src","https://news.cgtn.com/event/2022/The-Song-Painted/dzc_output_narrator/CN/"+data[key].audio);
					}
					//$(".groupFloat .conFloat .music")[0].play();
					$('.icon-btn').removeClass('icon-pause').addClass('icon-play');
					// audio.addEventListener('timeupdate', updateProgress, false); // 监听音频播放时间并更新进度条
					// audio.addEventListener('ended', audioEnded, false); // 监听播放完成事件
					
					infoOutputImages(data[key].origin_image.split('.')[0])
					return
				}
			}
    //     }
    // })
	
    
}



/*移动端*/
$(".groupFloat .right .close").click(function(){
	updateURLParameter("num", "")
	$(".groupFloat").hide();
	$(".groupFloat .conFloat .music")[0].pause();
})
$(".groupFloat .conFloat .right .icon_erji").click(function(){
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		$(".groupFloat .conFloat .music")[0].play();
	}else{
		$(this).addClass("cur");
		$(".groupFloat .conFloat .music")[0].pause();
	}
})
$(".groupFloat .conFloat .arrowhead").click(function(){
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		$(this).animate({bottom:"3rem"},500)
		$(".groupFloat .conFloat .right h2").css("height","1.2rem");
		$(".groupFloat .conFloat .right").removeClass("cur");
		$(".groupFloat .conFloat .right").animate({height:"3rem"},500,function(){
			$(".groupFloat .conFloat .right .titleSmall").show();
		});
	}else{
		$(this).addClass("cur");
		$(this).animate({bottom:"90.8vh"},500)
		$(".groupFloat .conFloat .right .titleSmall").hide();
		$(".groupFloat .conFloat .right h2").css("height","auto");
		$(".groupFloat .conFloat .right").addClass("cur");
		$(".groupFloat .conFloat .right").animate({height:"90vh"},500,function(){
			groupFloatRightCon();
		});
		
	}
	//$(".groupFloat .right").toggle();
})


/*pc端*/
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
	updateURLParameter("num", "")
	$(".groupFloat").hide();
	$(".a-progress .pgs-total .pgs-play").css("width","0");
	$(".groupFloat .conFloat .music")[0].pause();
	$(".groupFloat .conFloat .music").attr("src","");
	viewerOpenSeadragon.removeOverlay("main-viewer");
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
	$(".groupFloat .conFloat .right .describe").attr("style","");
	var  H = $(".groupFloat .conFloat .right").outerHeight(true);
	var H00 = $(".groupFloat .conFloat .right .icon_box").outerHeight(true);
	var H01 = $(".groupFloat .conFloat .right h2").outerHeight(true);
	var H02 = $(".groupFloat .conFloat .right .audioPlay").outerHeight(true);
	var H03 = $(".groupFloat .conFloat .right .details").outerHeight(true);
	var H04 = $(".groupFloat .conFloat .right .describe").outerHeight(true);
	////console.log(H04 +"==="+ H+"-"+H00+"-"+H01+"-"+H02+"-"+H03);
	
	if(ispc){
		if(H04 > (H-H01-H02-H03-50)){
			$(".groupFloat .conFloat .right .describe").height(H-H01-H02-H03-50);
			$(".groupFloat .conFloat .right .describe").css("overflow-y","scroll");
		}else{
			$(".groupFloat .conFloat .right .describe").css("overflow-y","inherit");
		}
	}else{
		if(H04 > (H-H00-H01-H02-H03-50)){
			$(".groupFloat .conFloat .right .describe").height(H-H00-H01-H02-H03-50);
			$(".groupFloat .conFloat .right .describe").css("overflow-y","scroll");
		}else{
			$(".groupFloat .conFloat .right .describe").css("overflow-y","inherit");
		}
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
	////console.log(urlServer+pathImg+".xml");
	$.ajax({
		url: urlServer+pathImg+".xml",
		dataType: 'xml',
		type: 'GET',
		timeout: 30000,
		error: function(xml){
		////console.log("dzc_output_images=="+xml)
			//alert("slow network please try again later!");
			alert("网络速度慢，请稍后再试！");
		},
		success: function(xml){
			////console.log(xml);
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
			////console.log(duomo);
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



function GetQueryString(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}

function updateURLParameter(param, paramVal){
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
	window.history.replaceState(null, null, baseURL + "?" + newAdditionalURL + rows_txt)
	
	if(language == "EN"){//英文
		WeixinShareFun("The Song Painted","Meet the Song Dynasty humans in these millennium-old paintings")
	}else if(language == "CN"){//中文
		WeixinShareFun("千年调","相约宋朝画中人，共谱一曲“千年调”")
	}
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
	fail: function(e){
		console.error('Get jssdk api fail!!!')
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

