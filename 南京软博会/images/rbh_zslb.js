//专业馆
$(function(){
	var k_list = $('.k_list li a');
	var tlt = $('.tlt');
	var tlt_img = $('.tlt img');
	var k_dl1_li = $('.k_dl1 li');
	for(var i=0;i<k_list.length;i++){
		k_list[i].index = i;
		k_list[i].onmouseover = function(){
			tlt[this.index].className = 'active tlt';
			var tlt_wth = tlt[this.index].offsetWidth;
			tlt_imgL = tlt_img[this.index].offsetLeft;
			for (var j=0;j<k_dl1_li.length;j++) {
				tlt_img[j].style.left = 7 +'px';
			}
		};
		k_list[i].onmouseleave = function(){
			tlt[this.index].className = 'tlt active1';
		}
	}
})
//农业馆
$(function(){
	var d_list_p = $('.tlt_list p');
	var tlt = $('.tlt_list .tlt');
	var tlt_img = $('.tlt_list .tlt img');
	for(var i=0;i<d_list_p.length;i++){
		d_list_p[i].index = i;
		d_list_p[i].onmouseover = function(){
			tlt[this.index].className = 'active tlt';
			var tlt_wth = tlt[this.index].offsetWidth;
			tlt_imgL = tlt_img[this.index].offsetLeft
			for (var j=0;j<tlt_img.length;j++) {
				tlt_img[j].style.left = 7 + j %38 * 29 +'px';
				if (tlt_img[j].offsetLeft>=(tlt_wth -15)/2) {
					tlt_img[j].style.left = (tlt_wth -15)/2 +'px';
				}
			}
			var num = this.index % 19;
			if (tlt_imgL >(tlt_wth -15)/2) {
				tlt[this.index].style.left = 29 * num + 7 - (tlt_wth -15)/2 +'px';
			}
			var left1 = tlt[num+19].offsetLeft + tlt[this.index].offsetWidth;
			if (this.index>56) {
				left1 = tlt[this.index].offsetLeft + tlt[this.index].offsetWidth;
			}
			if (left1 >551 ) {
				tlt[this.index].style.left = 551 - tlt[this.index].offsetWidth +'px';
				tlt_img[this.index].style.left = 7 + num * 29 - tlt[this.index].offsetLeft +'px';
			}
		};
		d_list_p[i].onmouseleave = function(){
			tlt[this.index].className = 'tlt';
		}
	}
})
$(function(){
	var ul_li = $('.ul_list li');
	var ul_tlt = $('.ul_list .tlt');
	ul_tlt.each(function(){
    	ul_tlt.css('left','-19px');
  	});
	ul_tlt.css('bottom','29px');
	ul_tlt.eq(0).css('left','0');
	ul_tlt.eq(1).css('bottom','58px').find('img').css('left','31px');
	ul_tlt.eq(2).css('bottom','58px');
	ul_tlt.eq(3).css('left','0');
	ul_tlt.eq(4).css('bottom','58px');
	ul_tlt.eq(5).css('bottom','58px');
	ul_tlt.eq(10).css('bottom','58px');
	ul_tlt.eq(15).css('bottom','58px');	
	ul_li.mouseover(function(){
		ul_li.eq($(this).index()).find(ul_tlt).css('display','block')
	});
	ul_li.mouseout(function(){
		ul_tlt.css('display','none');
	});
})
$(function(){
	var qm_p = $('.part1 .mc');
	var qm_li = $('.part1 li');
	var hm_li = $('#gsmc li');
	var tem;
	console.log(qm_p.length,hm_li.length);
	for(var i=0;i<qm_p.length;i++){
		tem = hm_li[i].innerHTML;
		qm_p[i].innerHTML = tem;
	}
})

//////互动馆
$(function(){
	var d_list_p = $('.tlt_list1 li p');
	var tlt = $('.tlt_list1 .tlt');
	var d_list_li = $('.tlt_list1 li');
	var tlt_img = $('.tlt_list1 .tlt img');
	for(var i=0;i<d_list_p.length;i++){
		d_list_p[i].index = i;
		d_list_p[i].onmouseover = function(){
			tlt[this.index].className = 'active tlt';
			var tlt_wth = tlt[this.index].offsetWidth;
			var tlt_L = d_list_li[this.index].offsetLeft + 15;
			for (var j=0;j<tlt_img.length;j++) {
				tlt_img[j].style.left = (tlt_wth -15)/2 +'px';
				tlt[j].style.left = - (tlt_wth/2 - 15) +'px';
				if (j>18) {
					tlt[j].style.bottom = 30 +'px';
				}
				if (tlt_L+tlt_wth/2>=450) {
					tlt_img[j].style.left = tlt_wth-450+tlt_L -15/2 +'px';
					tlt[j].style.left = -(tlt_wth-450+tlt_L-15) +'px';
				}
			}
		};
		d_list_p[i].onmouseleave = function(){
			tlt[this.index].className = 'tlt';
		}
	}
})