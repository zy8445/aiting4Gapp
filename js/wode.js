window.onload = function(){
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
//    	调用乐库页面
		var leku = document.getElementsByClassName("leku")[0];
		leku.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'html/leku.html', 
			id:'leku'
		})
      	})
//		调用有声页面
		var yousheng = document.getElementsByClassName("yousheng")[0];
		yousheng.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'html/yousheng.html', 
			id:'yousheng'
		})
      	})
//		调用k歌页面
		var kge = document.getElementsByClassName("kge")[0];
		kge.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'html/kge.html', 
//			id:'kge'
		})
     })

	}