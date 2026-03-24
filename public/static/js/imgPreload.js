

(function () {
	var ImageLoader = window["ImageLoader"] = function () {
		this.images = [];
		this.counter = {
			success: 0,
			failed: 0
		};
	};
	ImageLoader.prototype = {
		add: function (url) {
		for (var i in url)
			this.images.push(url[i]);
			return this;
		},
		notify: function (key) {
			this.counter[key]++;
			var counter = this.counter;
			var size = this.images.length;
			var loaded = counter.success + counter.failed;
			var percent = Math.min(((loaded / size) * 100).toFixed(0), 100);
			//$(".load .progress .frame .time").css("width",percent+ "%");
			$(".load .progress span").html(percent + "%");
			ImageLoader.complete = (loaded >= size);
			if (ImageLoader.complete) {// && isloading&& isloading&&isCoverClick
				ImageLoaderComplete();
			}
		},
		load: function () {
			var imgs = this.images;
			var size = imgs.length;
			ImageLoader.startTime = (new Date().getTime());
			for (var i = 0; i < size; i++) {
				ImageLoader.loader(this, imgs[i]);
			}
		}
	};

	ImageLoader.start = 0;
	ImageLoader.complete = false;
	ImageLoader.loader = function (imageLoader, url) {
		var img = new Image();
		img.onload = function () {
		imageLoader.notify("success");
		img = null;
	};

		img.onerror = function () {
		imageLoader.notify("failed");
		img = null;
		}
		img.src = url;
	};
	ImageLoader.timeout = function () {
		var end = (new Date().getTime());
		var diff = end - ImageLoader.start;
		return (diff >= 5000);
	};
})();

/*********** 图片预加载 ************************/

/*

<!--2D动画垂类选择-->
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/loading.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shijing.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/children.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/yiren.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shinv.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shenxian.js',
<!--儿童2D动画-->
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/meihua.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/huaban.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/dryxt.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/htyxt.js',
<!--市井2D动画-->
<!--艺人2D动画-->
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/huanying.js',
<!--仕女2D动画-->
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shinv2D/mudan.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shinv2D/geletu.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shinv2D/shalian.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shinv2D/shanshuo.js',
<!--文人2D动画-->
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/fuqin.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/smoke.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/tanqin.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/tree.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/write.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/yaji_l.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/wenren2D/yaji_r.js',

*/
var loader = new ImageLoader();
loader.add([

	

// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSstart/jquery.mousewheel.js',

// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/geletu.js',
// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shanshuo.js',
// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/moon.js',
// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/smoke.js',
// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/tree.js',
// 'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim2D/shenxian.js',

//'https://news.cgtn.com/event/2022/The-Song-Painted/Build/SH_Phone_PC.mp4',
'https://news.cgtn.com/event/2022/The-Song-Painted/Build/SHPC_PAC_FN.framework.js.unityweb',
'https://news.cgtn.com/event/2022/The-Song-Painted/Build/SHPC_PAC_FN.wasm.unityweb',
'https://news.cgtn.com/event/2022/The-Song-Painted/Build/SHPC_PAC_FN.data.unityweb',

'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim3D/Turntable.glb',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim3D/fan1.glb',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSanim3D/untitled.glb',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/font_family/AbhayaLibre-Bold.ttf',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/font_family/AbhayaLibre-ExtraBold.ttf',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/font_family/SourceHanSansCN-Regular.woff',

'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/ertong.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/shijing.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/yiren.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/shinv.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/wenren.js',
'https://news.cgtn.com/event/2022/The-Song-Painted/JSgroup/shenxian.js',

'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/perform.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool01.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool02.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool03.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool04.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool05.mp3',
'https://news.cgtn.com/event/2022/The-Song-Painted/mp3/Cool06.mp3',

'https://news.cgtn.com/event/2022/The-Song-Painted/images/huanying_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/huanying_atlas_2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/geletu_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/shanshuo_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/iconSong.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/shenxian_atlas_.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/videoListCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/imageListCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/Seeking01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/introduceFloat.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/introduceFloat02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/Seeking02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/mdBG.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/videoIcon.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/CoolLeft_btn.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/CoolRight_btn.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/start.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/Model3DLoading.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/volume_up.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party01_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party03_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party02_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party04_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party05_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_party06_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_sep.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/volume_up02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/portal/portal_sep02.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_textCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_textConCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_left.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_right.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_textEN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/groupWe/group07_textConEN.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_gif.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/partContent01_groupBg01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img01_hover06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_textimg0411.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img03_textimg0411.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img04_textimg0411.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img01_hover01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img03_hover02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img03_hover01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group01_img02_hover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/dryxt.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/meihua.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img03.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/partContent01_groupBg02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group02_img05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/htyxt.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group03_img05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/chuangta.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/ertong/group04_img01.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/block_bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg02.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg03_bottom.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg04Bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg04_top.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose07.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose08.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose09.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose10.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose11.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/choose12.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang01_2.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_langan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/xique.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/mijiu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/yanyao.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/cusuan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/dengqiu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/huadeng.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/toushi.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/bingqi.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/chaju.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/pushan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_huolang.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_shu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_cunzhuang.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_yun.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hongquan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijingbg03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang03_3.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang03_1.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shadow.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/huangquan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shadow_lan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shuimo.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/chayeCur.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/back_btn.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/double.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_txt01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang01_1.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_huolangtu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_fuying.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_cunzhuang.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_shinvquan.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang02_2.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang02_1.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_doujiangtu.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang03_2.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shijing/shijing_hujingfang03.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_conImg01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_themePageLeft.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_themePageRight.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_title.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg02Bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg01Bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_huaguxi.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_yanyaosuan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2_themeImg_shadow02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2Text/0.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/yirenContentBg01.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2_themeImgCover.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2_themeImg_shadow.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An00EN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An01EN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An02EN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An04EN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_themeImg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_themePageLeftCN.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play1_themePageRightCN.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_titleCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An04CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An03CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An02CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An01CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An00CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_conImg02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play3_conImg03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/huanying.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2_themeImg02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/yiren/Play2An03EN.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/shinvbg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/tuceng1.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/shinvBox2Bg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/fushi.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/nianjingtitleCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/zhuang01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/zhuang02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/zhuang03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/zhuang04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/wenshi.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/bianfu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/pc_zuigui.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/pc_huolang.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/juanzhou3.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/juanzhou2.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/shu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/icon02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/icon01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/yun1.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/shinvTxt00.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/yun2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/shinvdi2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/yunyun.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/Layer2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/jiantouicon2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/jiantouicon.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/juanzhou1.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/huajuan2.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/tuceng2.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/tuceng3.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/tree.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shinvImg/mudan.gif',

'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/a_07.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/b_07.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_04.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_05.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_06.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/kaihua/c_07.png',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/wenrenBg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/topBg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/topBg02.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/part4Bg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangTreeCur.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title03.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/treeBird.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/rockeryBg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/entourageBg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/characterOne.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/rigthStoneTable.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/part3_plus.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/part3_bottom.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/guan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/gaoshan.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangTreeCurCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/wu.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/yaji.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title01CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title02CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/liuLiTangCharacter_title03CN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/moon_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/smoke_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/tanqin_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/tree_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/yaji_l_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/yaji_r_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/write_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/images/wenren/fuqin_atlas_.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/part3Bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/leftTopTree.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/newground.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/huayaobai.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/fuqin.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/part3_bg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/tanqin.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/write.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/yaji_r.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/wenren/yaji_l.gif',

'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/tiangongBoxBg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/renjianBg.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/huohai_zhaodian.jpg',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/InfernalBoxBgCon.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/Earth.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/renjian_float.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/HELL.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang_hufaright.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang_hufaLeft.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang_xian02.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang_xian01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/foxiang01.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/xianjunLeft.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/xianjunRight.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/long.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/jinyun.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/fanjianRen.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/fanjianR.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/fanjian.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/lv.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/yanwangBg.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/yanwang.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/Judge.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/Judge.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/yejing.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/zatui.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/huolunRight.gif',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/huolun.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/yejingLR.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/heavenCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/tianjie.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/EarthCN.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/lvdongbin.png',
'https://news.cgtn.com/event/2022/The-Song-Painted/style/img/shenxian/HELLCN.png',




]);

/*loading*/

function ImageLoaderComplete(){
	console.log("页面整体文件加载完成");
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
		
		var loadVideoPlayId = document.getElementById("loadVideoPlay");
		loadVideoPlayId.play();
		loadVideoPlayId.addEventListener('ended', function () { //结束
			animationEnd()
		}, false);
		
		// setTimeout(function(){
		// 	$(".unity-desktop .jiantou").show();
		// },10000)  
	})
}

