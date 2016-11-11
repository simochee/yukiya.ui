'use strict';

$(function () {
	$('#wrapper').on('click', function () {
		document.getElementById('controller').webkitRequestFullScreen();
	});
});
'use strict';

var socket = {
	emit: function emit() {}
};
var timer = 0;

var FR_THR = 40;
var BK_THR = 60;
var Y_THR = 40;

var driver = function driver(e) {
	var y = Math.round(e.beta);
	var z = Math.round(e.gamma);
	if (new Date() - timer > 200) {
		timer = new Date();
		var abs_y = Math.abs(y);
		var abs_z = Math.abs(z);

		if (abs_z <= FR_THR) {
			$('#message').text('Forwerd');
			if (z > 0) {
				// 前進
				socket.emit("straight", FR_THR, FR_THR - abs_z);
				$('#guideline').css({
					transform: 'rotate(' + ((FR_THR - abs_z) / 40 * 250 - 35) + 'deg)'
				});
				$('#monitor').text('FORWERD');
			}
		}

		$('#status').text(y + ' / ' + z + ', ' + (FR_THR - abs_z));
	}
};

window.addEventListener('deviceorientation', driver);
"use strict";