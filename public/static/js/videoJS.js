$("html,body").css("overflow", "inherit")

var widthresize = window.innerWidth
var ispc
if (window.innerWidth <= 1024) {
    ispc = false
} else {
    ispc = true
}
function updateHref() {
    //window.location.href=window.location.href;
    //window.location.reload();
}
$(window).resize(function () {
    //小于1024时刷新页面
    if (window.innerWidth <= 1024) {
        updateHref()
        ispc = false
    }
    if (window.innerWidth > 1024) {
        updateHref()
        ispc = true
    }
})

var config = {
    title: "The Song Painted", //分享标题
    desc: "Meet the Song Dynasty humans in these millennium-old paintings", //分享描述
    url: window.location.href, //分享链接
    img: "https://news.cgtn.com/event/2022/The-Song-Painted/images/wx.jpg", // 分享图片
}
if (GetQueryString("lang") == "zh") {
    var language = "CN"
    WeixinShareFun("千年调", "相约宋朝画中人，共谱一曲“千年调”")
    $(".navigation .header .header_list .list_dom.picture a").attr(
        "href",
        "https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=zh"
    )
} else {
    var language = "EN"
    WeixinShareFun(
        "The Song Painted",
        "Meet the Song Dynasty humans in these millennium-old paintings"
    )
    $(".navigation .header .header_list .list_dom.picture a").attr(
        "href",
        "https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=en"
    )
}

var num = GetQueryString("num") - 1
let originalArrData //原始数组
var ImggeListpage = 0
var AllstartTrue = true
$(".navigation .header .header_list .list_dom.CN").click(function () {
    language = "CN"
    CNandEN()
})
$(".navigation .header .header_list .list_dom.EN").click(function () {
    language = "EN"
    CNandEN()
})

CNandEN()

var jsonUrl
function CNandEN() {
    show_listENandCN()
    if (language == "EN") {
        //英文
        updateURLParameter("lang", "en")
        $("head title").text("The Song Painted")
        $("body").css("font-family", "AbhayaLibreRegular")
        $(".navigation .header .header_list .list_dom.EN").addClass("cur")
        $(".navigation .header .header_list .list_dom.CN").removeClass("cur")
        $(".navigation .header").addClass("EN").removeClass("CN")
        $(".page_wrap").addClass("EN").removeClass("CN")
        $(".navigation .header .header_left a").html("HOME")
        $(".navigation .header .header_list .list_dom.video a i").html(
            "INSIGHT"
        )
        $(".navigation .header .header_list .list_dom.picture a i").html(
            "GALLERY"
        )
        $(".groupImage_ind02 h2").html("INSIGHT")
        $(".groupImage_ind02 p").html(
            "Listen to Chinese and international scholars, experts and artists analyze paintings from the Song Dynasty, offer historical and cultural contexts, and break down painting techniques, asthetics and subject matters popular at the time."
        )
        $(".groupImage_ind01 .show_box .show_list li").each(function (index) {
            $(this).find("img").attr("src", $(this).find("img").attr("data-EN"))
        })
        $(".navigation .header .header_list .list_dom.picture a").attr(
            "href",
            "https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=en"
        )
        originalArrData = videosEN
    } else if (language == "CN") {
        //中文
        updateURLParameter("lang", "zh")
        $("head title").text("千年调")
        $("body").css("font-family", "SourceHanSansCN")
        $(".navigation .header .header_list .list_dom.EN").removeClass("cur")
        $(".navigation .header .header_list .list_dom.CN").addClass("cur")
        $(".navigation .header").addClass("CN").removeClass("EN")
        $(".page_wrap").addClass("CN").removeClass("EN")
        $(".navigation .header .header_left a").html("首页")
        $(".navigation .header .header_list .list_dom.video a i").html("入画")
        $(".navigation .header .header_list .list_dom.picture a i").html("赏画")
        $(".groupImage_ind02 h2").html(
            '<img src="https://statics.cctv.cn/static_new/2022/CGTN/style/img/videoListCN.png">'
        )
        $(".groupImage_ind02 p").html(
            "跟随海内外学者、专家和艺术家一起走进宋画，聆听“大咖”们如何从历史背景、风俗文化、绘画技法和构图，以及中西方绘画的比较等角度，深度解读这些传世佳作。"
        )
        $(".groupImage_ind01 .show_box .show_list li").each(function (index) {
            $(this).find("img").attr("src", $(this).find("img").attr("data-CN"))
        })
        $(".navigation .header .header_list .list_dom.picture a").attr(
            "href",
            "https://news.cgtn.com/event/2022/The-Song-Painted/gallery/index.html?lang=zh"
        )
        originalArrData = videosCN
    }
    if (AllstartTrue) {
        Allstart()
        AllstartTrue = false
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
    //originalArrData = data;
    dataFun(originalArrData)
    //     }
    // })
    setTimeout(function () {
        if (num >= 0) {
            groupMp4Fun(num)
        }
    }, 1000)
}

function dataFun(data) {
    var ImggeListpage = 0
    var dataHTML = ""
    var dataHTMLpage = ""

    for (key in data) {
        if ((parseInt(key) + 1) % 18 == 1) {
            ImggeListpage++
            if (key == 0) {
                dataHTML += '<ul class="show_list cur">'
                dataHTMLpage += '<li class="cur">' + ImggeListpage + "</li>"
            } else {
                dataHTML += '<ul class="show_list">'
                dataHTMLpage += "<li>" + ImggeListpage + "</li>"
            }
        }
        dataHTML +=
            `<li data-id="` +
            key +
            `">
                <div class="img_box"><img src="https://statics.cctv.cn/static_new/2022/CGTN/dzc_output_painting/` +
            data[key].video_img +
            `" alt="` +
            data[key].title +
            `" title="` +
            data[key].title +
            `"><span class="videoIcon" ></span></div>
                <div class="title" title="` +
            data[key].title +
            `">` +
            data[key].title +
            `</div>
                <div class="solid"></div>
                <div class="con">
                    <p class="author" title="` +
            data[key].author +
            `">` +
            data[key].author +
            `</p>
                    <p title="` +
            data[key].author_role +
            `">` +
            data[key].author_role +
            `</p>
                </div>
            </li>`
        if ((parseInt(key) + 1) % 18 == 0 && parseInt(key) + 1 != 0) {
            dataHTML += "</ul>"
        }
    }
    dataHTML += "</ul>"
    $("#show_box").html(dataHTML)
    if (ImggeListpage <= 1) {
        $(".groupImage_ind04").hide()
    } else {
        $(".groupImage_ind04").show()
        $("#page_list").html(dataHTMLpage)
    }

    $(".groupImage_ind05 .show_box .show_list li").click(function () {
        groupMp4Fun($(this).attr("data-id"))
    })
}

$(".groupImage_ind01 .show_box .show_list li").click(function () {
    // if(language == "EN"){//英文
    // 	$(".groupFloat").addClass("EN").removeClass("CN");
    // }else if(language == "CN"){//中文
    // 	$(".groupFloat").addClass("CN").removeClass("EN");
    // }
    // $(".groupFloat .conFloat .arrowhead").removeClass("cur");
    // $(".groupFloat .conFloat .arrowhead").css({bottom:"3rem"})
    // $(".groupFloat .conFloat .right").removeClass("cur");
    // $(".groupFloat .conFloat .right").css({height:"3rem"});
    updateURLParameter("num", parseInt($(this).attr("data-id")) + 1)
    groupMp4Fun($(this).attr("data-id"))
})

function Allstart() {
    if (!ispc) {
        new Swiper("#sports", {
            loop: true, // 循环模式选项
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
            },
            on: {
                // init: function(){
                // 	$(".groupImage_ind01 .show_box .show_list li ").click(function(){
                // 		groupMp4Fun($(this).attr("data-id"));
                // 	})
                // }
            },
        })
    } else {
        // pc轮播

        //$(".groupImage_ind01 .show_box .show_list li").eq(0).show();
        slidesFun(0)
        $(".left_btn").on("click", function () {
            len--
            slidesFun(len)
        })
        $(".right_btn").on("click", function () {
            len++
            slidesFun(len)
        })
        $(".radius_btn i").on("click", function () {
            slidesFun($(this).index())
        })
        lunbo_auto()
        $(".show_box").mouseover(function () {
            clearInterval(automatic)
        })
        $(".show_box").mouseout(function () {
            lunbo_auto()
        })

        // $(".groupImage_ind01 .show_box .show_list li").click(function(){
        // 	groupMp4Fun($(this).attr("data-id"));
        // })
    }
}

var automatic,
    len = 0,
    leng = $(".groupImage_ind01 .show_box .show_list li").length,
    lenCur = leng
function lunbo_auto() {
    automatic = setInterval(function () {
        len++
        slidesFun(len)
    }, 5000)
}
function slidesFun(data) {
    len = data
    if (data > leng - 1) {
        len = 0
    }
    if (data < 0) {
        len = leng - 1
    }
    $(".groupImage_ind01 .show_box .show_list li")
        .eq(len)
        .stop(true, true)
        .fadeIn(800)
    $(".groupImage_ind01 .show_box .show_list li")
        .eq(lenCur)
        .stop(true, true)
        .fadeOut(800)
    $(".radius_btn i").eq(len).addClass("cur").siblings().removeClass("cur")
    lenCur = len
}

function show_listENandCN() {
    $(".groupImage_ind01 .show_box .show_list li").each(function (index) {
        if (language == "EN") {
            if (judgeisMobile()) {
                $(".groupImage_ind01 .show_box .show_list li")
                    .eq(index)
                    .find("img")
                    .attr(
                        "src",
                        $(".groupImage_ind01 .show_box .show_list li")
                            .eq(index)
                            .find("img")
                            .attr("data-h5-en")
                    )
            } else {
                $(".groupImage_ind01 .show_box .show_list li")
                    .eq(index)
                    .find("img")
                    .attr(
                        "src",
                        $(".groupImage_ind01 .show_box .show_list li")
                            .eq(index)
                            .find("img")
                            .attr("data-pc-en")
                    )
            }
        } else if (language == "CN") {
            if (judgeisMobile()) {
                $(".groupImage_ind01 .show_box .show_list li")
                    .eq(index)
                    .find("img")
                    .attr(
                        "src",
                        $(".groupImage_ind01 .show_box .show_list li")
                            .eq(index)
                            .find("img")
                            .attr("data-h5-cn")
                    )
            } else {
                $(".groupImage_ind01 .show_box .show_list li")
                    .eq(index)
                    .find("img")
                    .attr(
                        "src",
                        $(".groupImage_ind01 .show_box .show_list li")
                            .eq(index)
                            .find("img")
                            .attr("data-pc-cn")
                    )
            }
        }
    })
}

$(".navigation .header .header_left a").click(function () {
    if (judgeisMobile()) {
        window.open(
            "https://news.cgtn.com/event/2022/The-Song-Painted-H5/index.html",
            "_self"
        )
    } else {
        window.open(
            "https://news.cgtn.com/event/2022/The-Song-Painted/index.html",
            "_blank"
        )
    }
})

/*视频浮层*/
// $(".groupMp4 .conFloat .left .video .video-js").css("height","100vh");
// $(".groupVideo .video_flash").click(function(){
//     $(".groupMp4").show();
//     $("#my-video source").attr("src","https://statics.cctv.cn/static_new/2022/CGTN/mp4/ruhua/ruhua.m3u8");
//     $(".groupMp4 .conFloat .left .video .video-js").css("height","100vh");
//     $('video').trigger('play');
// })
// function videoPlay(obj){
//     $(".groupMp4").show();
//     $("#my-video source").attr("src","https://statics.cctv.cn/static_new/2022/CGTN/mp4/ruhua/ruhua.m3u8");
//     $(".groupMp4 .conFloat .left .video .video-js").css("height","100vh");
//     $('video').trigger('play');
// }
/*视频浮层*/

// setTimeout(function(){
// 	videoId = $(".groupMp4 .conFloat .left .video .video-js").find('video')[0];
// 	myVideo = videojs(videoId, {
// 		"autoplay": true,
// 		"loop": false,
// 		"preload": true,
// 		"width": $(".groupMp4 .conFloat .left").width(),
// 		"height":$(".groupMp4 .conFloat .left").height(),
// 		"posterImage": false,
// 		"textTrackDisplay": false,
// 		"loadingSpinner": false,
// 		"bigPlayButton": true,
// 		"controls": true,
// 		"controlBar": true,
// 		"errorDisplay": false,
// 		"textTrackSettings": true
// 	})
// },500)
var videoPlayer, myVideo
function getVideo(url, preview) {
    videoPlayer = $("#myVideo").get(0)
    if (typeof videoPlayer != "undefined") {
        var myVideo = videojs("myVideo")
        myVideo.dispose()
    }
    let html = `<video id="myVideo" fill style=" width: 300px;height: 300px;" class="video-js warn-video vjs-default-skin vjs-big-play-centered" controls preload="auto" data-setup='{}'></video>`
    let node = document.createRange().createContextualFragment(html)
    document.querySelector("#videoPlay").appendChild(node)
    myVideo = videojs("myVideo", {
        autoplay: true,
        loop: false,
        preload: true,
        width: $(".groupMp4 .conFloat .left").width(),
        height: $(".groupMp4 .conFloat .left").height(),
        posterImage: true,
        poster:
            "https://statics.cctv.cn/static_new/2022/CGTN/dzc_output_painting/" +
            preview,
        textTrackDisplay: false,
        loadingSpinner: false,
        bigPlayButton: true,
        controls: true,
        controlBar: true,
        errorDisplay: false,
        textTrackSettings: true,
        sources: [
            {
                src: url, //视频地址
                type: "application/x-mpegURL",
            },
        ],
    })
    myVideo.play()
}

function groupMp4Fun(id) {
    updateURLParameter("num", parseInt(id) + 1)
    if (ispc) {
        //$(".groupFloat .conFloat .right .icon").removeClass("cur");
        $(".groupMp4 .conFloat .right .collect")
            .addClass("icon-right")
            .removeClass("icon-left")
        $(".groupMp4 .conFloat .left").animate({ width: 67.66 + "%" }, 20)
        $(".groupMp4 .conFloat .right").animate({ right: "0%" }, 0)
    } else {
        $(".groupMp4 .conFloat .right .titleSmall").show()
        $(".groupMp4 .conFloat .arrowhead").removeClass("cur")
        $(".groupMp4 .conFloat .right h2").css("height", "1.2rem")
        $(".groupMp4 .conFloat .arrowhead").css({ bottom: "3rem" })
        $(".groupMp4 .conFloat .right").removeClass("cur")
        $(".groupMp4 .conFloat .right").css({ height: "3rem" })
    }

    // if(language == "EN"){//英文
    // 	var data = videosEN;
    // }else if(language == "CN"){//中文
    // 	var data = videosCN;
    // }
    $(".groupMp4 .conFloat .right .titleSmall").text(originalArrData[id].title)
    $(".groupMp4 .right .txt h2").text(originalArrData[id].title)
    $(".groupMp4 .conFloat .right .txt .details p").html(
        originalArrData[id].author
    )
    $(".groupMp4 .conFloat .right .txt .describe p").html(
        originalArrData[id].author_desc[0] +
            "<br/><br/>" +
            originalArrData[id].video_desc[0]
    )
    $(".groupMp4").show()
    getVideo(originalArrData[id].video_url, originalArrData[id].video_img)
    groupMp4RightCon()
}
if (!ispc) {
    $(".groupMp4 .conFloat .left .video .video-js").css("height", "85vh")
} else {
    $(".groupMp4 .conFloat .left .video .video-js").css("height", "100vh")
}

$(".groupMp4 .conFloat .right .collect").click(function () {
    if ($(".groupMp4 .conFloat .right").css("right") == "0px") {
        $(".groupMp4 .conFloat .right .collect")
            .addClass("icon-left")
            .removeClass("icon-right")
        $(".groupMp4 .conFloat .left").animate({ width: 100 + "%" }, 20)
        $(".groupMp4 .conFloat .right").animate({ right: -32.23 + "%" }, 20)
    } else {
        $(".groupMp4 .conFloat .right .collect")
            .addClass("icon-right")
            .removeClass("icon-left")
        $(".groupMp4 .conFloat .left").animate({ width: 67.66 + "%" }, 20)
        $(".groupMp4 .conFloat .right").animate({ right: 0 }, 20)
    }
})

$(".groupMp4 .conFloat .arrowhead").click(function () {
    if ($(this).hasClass("cur")) {
        $(this).removeClass("cur")
        $(this).animate({ bottom: "3rem" }, 500)
        $(".groupMp4 .conFloat .right h2").css("height", "1.2rem")
        $(".groupMp4 .conFloat .right").removeClass("cur")
        $(".groupMp4 .conFloat .right").animate(
            { height: "3rem" },
            500,
            function () {
                $(".groupMp4 .conFloat .right .titleSmall").show()
            }
        )
    } else {
        $(this).addClass("cur")
        $(this).animate({ bottom: "90.8vh" }, 500)
        $(".groupMp4 .conFloat .right .titleSmall").hide()
        $(".groupMp4 .conFloat .right h2").css("height", "auto")
        $(".groupMp4 .conFloat .right").addClass("cur")
        $(".groupMp4 .conFloat .right").animate(
            { height: "90vh" },
            500,
            function () {
                groupMp4RightCon()
            }
        )
    }
    //$(".groupMp4 .right").toggle();
})

$(".groupMp4 .control .audioClose,.groupMp4 .conFloat .right .close").click(
    function () {
        updateURLParameter("num", "")
        //myVideo.pause();
        videoPlayer = $("#myVideo").get(0)
        if (typeof videoPlayer != "undefined") {
            var myVideo = videojs("myVideo")
            myVideo.dispose()
        }
        $(".groupMp4").hide()
    }
)

function groupMp4RightCon() {
    $(".groupMp4 .conFloat .right .describe").attr("style", "")
    var H = $(".groupMp4 .conFloat .right").outerHeight(true)
    var H01 = $(".groupMp4 .conFloat .right h2").outerHeight(true)
    var H02 = $(".groupMp4 .conFloat .right .icon").outerHeight(true)
    var H03 = $(".groupMp4 .conFloat .right .details").outerHeight(true)
    var H04 = $(".groupMp4 .conFloat .right .describe").outerHeight(true)
    if (H04 > H - H01 - H02 - H03 - 50) {
        $(".groupMp4 .conFloat .right .describe").height(
            H - H01 - H02 - H03 - 50
        )
        $(".groupMp4 .conFloat .right .describe").css("overflow-y", "scroll")
    } else {
        $(".groupMp4 .conFloat .right .describe").css("overflow-y", "inherit")
    }
}

// const sources = [
// 	// {
// 	//   src: 'mp4/ruhua/ruhua.m3u8',
// 	//   type: 'application/x-mpegURL'
// 	// },
// 	// 第三个真实可用
// 	{
// 	  src: 'https://live.unified-streaming.com/scte35/scte35.isml/.m3u8',
// 	  type: 'application/x-mpegURL'
// 	}
//   ]
// let index = 0 // 当前加载的视频源序号
// var player = videojs('my-video1', {
// 	width: 500,
// 	controls: true,
// 	preload: 'auto',
// 	autoplay: 'muted', // 实现视频自动播放的关键
// 	sources: sources[index]
// })

// videojs.hook('beforeerror', (player, err) => {
// 	////console.log('hook - beforeerror', index, player.src(), err)
// 	// Video.js 在切换/指定 source 后立即会触发一个 err=null 的错误，这里过滤一下
// 	if (err !== null) {
// 		player.src(sources[++index])
// 	}
// 	// 清除错误，避免 error 事件在控制台抛出错误
// 	return null
// })
// player.ready(() => {
// 	// 丢失 source 事件处理
// 	player.tech().on('retryplaylist', function () {
// 		////console.log('event - retryplaylist')
// 		player.src(sources[++index])
// 	})
// })

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

function updateURLParameter(param, paramVal) {
    var newAdditionalURL = ""
    var tempArray = window.location.href.split("?")
    //var tempArray = url.href.split("?");
    var baseURL = tempArray[0]
    var additionalURL = tempArray[1]
    var temp = ""
    if (additionalURL) {
        tempArray = additionalURL.split("&")
        for (i = 0; i < tempArray.length; i++) {
            if (tempArray[i].split("=")[0] != param) {
                newAdditionalURL += temp + tempArray[i]
                temp = "&"
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal
    //return baseURL + "?" + newAdditionalURL + rows_txt;
    window.history.replaceState(
        null,
        null,
        baseURL + "?" + newAdditionalURL + rows_txt
    )

    if (language == "EN") {
        //英文
        WeixinShareFun(
            "The Song Painted",
            "Meet the Song Dynasty humans in these millennium-old paintings"
        )
    } else if (language == "CN") {
        //中文
        WeixinShareFun("千年调", "相约宋朝画中人，共谱一曲“千年调”")
    }
}

/*分享*/
function WeixinShareFun(title, desc) {
    config = {
        title: title, //分享标题
        desc: desc, //分享描述
        url: window.location.href, //分享链接
        img: "https://news.cgtn.com/event/2022/The-Song-Painted/images/wx.jpg", // 分享图片
    }
    wx.ready(function () {
        //自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
        wx.updateTimelineShareData({
            title: config.title, // 分享标题
            link: config.url,
            imgUrl: config.img, // 分享图标
            success: function () {
                //console.log("设置成功，分享到朋友圈");
            },
        })
        //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
        wx.updateAppMessageShareData({
            title: config.title, // 分享标题
            desc: config.desc, // 分享描述
            link: config.url,
            imgUrl: config.img, // 分享图标
            success: function () {
                //console.log("设置成功，分享给朋友");
            },
        })
    })
}

$.ajax({
    type: "GET",
    url:
        "https://wechat.cgtn.com/socialweb/social/weixin/getKeys.do?url=" +
        encodeURIComponent(location.href.split("#")[0]),
    contentType: "application/json",
    dataType: "json",
    success: function (data) {
        wx.config({
            debug: false,
            appId: "wxd61ff47456d31b8e", // 必填，公众号的唯一标识
            timestamp: data.data.timestamp, // 必填，生成签名的时间戳
            nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
            signature: data.data.signature, // 必填，签名，见附录1
            jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"], // 功能列表，我们要使用JS-SDK的什么功能
        })
    },
    fail: function (e) {
        console.error("Get jssdk api fail!!!")
    },
})

//config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在 页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready 函数中。
wx.ready(function () {
    //自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容（1.4.0）
    wx.updateTimelineShareData({
        title: config.title, // 分享标题
        link: config.url,
        imgUrl: config.img, // 分享图标
        success: function () {
            //console.log("设置成功，分享到朋友圈");
        },
    })
    //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
    wx.updateAppMessageShareData({
        title: config.title, // 分享标题
        desc: config.desc, // 分享描述
        link: config.url,
        imgUrl: config.img, // 分享图标
        success: function () {
            //console.log("设置成功，分享给朋友");
        },
    })
})
wx.error(function (res) {
    //ajaxErro(res);
    //console.log("微信授权失败，重新刷新页面");
})
