$(function(){
	var xq_lb = $('.xq_lb');
	var lb_img = $('.lb_img');
	var btn_prev = $('#btn_prev');
	var btn_next = $('#btn_next');
	var num = 0;
	var timer = null;
	var li_list = $('.lb_img li');
	var vd_li = $('.xq_lb ul li');
	$('.lb_img li').css('margin-left', '7px');
	$('.lb_img li').eq(0).css('margin', '0');
	if ($('.vd_li').children().length != 0) {
		if(li_list.length > 1){
			var firstimg=li_list.first().clone(); //复制第一张图片
//			firstimg.css('margin-left','7px');
	  		lb_img.append(firstimg).width($('.lb_img li').length*397); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
		}
		lb_img.width($('.lb_img li').length*404);
		li_list = $('.lb_img li');
		btn_next.click(function() {
	        num++;
		   	if (num==li_list.length) {
			    num=1; //这里不是i=0
			    lb_img.css({left:0}); //保证无缝轮播，设置left值
		   	};  
		   lb_img.stop().animate({left:-num*404},300);
	   });
	    btn_prev.click(function() {
	        num--;
		   if (num==-1) {
		    num = li_list.length-2;
		    lb_img.css({left:-(li_list.length-1)*404});
		   }
		   lb_img.stop().animate({left:-num*404},300);
	    });
		function autoplay(){
			num++;
		   	if (num==li_list.length) {
		    	num=1;
		    	lb_img.css({left:0});
		   	};
		   lb_img.stop().animate({left:-num*404},300);
		}
		if(li_list.length > 2){
			xq_lb.hover(function(){
			   $('.btn').show();
			},function(){
			   $('.btn').hide();
			})
			timer = setInterval(autoplay, 2000);
			xq_lb.hover(function() {
			 	clearInterval(timer);
			}, function() {
			  timer = setInterval(autoplay, 2000);
			})
		}
	}else{
//		console.log("o");
		$('.vd_li').css('display','none');
		xq_lb.width(801);
		lb_img.width($('.lb_img li').length*404);
		$('.lb_img li').css('margin-left', '7px');
		$('.lb_img li').eq(0).css('margin', '0');
		if(li_list.length > 2){
			var firstimg=li_list.first().clone(); //复制第一张图片
			var secondimg=li_list.eq(1).clone();
			firstimg.css('margin-left','7px')
	  		lb_img.append(firstimg).width($('.lb_img li').length*397); //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
			lb_img.append(secondimg).width($('.lb_img li').length*397);
		}
		btn_next.click(function() {
	        num++;
		   	if (num==li_list.length) {
			    num=1; //这里不是i=0
			    lb_img.css({left:0}); //保证无缝轮播，设置left值
		   	};  
		   lb_img.stop().animate({left:-num*404},300);
	   });
	    btn_prev.click(function() {
	        num--;
		   if (num==-1) {
		    num = li_list.length-2;
		    lb_img.css({left:-(li_list.length-1)*404});
		   }
		   lb_img.stop().animate({left:-num*404},300);
	    });
	    function autoplay(){
			num++;
		   	if (num==li_list.length) {
		    	num=1;
		    	lb_img.css({left:0});
		   	};
		   lb_img.stop().animate({left:-num*404},300);
		}
	    if(li_list.length > 2){
			xq_lb.hover(function(){
			   $('.btn').show();
			},function(){
			   $('.btn').hide();
			})
			timer = setInterval(autoplay, 2000);
			xq_lb.hover(function() {
			 	clearInterval(timer);
			}, function() {
			  timer = setInterval(autoplay, 2000);
			})
		}
	}
})

//$(function(){
//	var xq_lb1 = $('.xq_lb1');
//	var lb_img1 = $('.lb_img1');
//	var btn_prev1 = $('#btn_prev1');
//	var btn_next1 = $('#btn_next1');
//	var num1 = 0;
//	var timer1 = null;
////	$('.lb_img1 li:nth-child(2n)').css('margin', '0')
//	var li_list1 = $('.lb_img1 li');
//	li_list1.eq(0).css('margin', '0')
//
//	if(li_list1.length > 2){
//		var firstimg=li_list1.first().clone(); //复制第一张图片
//		var secondimg=li_list1.eq(1).clone();
//		lb_img1.append(firstimg) //将第一张图片放到最后一张图片后，设置ul的宽度为图片张数*图片宽度
//		lb_img1.append(secondimg).width($('.lb_img1 li').length*392);
//	}
//	li_list1 = $('.lb_img1 li');
//	lb_img1.width(li_list1.length*392);
//	var i;
//	if (li_list1.length%2==0) {
//		i = li_list1.length/2;
//	} else{
//		i = (li_list1.length+1)/2;
//	}
//	btn_next1.click(function() {
//      num1++;
//	   	if (num1>=i) {
//		    num1=1; //这里不是i=0
//		    lb_img1.css({left:0}); //保证无缝轮播，设置left值
//	   	};  
//	   lb_img1.stop().animate({left:-num1*200},300);
// });
//  btn_prev1.click(function() {
//      num1--;
//	   if (num1<=-1) {
//	    num1 = i-2;
//	    lb_img1.css({left:-(i-1)*196});
//	   }
//	   lb_img1.stop().animate({left:-num1*200},300);
//  });
//	
//	
//	function autoplay1(){
//		num1++;
//	   	if (num1==i) {
//	    	num1=1;
//	    	lb_img1.css({left:0});
//	   	};
//	   lb_img1.stop().animate({left:-num1*200},300);
//	}
//	if(li_list1.length > 2){
//		xq_lb1.hover(function(){
//		   $('.btn1').show();
//		},function(){
//		   $('.btn1').hide();
//		})
//		timer1 = setInterval(autoplay1, 1000);
//		xq_lb1.hover(function() {
//		 	clearInterval(timer1);
//		}, function() {
//		  timer1 = setInterval(autoplay1, 1000);
//		})
//	}
//})

$(function(){
	var oOut=document.getElementById('out'); 
	  	var oInner=document.getElementById('inner');       
	    var oDl=document.getElementById('dl_list');
	    var hgt_gz = $('.gwzz').outerHeight(true);
	    var hgt_dl = $('#dl_list').outerHeight(true);	
	    var num2 = oInner.offsetTop;	
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
	        distY1 = (oDl.clientHeight-hgt_gz) / (oOut.clientHeight-oInner.clientHeight) * y ;
	        oInner.style.top=y+'px';    //根据鼠标位置相对定位，得到left，top值  
	        oDl.style.top= -distY1+'px';
	        num2 = oInner.offsetTop;	
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
			num2 = num2+15;
			if (num2>=oOut.clientHeight-oInner.clientHeight) {
				num2 = oOut.clientHeight-oInner.clientHeight;
			}
			oDl.style.top= -num2*225/334+'px';
			oInner.style.top=num2+'px'; 
		}
		  if(v==1){
			num2 = num2-10;
			if (num2<=0) {
				num2 = 0;
			}
			oDl.style.top= -num2*225/334+'px';
			oInner.style.top=num2+'px'; 
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