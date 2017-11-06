$(function(){
    $('.tab-tu li:nth-child(4n)').css('margin-right', '0px');
    var img_li =  $('.tab-tu li');
    var num;
   	img_li.hover(function(){
   		$('.tab-tu  .tlt_img').removeClass('active1')
    	num= $(this).index();
    	$('.tab-tu  .tlt_img').eq(num).addClass('active1');	
    });
})
