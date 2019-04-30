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
      		$(this).css("color","white");
      		$(this).siblings("li").css("color","gray");
      	})
//    		调用我的页面
		var wode = document.getElementsByClassName("wode")[0];
	wode.addEventListener('tap',function(){
      		mui.openWindow({
			url: '../index.html', 
			id:'wode'
		})
      	})
//    	调用乐库页面
		var leku = document.getElementsByClassName("leku")[0];
	leku.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'leku.html', 
			id:'leku'
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

//左右滑动
	var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        //clickable 此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。类型：boolean默认：false
        renderBullet: function (index, className) {
        //renderBullet 渲染分页器小点。这个参数允许完全自定义分页器的指示点。接受指示点索引和指示点类名作为参数。
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
//  弹性窗口
	(function($){
  		$('.mui-scroll-wrapper').scroll({     			
  			bounce:true,
  			indicators:true,
  		});
     })(mui);
   
	}