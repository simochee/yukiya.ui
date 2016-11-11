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
	try {

		var y = Math.round(e.beta);
		var z = Math.round(e.gamma);

		$('#status').text(z + ' / ' + y);
	} catch (e) {
		$('#status').text(e);
	}
};

window.addEventListener('deviceorientation', driver);
"use strict";