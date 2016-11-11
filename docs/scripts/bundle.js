'use strict';

$(function () {
	$('#wrapper').on('click', function () {
		document.getElementById('controller').webkitRequestFullScreen();
	});
});
'use strict';

// const socket = io();
var timer = 0;

var driver = function driver(e) {
	console.log('start');

	var y = Math.round(event.beta);
	var z = Math.round(event.gamma);

	$('#status').text(z + ' / ' + y);
};

document.addEventListener('deviceorientation', driver);
document.addEventListener('load', driver);
"use strict";