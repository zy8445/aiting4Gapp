window.onload = function(){
//	弹性布局
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
//		调用有声页面
		var yousheng = document.getElementsByClassName("yousheng")[0];
		yousheng.addEventListener('tap',function(){
      		mui.openWindow({
			url: 'yousheng.html', 
			id:'yousheng'
		})
     })
		
//		选歌
mui.init();
			
			mui.plusReady(function () {
//				var view = plus.nativeObj.View.getViewById("title");
//				
//				var bitmap = new plus.nativeObj.Bitmap("back");
//				bitmap.loadBase64Data("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAb1BMVEUAAAAAev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8Aev8AAACubimgAAAAI3RSTlMAGfUTGfQTGPMSGPIYGhgaGBsXGxcbFxwXHBccFhwWHRYdHWufDPQAAAABYktHRACIBR1IAAAAB3RJTUUH4QETEBwooeTlkQAAAJVJREFUSMft1EkSgkAQRNFGUXFWHBDBibr/HTUwD5B/48Ig1y+io7u6MqUhf5hsNEY+j5hMgZ/FJ8Xc9ovos3T96utjbfqN/Nb0O/m96Uv5g+mP8ifTn+Ur01/ka9Nf5RvTt/I309/lH6Z/yr9Mn+Q71/MT8B34K/E58Enzv8R/K98HvnF8p3lr8F7izce7lbf3kJ/lDQp9HdBhgg3PAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTE5VDE2OjI4OjQwKzA4OjAwpTDFwQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0xOVQxNjoyODo0MCswODowMNRtfX0AAAAASUVORK5CYII=");
//				view.drawBitmap(bitmap, {}, {
//					top: "10px",
//					left: "10px",
//					width: "24px",
//					height: "24px"
//				});
//				
//				view.setTouchEventRect({top:"0px",left:"0px",width:"44px",height:"100%"});
			});
			
			mui('.mui-scroll-wrapper').scroll();
			mui('body').on('shown', '.mui-popover', function(e) {
				//console.log('shown', e.detail.id);//detail为当前popover元素
			});
			mui('body').on('hidden', '.mui-popover', function(e) {
				//console.log('hidden', e.detail.id);//detail为当前popover元素
			});
}
