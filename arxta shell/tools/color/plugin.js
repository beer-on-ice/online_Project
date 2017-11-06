$(function(){
	$('#picker01').colpick({flat:true}); //颜色选取器总是可见的
	$('#picker02').colpick({flat:true,colorScheme:'dark'}); // 颜色选择器的界面风格。可选：light和dark。默认为light

	$('#picker1').colpick();

	$('#picker2').colpick({
		flat:true,
		layout:'hex', // rgbhex(没有HSB)，hex(没有HSB和RGB)，默认为full。
		submit:0 // 提交按钮上显示的文本。默认为“ok”
	});

	$('#picker3').colpick({
		layout:'hex',
		colorScheme:'dark',
		submit:0,
		onChange:function(hsb,hex,rgb,el,bySetColor) {
			$(el).css('border-color','#'+hex);
			// Fill the text box just if the color was set using the picker, and not the colpickSetColor function.
			if(!bySetColor) $(el).val(hex);
		}
	}).keyup(function(){
		$(this).colpickSetColor(this.value);
	});


	$('.ex-color-box').colpick({
		colorScheme:'dark',
		layout:'rgbhex',
		color:'ff8800',
		livePreview:0,
		onSubmit:function(hsb,hex,rgb,el) {
			$(el).css('background-color', '#'+hex);
			$(el).colpickHide();
		}
	})
	.css('background-color', '#ff8800');
});
