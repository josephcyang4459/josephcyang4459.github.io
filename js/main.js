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

	// Do processes on load
	$window.on('load', function() {
		for (const element of document.forms) {element.reset();}
		loadingScreen();
	});
})(jQuery);

// Do the loading screen
async function loadingScreen() {
	let loader = document.getElementById("loader");
	let loaderContent = document.getElementById("loader-content");
	let loadTimer = 750;
	loaderContent.style="opacity: 1; margin-bottom: 0";

	for (let i = 0; i < 3; i ++) {
		await new Promise(r => setTimeout(r, loadTimer));
		loaderContent.textContent += ".";
	}

	setTimeout(()=> {
		loader.style="opacity: 0;";
		loaderContent.style="margin-bottom: 100px; color: #d2e8ff;";
	}, loadTimer);

	setTimeout(()=> { loader.style="opacity: 0; display: none;"; }, loadTimer * 2);

	
}