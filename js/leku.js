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
//		视频跳转
		var shipinz = document.getElementsByClassName("shipinz")[0];
		shipinz.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'shipin.html', 
//			id:'leku'
		})
      	})
//		删除按钮
		mui.init();
			(function($) {
				
				//第一个demo，拖拽后显示操作图标，点击操作图标删除元素；
				$('#OA_task_1').on('tap', '.mui-btn', function(event) {
					var elem = this;
					var aaa = document.getElementsByClassName("aaa")[0];
					var bbb = document.getElementsByClassName("bbb")[0];
					var li = elem.parentNode.parentNode;
					mui.confirm('确认删除该条记录？', 'Hello MUI', btnArray, function(e) {
						if (e.index <li.length) {
//							li.parentNode.removeChild(li);
							aaa.parentNode.removeChild(bbb);
							
						} else {
							setTimeout(function() {
								$.swipeoutClose(li);
							}, 0);
						}
					});
				});
				var btnArray = ['确认', '取消'];
		})(mui);
		
	}