window.onload = function(){
	var i = 1;
	var box =document.getElementsByClassName("change_button")[0];
	var boxson = box.children;
	var second_ul =document.getElementsByClassName("second_ul")[0];
	var frist_ul = document.getElementsByClassName("frist_ul")[0];
	var changeTubiao = document.getElementsByClassName("changeTubiao")[0];
changeTubiao.addEventListener('tap',function(){
		if(i==0){
		frist_ul.className = "changeShow";
		second_ul.className = "";
		i=1;
		return;
	}if(i==1){
		second_ul.className = "changeShow";
		frist_ul.className = "";
		i=0;
		return;
	}
	})
}