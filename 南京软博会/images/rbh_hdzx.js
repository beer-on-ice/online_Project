$(function(){
	var time = $('.time')
	var time_list = $('.time_list')
	time.click(function(){
		time_list.eq(0).addClass('active');
	})
	function stopPropagation(e) { 
		if (e.stopPropagation) {
			e.stopPropagation(); 
		}else{
			e.cancelBubble = true; 
		}
	} 	
	$(document).bind('click',function(){ 
		time_list.removeClass('active');
	}); 
		
	time.bind('click',function(e){ 
		stopPropagation(e); 
	}); 
	time_list.bind('click',function(e){ 
		stopPropagation(e); 
	});
	
//	In_li.click(function(){
//		In_li.eq($(this).index()).addClass('active').siblings().removeClass('active');
//		part1.eq($(this).index()).addClass('active1').siblings().removeClass('active1');
//		In_p.removeClass('active3');
//		if ($(this).index()!=0) {
//			ssfl.eq(0).css('padding-bottom','70px')
//			btn.addClass('active1');	
//		}
//	})
})

