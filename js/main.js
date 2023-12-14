(function($) {

	let	$window = $(window), $body = $('body');

	// Hides navigation bar when scrolling down
	let prevScrollpos = window.scrollY;
	window.onscroll = function() {
		let currentScrollPos = window.scrollY;
		let element = document.getElementById("navbar");
		element.style.top = (prevScrollpos > currentScrollPos) ? "0" : "-75px";
		prevScrollpos = currentScrollPos;
	}

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});
})(jQuery);