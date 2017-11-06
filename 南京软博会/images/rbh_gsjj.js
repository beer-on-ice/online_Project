$(function() {
        var mian_cpxq = $('.mian_cpxq');
        var pic_list = $('#pic_list');
        var pic_listli = $('#pic_list li');
        var text_list = $('#text_list');
        var text_listli = $('#text_list li');
        var text_list = $('#text_list');
        var ico_list = $('#ico_list ul');
        var ico_listli = $('#ico_list li');
        var icoleft = 0;
        var num1 = 0;
        var num = 0;
        var timer = null;
        var li_wth = ico_listli.outerWidth(true);
		var pre = $('#pre');
		var next = $('#next');
	pic_listli.eq(0).addClass('active1');
	ico_listli.eq(0).addClass('active').css('margin','0');
	ico_listli = $('#ico_list  li');
	ico_list.width(ico_listli.length*li_wth);
	text_listli.eq(0).find('h2').addClass('show');
	var n = ico_listli.length;
	next.click(function() {
        num1++;
        num++;
	   	if (num1== n-3) {
		    num1=n-4; //这里不是i=0
	   	};  
	   ico_list.stop().animate({left:-num1*li_wth},300);
	   if(num>=n){
	   	num = n-1;
	   }
	   text_listli.find('h2').removeClass('show');
	   pic_listli.eq(num).addClass('active1').siblings().removeClass('active1');
	   text_listli.eq(num).find('h2').addClass('show');
	   ico_listli.eq(num).addClass('active').siblings().removeClass('active');
	   
   });
    pre.click(function() {
        num1--;
        num--;
	   if (num1==-1) {
	    	num1 = 0;
	   }
	   ico_list.stop().animate({left:-num1*li_wth},300);
	    if(num==-1){
	   		num=0;
	   }
	   text_listli.find('h2').removeClass('show');
	   pic_listli.eq(num).addClass('active1').siblings().removeClass('active1');
	   text_listli.eq(num).find('h2').addClass('show');
	   ico_listli.eq(num).addClass('active').siblings().removeClass('active');
    });
	ico_listli.click(function(){
		text_listli.find('h2').removeClass('show');
		text_listli.eq($(this).index()).find('h2').addClass('show');
		pic_listli.eq($(this).index()).addClass('active1').siblings().removeClass('active1');
		ico_listli.eq($(this).index()).addClass('active').siblings().removeClass('active');
	})
 })


$(function(){
		var oH3=$('.tlt h3').outerHeight(true);
		var oOut=document.getElementById('out'); 
	  	var oInner=document.getElementById('inner');       
	    var oDl=document.getElementById('dl_list');
	    var hgt_gz = $('.gwzz').outerHeight(true);
	    var hgt_dl = $('#dl_list').outerHeight(true);	
	    var num2 = oInner.offsetTop;	
	    if (hgt_dl <=  hgt_gz) {
			$('.gdt').css({'display':'none'}) 
		}
	  	hgt_gz = 495 - oH3 -6 -45-39;
	  	$('.gwzz').css({'height':hgt_gz+'px'})
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
			oDl.style.top= num2*((hgt_gz-hgt_dl)/(oOut.clientHeight-oInner.clientHeight))+'px';
			oInner.style.top=num2+'px'; 
		}
		  if(v==1){
			num2 = num2-10;
			if (num2<=0) {
				num2 = 0;
			}
			oDl.style.top= num2*(hgt_gz-hgt_dl)/(oOut.clientHeight-oInner.clientHeight)+'px';
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



//资料下载
$(function(){
	var xz_a = $('.gwzz #dl_list li a');
	var xz_ol = $('.gwzz #dl_list ol');
	var xz_li = $('.gwzz #dl_list ol li');
	var num1 = 0;
	if(xz_li.length<8){
		num1 = xz_li.length;
		for (;num1<8;num1++) {
			var _lastLi = document.createElement('li');
			xz_ol.append(_lastLi);
	}
	}
	xz_li = $('.gwzz #dl_list ol li');
	for (var num=0;num<xz_li.length;num++) {
		if(num % 2 == 1){
			xz_li[num].className = 'active2'
		}else{
			xz_li[num].className = 'active3'
		}
	}
	for (var num2=0;num2<xz_a.length;num2++) {
		if(num2 % 2 == 1){
			xz_a[num2].className = 'active2'
		}else{
			xz_a[num2].className = 'active3'
		}
	}
})
//公司列表
$(function(){
	var gs_wp = $('.gs_wp');
	var gs_ul = $('.gs_ul');
	var pre1 = $('#pre1');
	var next1 = $('#next1');
	var gsmclb_li = $('#gsmclb li');
	var gsmclb = $('#gsmclb');
	var gs_li = $('.gs_ul li');
	var pre2 = $('.mian_gslb #cpxq_left .pre')
	$('.gs_ul li:nth-child(4n)').css('margin-right', '0px');
	var num = Math.ceil(gsmclb_li.length/16);
	var cNode;
	if (num>=1) {
		for (var m=0;m<num;m++) {
			var gs_ul1 = $("<ul class='gs_ul'>").appendTo(gs_wp);
			gs_ul = $('.gs_ul');
			gs_ul2 = gs_ul.eq(m);
			var j = m*16
			for (;j<16*(m+1);j++) {
				cNode = gsmclb_li.eq(j).clone(true);
				gs_ul2.append(cNode);
			}
		}
	}
	gs_wp.css('width',gs_ul.length * 609 +'px');
	if (gs_ul.length<=1) {
		pre2.css('display','none');
	}
	$('.gs_ul li:nth-child(4n)').css('margin-;right', '0px');
	var num1 = 0;
	next1.click(function(){
		num1++;
		if(num1>=gs_ul.length){
			num1 = gs_ul.length-1;
		}
		gs_wp.stop().animate({left:-num1*609},300);
	})
	pre1.click(function(){
		num1--;
		if(num1<=0){
			num1 = 0;
		}
		gs_wp.stop().animate({left:-num1*609},300);
	})
})