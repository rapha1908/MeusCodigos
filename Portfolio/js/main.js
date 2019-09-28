const responsive = {
	0:{
		items:1
	},
	320:{
		items:1
	},
	560:{
		items:2
	},	
	960:{
		items:3
	},
	
}


$(function() {
	$nav = $(".nav");
	$toggleCollapse = $(".toggle-collpase");
	
	//evento de click no botão toggle
	$toggleCollapse.click(function(){
		$nav.toggleClass('collapse');
		
	});
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:7000,
		dots:false,
		nav:true,
		navText:[$(".owl-navegation .owl-nav-prev"), $(".owl-navegation .owl-nav-next")],
		responsive:responsive
	});
	
	$(".move-up").click(function(){
		$("html, body").animate({
			scrollTop:0
		},3000);
	})
		
	
	//Inicialização da animação
	AOS.init();
});