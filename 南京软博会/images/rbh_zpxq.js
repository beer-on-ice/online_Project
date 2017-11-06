$(function(){
	var P_hgt1 =$('.main_left').outerHeight(true);
	var P_hgt2 =$('.main_right').outerHeight(true);
	if (P_hgt1 > P_hgt2) {
		P_hgt2 = P_hgt1;
		$('.main_right').css({height:P_hgt1}) 
	} else{
		$('.main_left').css({height:P_hgt2}) 
	}
	
	var timer = $('#dl_list').offset().top-183;
	var dl_hgt = P_hgt2 - timer -24;
	$('.gwzz').css({height:dl_hgt}) 
	$('.gdt').css({height:dl_hgt}) 
	
		var oOut=document.getElementById('out'); 
	  	var oInner=document.getElementById('inner');       
	    var oDl=document.getElementById('dl_list');
	    var hgt_gz = $('.gwzz').outerHeight(true);
	    var hgt_dl = $('#dl_list').outerHeight(true);
	    var num = oInner.offsetTop;	
	    if (hgt_dl <=  hgt_gz) {
			$('.gdt').css({'display':'none'}) 
		}
	    var distY=0;
	    var distY1=0;
	    oInner.onmousedown=function(ev){  
		    var oEvent=ev||event;  
		    distY=oEvent.clientY-oInner.offsetTop;   //获取边界到鼠标的距离   
		    document.onmousemove=function(ev){  
		        var oEvent=ev||event;  
		        var y=oEvent.clientY-distY;
		        if(y<0){  
		            y=0;  
		        }  
		        if(y>(oOut.clientHeight-oInner.clientHeight))  
		        {  
		            y=oOut.clientHeight-oInner.clientHeight;  
		        } 
		        distY1 = (oDl.clientHeight-dl_hgt) / (oOut.clientHeight-oInner.clientHeight) * y ;
		        oInner.style.top=y+'px';    //根据鼠标位置相对定位，得到left，top值  
		        oDl.style.top= -distY1+'px';
		        num = oInner.offsetTop;	
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
	   
	    var isIE=navigator.userAgent.match(/MSIE (\d)/i);
		isIE=isIE?isIE[1]:undefined;
		var isFF=/FireFox/i.test(navigator.userAgent);
		//获取元素
		//鼠标滚轮事件
		if(isIE<9) //传统浏览器使用MouseWheel事件
		 oDl.attachEvent("onmousewheel",function(){
		  //计算鼠标滚轮滚动的距离
		  //一格3行，每行40像素，所以除以120
		  var v=event.wheelDelta/120;
		  //阻止浏览器默认方法
		  return false;
		 });
		else if(!isFF) //除火狐外的现代浏览器也使用MouseWheel事件
		 oDl.addEventListener("mousewheel",function(e){
		  //计算鼠标滚轮滚动的距离
		  var v=e.wheelDelta/120;
		  e.preventDefault();
		  if(v==-1){
			num = num+10;
			if (num>=oOut.clientHeight-oInner.clientHeight) {
				num = oOut.clientHeight-oInner.clientHeight;
			}
			 oDl.style.top= -num*168/176+'px';
			oInner.style.top=num+'px'; 
		}
		  if(v==1){
			num = num-10;
			if (num<=0) {
				num = 0;
			}
			oDl.style.top= -num*168/176+'px';
			oInner.style.top=num+'px'; 
		}
		  
//		  console.log(v);
		 },false);
		else //奇葩的火狐使用DOMMouseScroll事件
		 oDl.addEventListener("DOMMouseScroll",function(e){
		  //计算鼠标滚轮滚动的距离
		  //一格是3行，但是要注意，这里和像素不同的是它是负值
		  var v=-e.detail/3;
		  //阻止浏览器默认方法
		  e.preventDefault();
		 },false);
 })

