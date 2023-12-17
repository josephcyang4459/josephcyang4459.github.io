(function($) {

	let	$window = $(window), $body = $('body');

	// Hides navigation bar when scrolling down
	let prevScrollpos = window.scrollY;
	window.onscroll = function() {
		let currentScrollPos = window.scrollY;
		let element = document.getElementById("navbar");
		if (prevScrollpos > currentScrollPos) {
			element.style.top = "0";
			element.style.boxShadow = "0 20px 20px -10px rgba(16, 30, 61, .7)";
		}
		else {
			element.style.top = "-105px";
			element.style.boxShadow = "none";
		}
		prevScrollpos = currentScrollPos;
	}

	// Play initial animations on page load.
	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});
})(jQuery);