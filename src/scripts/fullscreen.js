$(function() {
	$('#wrapper').on('click', () => {
		alert('happen')
		document.getElementById('controller').webkitRequestFullScreen();
	});
});