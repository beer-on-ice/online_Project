//专业馆
$(function(){
	var k_ul = $('.k_list ul');
	var k_li = $('.k_list ul li');
	var d_list = $('.d_list1');
	for(var i=0;i<k_li.length;i++){
		k_li[i].index = i;
		d_list[i].index = i;
		k_li[i].onmouseover = function(){
			d_list[this.index].style.display = 'block';	
		};
		k_li[i].onmouseout = function(){
			d_list[this.index].style.display = 'none';	
		}
	}	
})

//农业馆
$(function(){
	var d_list_p = $('.tlt_list p');
	var d_list1_p = $('.tlt_list1 p');
	var tlt = $('.tlt');
	var tlt_img = $('.tlt img');
	var tlt_wth;
	for(var i=0;i<d_list_p.length;i++){
		d_list_p[i].index = i;
		d_list_p[i].onmouseover = function(){
			tlt[this.index].className = 'active tlt';
			tlt_wth = tlt[this.index].offsetWidth;
			for (var j=0;j<tlt_img.length;j++) {
				tlt_img[j].style.left = 7 + j %38 * 29 +'px';
				if (tlt_img[j].offsetLeft>=(tlt_wth -15)/2) {
					tlt_img[j].style.left = (tlt_wth -15)/2 +'px';
				}	
			}
			var num = this.index % 19;
			if (tlt_img[this.index].offsetLeft >(tlt_wth -15)/2) {
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
		d_list_p[i].onmouseout = function(){
			d_list_p[this.index].style.backgroundColor = "#7cc175";
			tlt[this.index].className = 'tlt';
		}
	}
})

$(function(){
	var qm_p = $('.zslb_list .mc');
	var qm_li = $('.zslb_list li');
	var hm_li = $('#gsmc li');
	var qm_li = $('.zslb_list li');
	var tem;
	for(var i=0;i<qm_p.length;i++){
		tem = hm_li[i].innerHTML;
		if (qm_li.outerHeight(true)>=80) {
			qm_p.css({'padding-bottom':'5px'})
		}
		qm_p[i].innerHTML = tem;
	}
	
})

