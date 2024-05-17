/*
|--------------------------------------------------------------------------
	Light - Coming Soon HTML5 Responsive Template Main JS
	Author: MGScoder
	Author URL: https://themeforest.net/user/mgscoder
|--------------------------------------------------------------------------
*/
document.addEventListener("touchstart", function() {},false);
(function ($) {
	"use strict";

/*
|--------------------------------------------------------------------------
	CountUp
|--------------------------------------------------------------------------
*/
	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 1);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());

/*
|--------------------------------------------------------------------------
	Subscribe Form
|--------------------------------------------------------------------------
*/
	//Change YOUR MAILCHIMP ACCOUNT LIST FORM ACTION URL
	$('#mc-form').ajaxChimp({
		url: 'http://YOUR MAILCHIMP ACCOUNT LIST FORM ACTION'
	});

/*
|--------------------------------------------------------------------------
	Contact Form
|--------------------------------------------------------------------------
*/	
	$("#contactForm").validator().on("submit", function (event) {
		if (event.isDefaultPrevented()) {
			//handle the invalid form...
			formError();
			submitMSG(false, "Please fill in the form properly!");
		} else {
			//everything looks good!
			event.preventDefault();
			submitForm();
		}
	});
	
	function submitForm(){
		$.ajax({
			type: "POST",
			url: "contact-process.php",
			data: $( "#contactForm" ).serialize(),
			success : function(text){
				if (text === "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}
	
	function formSuccess(){
		$("#contactForm")[0].reset();
		submitMSG(true, "Your Message Submitted Successfully!")
	}
	
	function formError(){
		$(".help-block.with-errors").removeClass('hidden');
	}
	
	function submitMSG(valid, msg){
		if(valid){
			var msgClasses = "h3 text-center text-success";
		} else {
			var msgClasses = "h3 text-center text-danger";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}
	

})(jQuery);


/*
|--------------------------------------------------------------------------
	Overly Sttle
|--------------------------------------------------------------------------
*/
	function openHomeStyle() {
		$( "#about-section" ).removeClass( "show" );
		$( "#services-section" ).removeClass( "show" );
		$( "#subscribe-section" ).removeClass( "show" );
		$( "#mycontact-section" ).removeClass( "show" );
		$( "#mainhome" ).removeClass( "slide-dowun" );
	}
	function openAboutStyle() {
		$( "#mainhome" ).addClass( "slide-dowun" );
		$( "#services-section" ).addClass( "slide-up" );
		$( "#subscribe-section" ).addClass( "slide-up" );
		$( "#mycontact-section" ).addClass( "slide-up" );
		$( "#about-section" ).removeClass( "slide-up" );
		$( "#about-section" ).addClass( "show" );
	}
	function openServicesStyle() {
		$( "#mainhome" ).addClass( "slide-dowun" );
		$( "#about-section" ).addClass( "slide-up" );
		$( "#subscribe-section" ).addClass( "slide-up" );
		$( "#mycontact-section" ).addClass( "slide-up" );
		$( "#services-section" ).removeClass( "slide-up" );
		$( "#services-section" ).addClass( "show" );
	}	
	function openSubscribeStyle() {
		$( "#mainhome" ).addClass( "slide-dowun" );
		$( "#about-section" ).addClass( "slide-up" );
		$( "#services-section" ).addClass( "slide-up" );
		$( "#mycontact-section" ).addClass( "slide-up" );
		$( "#subscribe-section" ).removeClass( "slide-up" );
		$( "#subscribe-section" ).addClass( "show" );
	}
	function openContactStyle() {
		$( "#mainhome" ).addClass( "slide-dowun" );
		$( "#about-section" ).addClass( "slide-up" );
		$( "#services-section" ).addClass( "slide-up" );
		$( "#subscribe-section" ).addClass( "slide-up" );
		$( "#mycontact-section" ).removeClass( "slide-up" );
		$( "#mycontact-section" ).addClass( "show" );
	}
	
	
/*
|--------------------------------------------------------------------------
	Print Current Year in html footer copyright
|--------------------------------------------------------------------------
*/
	$('span#mgsYear').html( new Date().getFullYear() );

/*
|--------------------------------------------------------------------------
	End
|--------------------------------------------------------------------------
*/