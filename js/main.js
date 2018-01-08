// Navigation
$(function() {
	"use strict";
	$('.nav-wrapper, .nav-link, .social-link').click(function(){
		$('.nav-wrapper').toggleClass('wrapper-open');
		$('.nav').toggleClass('nav-open');
		$('.top').toggleClass('top-open');
		$('.mid').toggleClass('mid-open');
		$('.bot').toggleClass('bot-open');
		
		if ($(window).width() < 768) {
		$('body').toggleClass('body-open');
		}
	});
});

// Smooth Scroll
$(function() {
	"use strict";
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});

// Scroll ball
$(window).scroll(function(){
	"use strict";	
		if ( $(window).scrollTop() >= 10 ) {
        $('#scroll').css('opacity', '0').css('visibility', 'hidden');
    	}
		else {
        $('#scroll').attr('style', '');
   		}
    });