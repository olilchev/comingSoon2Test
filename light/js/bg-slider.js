/*
|--------------------------------------------------------------------------
	Light Template BG slider JS
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {},false);
(function ($) {
	"use strict";
		
	$('body').vegas({
	  overlay: true,
	  transition: 'fade', 
	  transitionDuration: 4000,
	  delay: 10000,
	  animation: 'random',
	  animationDuration: 20000,
	  timer: false,
	  slides: [
		{ src: 'images/style-5.jpg' },
		{ src: 'images/style-1.jpg' },
		{ src: 'images/style-2.jpg' },
		{ src: 'images/style-6.jpg' },
		{ src: 'images/style-4.jpg' }		
	  ]
	});

})(jQuery);
	
/*
|--------------------------------------------------------------------------
	End
|--------------------------------------------------------------------------
*/