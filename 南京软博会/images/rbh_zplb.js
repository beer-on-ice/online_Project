$(function(){
	var div_a = $('.cplb ul li a');
	var oTop = $('.cplb ul .top');
	var tlt_bg = $('.tlt_bg');
	var tlt_txt = $('.tlt_txt');
	var tem;
	var num = 0;
    var tlt_img = $('.cplb ul .tlt_img');
     $('.cplb ul li:nth-child(4n)').css('margin-right', '0px');
    for (var i=0;i<oTop.length;i++) {
		div_a[i].index = i;
		oTop[i].index = i;
		tlt_img[i].index = i;
		tlt_bg[i].index = i;
		tlt_txt[i].index = i;
		oTop[i].onmouseover = function(){
			tlt_bg[this.index].className = 'active2';
			tlt_txt[this.index].className = 'active2';
			div_a.eq(this.index).slideDown(300);
			var hgt1 = tlt_img[this.index].offsetHeight;
			var hgt2 = div_a[this.index].offsetHeight;	
			tlt_img[this.index].style.paddingBottom = (hgt2-hgt1)/2 + 'px';
		}
		oTop[i].onmouseleave = function(){
			tlt_txt[this.index].className = 'tlt_txt';
			tlt_bg[this.index].className = 'tlt_bg';
			div_a.eq(this.index).slideUp(300);
		}
	}
})


$(function(){
	var In_li = $('.ssfl1 ul li');
	var part1 = $('.part1');
	var In_div = $('.part1 div');
	var In_p = $('.part1 div p');
	var int1 = $('#int3');
	var ssfl1 = $('.ssfl1');
	var num;
	var btn = $('.btn');
	var btn_ok = $('#btn_ok');
	btn_ok.click(function(){
		ssfl1.eq(0).removeClass('active1');
	})
	var btn_no = $('#btn_no');
	btn_no.click(function(){
		ssfl1.eq(0).removeClass('active1');
		In_p.removeClass('active3');
	})
	part1.eq(0).addClass('active1');
//	In_li.eq(0).addClass('active');	
	int1.click(function(){
		ssfl1.eq(0).addClass('active1');
	})
	function stopPropagation(e) { 
		if (e.stopPropagation) {
			e.stopPropagation(); 
		}else{
			e.cancelBubble = true; 
		}
	} 	
	$(document).bind('click',function(){ 
		ssfl1.eq(0).removeClass('active1');
	}); 
		
	int1.bind('click',function(e){ 
		stopPropagation(e); 
	}); 
	ssfl1.bind('click',function(e){ 
		stopPropagation(e); 
	});
	
	In_li.click(function(){
		part1.eq($(this).index()).addClass('active1').siblings().removeClass('active1');
		In_p.removeClass('active3');
		if (In_li.eq($(this).index()).hasClass('active')) {
			In_li.eq($(this).index()).removeClass('active');
		}else{
			In_li.eq($(this).index()).addClass('active').siblings().removeClass('active');
		}
	})
	for (var i=0;i<In_p.length;i++) {
		In_p[i].index = i;
		In_p[i].onclick = function(){
			if (In_p[this.index].className != 'active3') {
				In_p[this.index].className = 'active3';
			} else{
				In_p[this.index].className = 'none';
			}
		}
	}
})
