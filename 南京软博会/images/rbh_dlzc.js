$(function(){
	var oClose = $('#close');
	oClose.click(function(){
		window.close();
	})
	
	$("#password1").focusin(function(){
		$(this).siblings().focus();
		$(this).css({display:"none"});
	});
	$("#password").blur(function(){
		var word=document.getElementById("password").value;
		var length=word.length;
		var input_text=$(this).siblings("input");
		if(length==0){
			input_text.css({display:"block"});
		}else{
			input_text.css({display:"none"});
		}
	 });
	
	
	$("#password3").focusin(function(){
		$(this).siblings().focus();
		$(this).css({display:"none"});
	});
	$("#password2").blur(function(){
		var word=document.getElementById("password2").value;
		var length=word.length;
		var input_text=$(this).siblings("input");
		if(length==0){
			input_text.css({display:"block"});
		}else{
			input_text.css({display:"none"});
		}
	 });
	
//	记住账号效果
	 var o_Jzmi = $('.con_one form p');
	 var item = true;
	 o_Jzmi.click(function(){
	 	item = !item;
	 	if (!item) {
	 		$(this).css({"background-image":"url(images/rbh_dl06.png)"});
	 	} else{
	 		$(this).css({"background-image":"url(images/rbh_dl05.png)"});
	 	}
	 });
	 
})

