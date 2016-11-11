'use strict';

$(function () {
	$('#wrapper').on('click', function () {
		document.getElementById('controller').webkitRequestFullScreen();
	});
});
'use strict';

var meter = function meter(speed) {
	$('#message').text(speed);
	$('#guideline').css({
		transform: 'rotate(' + (speed * 250 - 35) + 'deg)'
	});
};

var monitor = function monitor(msg) {
	$('#monitor').text(msg);
};

var driver = function driver(e) {
	var y = Math.round(e.beta);
	var z = Math.round(e.gamma);

	/*
  * 値を送信
  */

	// 停止判定
	if (60 > z && z < -60) {
		monitor('STOP');
		meter(0);
	}
	// 前進判定
	else if (z <= 60 && z > 0) {
			monitor('FORWERD');
			meter(1 - z / 60);
		}
		// 後進判定
		else {
				monitor('BACK');
				meter(1 - Math.abs(z) / 60);
			}

	$('#status').text(y + ' / ' + z);
};

window.addEventListener('deviceorientation', driver);
"use strict";