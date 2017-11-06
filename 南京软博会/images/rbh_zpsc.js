$(function(){
    $('.tab-tu li:nth-child(3n)').css('margin-right', '0px');
    $('.grzx_left').children('div').mouseenter(function () {
        var index=($('.grzx_left').children('div')).index($(this));
        if(index==0){
            $(this).find('span').addClass('tb1');
            $(this).siblings().find('span').removeClass();
        }else if (index==1) {
            $(this).find('span').addClass('tb2');
            $(this).siblings().find('span').removeClass();
        }
    });
    var img_li =  $('.tab-tu li');
    var num;
   	img_li.hover(function(){
   		$('.tab-tu  .tlt_img').removeClass('active1')
    	num= $(this).index();
    	$('.tab-tu  .tlt_img').eq(num).addClass('active1');	
    });
})
$(function(){
	var div_a = $('#con-one-1 ul li a');
	var oTop = $('#con-one-1 ul .top');
	var tlt_bg = $('.tlt_bg');
	var tlt_txt = $('.tlt_txt');
	var tem;
	var num = 0;
    var tlt_img = $('#con-one-1 ul .tlt_img');
     $('#con-one-1 ul li:nth-child(3n)').css('margin-right', '0px');
    for (var i=0;i<oTop.length;i++) {
		div_a[i].index = i;
		oTop[i].index = i;
		tlt_img[i].index = i;
		tlt_bg[i].index = i;
		tlt_txt[i].index = i;
		oTop[i].onmouseover = function(){
			tlt_bg[this.index].className = 'active2';
			tlt_txt[this.index].className = 'active2';
			div_a[this.index].className = 'active1';
			var hgt1 = tlt_img[this.index].offsetHeight;
			var hgt2 = div_a[this.index].offsetHeight;	
			tlt_img[this.index].style.paddingBottom = (hgt2-hgt1)/2 + 'px';
		}
		oTop[i].onmouseout = function(){
			tlt_txt[this.index].className = 'tlt_txt';
			tlt_bg[this.index].className = 'tlt_bg';
			div_a[this.index].className = 'none';
		}
	}
})
