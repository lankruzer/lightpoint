$(document).ready(function() {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		dots: true,
		loop: true
	})
	
	if(document.querySelector( '.btn_you-order' )) {
		$( '.btn_you-order' ).click(function(event) {
			event.preventDefault();
			$( this ).toggleClass( 'btn_you-order_show');
			$( '.aside-content' ).toggleClass( 'aside-content_show' );
		})
	}
	
	$( '.form ' ).submit(function(event) {
		event.preventDefault();
		call( $(this), $(this).attr('action') );
	})
	
	function call(form, action) {
		var msg = form.serialize();
		$.ajax({
			type: 'POST',
			url: action,
			data: msg,
			success: function (data) {
				console.log('Message succsess send, ' + data);
			},
			error: function (xhr, str) {
				console.log('Возникла ошибка: ' + xhr.responseCode);
			}
		});

	}
	
})
