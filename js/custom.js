$( document ).ready(function() {	
	
	// menu							 
	$('.navigation nav').meanmenu();	
	
	// search box toggle
	$('.searchIcon').click(function(){
		$('.searchbox').toggleClass('open');
	});
	
	// scroll up
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 500) {
			$(".scrollTop").addClass("pop");
		}else{
			$(".scrollTop").removeClass("pop");
		}
	}); 
	$('.scrollTop').click(function(){ 
			$('html,body').animate({ scrollTop: 0 },1000);
			return false; 
	});
	
	// testimonals
	$('.testimonialsSlide').slick({
		centerMode: true,
		centerPadding: '31%',
		slidesToShow: 1,
		dots:false,
		autoplay:true,
		autoplaySpeed: 3000,
		arrows:false,
		responsive: [
			{
				breakpoint: 1480,
				settings: {
					autoplay:true,
					centerPadding: '25%',
				}
			},
			{
				breakpoint: 991,
				settings: {
					autoplay:true,
					centerPadding: '10%',
				}
			},
			{
			breakpoint: 639,
				settings: {
					autoplay:true,
					centerPadding: '0%',
				}
			}
		]
	});

	// blogcast-slider
	$('.blogcast-slider').slick({
		dots: false,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: $('.prev-slide-blog'),
		nextArrow: $('.next-slide-blog'),
	 });

	 // header shrink
	 $(window).scroll(function() {    
	 if ($(document).scrollTop() > 93){
		$(".mainHd").addClass("shrink");
	  } else {
		$(".mainHd").removeClass("shrink");
	}
	});

});

// Equal height
$(function() {
   $('.sponsor-item').matchHeight();
   $('.sm-hg-bx').matchHeight();
   $('.hg-research').matchHeight();

   
   $('.logo-box').matchHeight();
   $('.blogcast-eql-height').matchHeight();
   $('.platform-eql-height').matchHeight();
   $('.ft-box').matchHeight();
});