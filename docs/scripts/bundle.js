'use strict';

$(function () {
	$('#wrapper').on('click', function () {
		alert('happen');
		document.getElementById('controller').webkitRequestFullScreen();
	});
});
"use strict";