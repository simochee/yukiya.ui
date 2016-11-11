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
	var y = Math.round(e.beta);
	var z = Math.round(e.gamma);
	if (new Date() - timer > 200) {
		timer = new Date();
		var abs_y = Math.abs(y);
		var abs_z = Math.abs(z);

		$('#status').text(y + ' / ' + z);
	}

	$('#status').text(z + ' / ' + y);
};

window.addEventListener('deviceorientation', driver);
"use strict";