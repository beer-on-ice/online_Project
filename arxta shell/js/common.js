$(".navbar-nav li").on("mouseover",function(){
	$(".navbar-nav li").removeClass("active");
	$(this).addClass("active");
})
$("#footer_li li").on("mouseover",function(){
	$(".navbar-nav li").removeClass("footer_active");
	$(this).addClass("footer_active");
})