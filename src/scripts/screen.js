const screen = () => {
	const $tachometer = $('#tachometer');
	const $handle = $('#handle .body');

	const winH = $(window).height();
	const winW = $(window).width();
	const tacW = $tachometer.width() + 40;

	$tachometer.css({
		transform: `scale(${winH / tacW * 0.9})`
	});

	const handleW = (winW - tacW) / 2 * 0.8;
	const hndW = $handle.width();
	const hndH = $handle.height();

	$handle.css({
		transform: `scale(${handleW / hndW * 0.9})`
	});
	console.log(hndW / handleW * 0.9)
	
}

$(document).ready(screen);
$(window).on('resize load', screen);