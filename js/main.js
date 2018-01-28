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
		if ( $(window).scrollTop() >= 30 ) {
        $('#scroll').css('opacity', '0').css('visibility', 'hidden');
    	}
		else {
        $('#scroll').attr('style', '');
   		}
    });

// Animsition
$(document).ready(function() {
	"use strict";
	$(".animsition").animsition({
    	inClass: 'fade-in-down-sm',
    	outClass: 'fade-out-up-sm',
    	inDuration: 500,
    	outDuration: 500,
    	linkElement: '.animsition-link',
    	// e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    	loading: true,
    	loadingParentElement: 'body', //animsition wrapper element
    	loadingClass:   'animsition-loading',
        loadingInner:   '', // e.g '<img src="loading.svg" />'
    	timeout: false,
    	timeoutCountdown: 5000,
    	onLoadEvent: true,
    	browser: [ 'animation-duration', '-webkit-animation-duration'],
    	// "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    	// The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    	overlay : false,
    	overlayClass : 'animsition-overlay-slide',
    	overlayParentElement : 'body',
    	transition: function(url){ window.location.href = url; }
	});
});

// AOS
$(function() {
  AOS.init();
});