// AJAX Form Send Javascript
$(function() {
    // Get the form.
	"use strict";
    var form = $('#contact-form') ;
	
	// Set up an event listener for the contact form.
	$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
	var formData = $(form).serialize();
	// Submit the form using AJAX.
	$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
	})
	
	.done(function() {
		//Change Submit Button.
		$('#plane').addClass('.plane-sent');
		$('#check').addClass('.check-sent');
		$('button').addClass('.sent');
		// Clear the form.
    	$('#name').prop('readonly', 'readonly');
		$('#subject').prop('readonly', 'readonly');
    	$('#email').prop('readonly', 'readonly');
    	$('#message').prop('readonly', 'readonly');
	});
});
});