window.onload = function(){
//弹性布局
      	(function($){
//    		console.log(11111111);
      		$('.mui-scroll-wrapper').scroll({     			
      			bounce:true,
      			indicators:true,
      		});
      	})(mui);
//点击进行颜色的切换
      		$(".qiehuan>li").on("tap",function(){
      		$(this).addClass("yanse").siblings("li").removeClass("yanse");
      	})
      	
//    		调用我的页面
		var wode = document.getElementsByClassName("wode")[0];
		wode.addEventListener('tap',function(){
	      		mui.openWindow({
				url: '../index.html', 
	//			id:'wode'
			})
	      })
//		调用有声页面
		var yousheng = document.getElementsByClassName("yousheng")[0];
		yousheng.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'yousheng.html', 
			id:'yousheng'
		})
      	})
//		调用k歌页面
		var kge = document.getElementsByClassName("kge")[0];
		kge.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'kge.html', 
			id:'kge'
		})
      	})
}