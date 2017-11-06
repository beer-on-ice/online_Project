$(function(){
	var oOut=document.getElementById('out'); 
  	var oInner=document.getElementById('inner');       
    var oDl=document.getElementById('dl_list');
    var hgt_dl = $('#dl_list').outerHeight(true);
    var hgt_dl1 = $('#dl_list1').outerHeight(true);
 	var hgt_dl2 = $('#dl_list2').outerHeight(true);
 	var hgt_gz = $('.cont').outerHeight(true);
    var num2;	
    function oIdown(obj,obj1,obj2){
    	var distY=0;
    	var distY1=0;
    	obj2.onmousedown=function(ev){  
		    var oEvent=ev||event;  
		    distY=oEvent.clientY-obj2.offsetTop;   //获取边界到鼠标的距离   
		    document.onmousemove=function(ev){  
		        var oEvent=ev||event;  
		        var y=oEvent.clientY-distY;
		        if(y<0){  
		            y=0;  
		        }  
		        if(y>(obj1.clientHeight-obj2.clientHeight)){  
		            y=obj1.clientHeight-obj2.clientHeight;  
		        } 
		        distY1 = (obj.clientHeight-hgt_gz) / (obj1.clientHeight-obj2.clientHeight) * y ;
		        obj2.style.top=y+'px';    //根据鼠标位置相对定位，得到left，top值  
		        obj.style.top= -distY1+'px';
		        num2 = obj2.offsetTop;	
		        stopPropagation(event);
		    	preventDefault(event);
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
     if (hgt_dl <=  hgt_gz) {
		$('.gdt').eq(0).css({'display':'none'}) 
	}else{
		gundong(oDl,oOut,oInner,hgt_dl);
    	oIdown(oDl,oOut,oInner);
	}
    if (hgt_dl1 <=  hgt_gz) {
		$('.gdt').eq(1).css({'display':'none'}) 
	}else{
		var oOut1=document.getElementById('out1'); 
	  	var oInner1=document.getElementById('inner1');       
	    var oDl1=document.getElementById('dl_list1');
	    gundong(oDl1,oOut1,oInner1,hgt_dl1);
	    oIdown(oDl1,oOut1,oInner1);
	}
    if (hgt_dl2 <=  hgt_gz) {
		$('.gdt').eq(2).css({'display':'none'}) 
	}else{
		var oOut2=document.getElementById('out2'); 
	  	var oInner2=document.getElementById('inner2');       
	    var oDl2=document.getElementById('dl_list2');
	    gundong(oDl2,oOut2,oInner2,hgt_dl2);
	    oIdown(oDl2,oOut2,oInner2);
	}
    function gundong(obj,obj1,obj2,obj3){
		var isIE=navigator.userAgent.match(/MSIE (\d)/i);
		isIE=isIE?isIE[1]:undefined;
		var isFF=/FireFox/i.test(navigator.userAgent);
		//获取元素
		//鼠标滚轮事件
		if(isIE<9) //传统浏览器使用MouseWheel事件
		 	obj.attachEvent("onmousewheel",function(){
	 		//计算鼠标滚轮滚动的距离
		  		//一格3行，每行40像素，所以除以120
		  		var v=event.wheelDelta/120;
		  		//阻止浏览器默认方法
			  		return false;
		 	});
		else if(!isFF) //除火狐外的现代浏览器也使用MouseWheel事件
			obj.addEventListener("mousewheel",function(e){
	 		//计算鼠标滚轮滚动的距离
	 			var num2 = obj2.offsetTop;
				var v=e.wheelDelta/120;
				e.preventDefault(); 
				if(v==-1){
					num2 = num2+30;
					if (num2>=obj1.clientHeight-obj2.clientHeight) {
						num2 = obj1.clientHeight-obj2.clientHeight;
				   	}
					obj.style.top= num2*((hgt_gz-obj3)/(obj1.clientHeight-obj2.clientHeight))+'px';
					obj2.style.top=num2+'px'; 
				}
				if(v==1){
					num2 = num2-30;
					if (num2<=0) {
						num2 = 0;
					}
					obj.style.top= num2*(hgt_gz-obj3)/(obj1.clientHeight-obj2.clientHeight)+'px';
					obj2.style.top=num2+'px'; 
				}
			},false);
		else //奇葩的火狐使用DOMMouseScroll事件
			obj.addEventListener("DOMMouseScroll",function(e){
				//计算鼠标滚轮滚动的距离
				//一格是3行，但是要注意，这里和像素不同的是它是负值
				var v=-e.detail/3;
				 //阻止浏览器默认方法
			 e.preventDefault();
		},false);
	} 
 	var one1 = $('.grzx_left div');
 	$('.cont').css('display','none');
 	var num = 0;
 	one1.hover(function(){
 		num = $(this).index()
 		one1.eq(num).addClass('hover').siblings().removeClass('hover');
 		tab(num);
 		
 	})
 	function tab(num){
 		$('.cont').eq(num).addClass('active1').siblings().removeClass('active1');
 		$('.cont').eq(num).siblings().find('.dl_list').css('top',0);
 		$('.cont').eq(num).siblings().find('.inner').css('top',0);
 	}
})
