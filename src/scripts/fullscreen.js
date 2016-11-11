$(function() {
	$('#wrapper').on('click', () => {
		document.getElementById('controller').webkitRequestFullScreen();
	});
});