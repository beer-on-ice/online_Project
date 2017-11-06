window.onload=function(){  
    	var oOut=document.getElementById('out'); 
        var oInner=document.getElementById('inner');       
        var oUl=document.getElementById('ul_list');
        var distX=0;
        var distX1=0;
        var oImg = oUl.getElementsByTagName('li');
        oUl.style.width = oImg.length * 300 + 'px'
        oInner.onmousedown=function(ev){  
            var oEvent=ev||event;  
            distX=oEvent.clientX-oInner.offsetLeft;   //获取边界到鼠标的距离   
            document.onmousemove=function(ev){  
                var oEvent=ev||event;  
                var x=oEvent.clientX-distX;
                if(x<0){  
                    x=0;  
                }  
                if(x>(oOut.clientWidth-oInner.offsetWidth))  
                {  
                    x=oOut.clientWidth-oInner.offsetWidth;  
                } 
               	distX1 = (oUl.clientWidth-1200) / (oOut.clientWidth-oInner.clientWidth) * x ;
                oInner.style.left=x+'px';    //根据鼠标位置相对定位，得到left，top值  
                oUl.style.left= -distX1+'px';
                stopPropagation(event);
	    		preventDefault(event)
            }  
            document.onmouseup=function(){  
                document.onmousemove=null;  
                document.onmouseup=null;  
            }
             function stopPropagation(event) {
			    var e = event || window.event;
			    if (e.stopPropagation)
			        e.stopPropagation();
			    e.cancelBubble = true;
			}
			function preventDefault(event) {
			    var e = event || window.event;
			    if (e.preventDefault){
			        e.preventDefault();
			    }
			    e.returnValue = false;
			}
        }  
                  
    } 
    
$(function(){
	var div_a = $('.cplb ul li a');
	var oTop = $('.cplb ul .top');
	var tlt_bg = $('.tlt_bg');
	var tlt_txt = $('.tlt_txt');
	var tem;
	var num = 0;
    var tlt_img = $('.cplb ul .tlt_img');
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
//		div_a[i].onmouseover = function(){
//			div_a[this.index].className = 'active1';
//		}
//		div_a[i].onmouseout = function(){
//			div_a[this.index].className = 'none';
//		}
	}
})
