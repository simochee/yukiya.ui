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

var monitor = function monitor(state) {
	$('#monitor').attr('data-state', state);
};

var handle = function handle(step) {
	$('#handle').attr('data-step', step);
};

var driver = function driver(e) {
	var y = Math.round(e.beta);
	var z = Math.round(e.gamma);

	/*
  * 値を送信
  */

	// 前進判定
	if (z <= 60 && z > 0) {
		monitor('forward');
		meter(1 - z / 60);
	}
	// 後進判定
	else if (z >= -60 && z < 0) {
			monitor('back');
			meter(1 - Math.abs(z) / 60);
		}
		// 停止判定
		else {
				monitor('stop');
				meter(0);
			}

	if (z > 10) {
		if (z < 30) {
			handle('left-1');
		} else if (z < 50) {
			handle('left-2');
		} else {
			handle('left-3');
		}
	} else if (z < -10) {
		if (z > -30) {
			handle('right-1');
		} else if (z > -50) {
			handle('right-2');
		} else {
			handle('right-3');
		}
	} else {
		handle('horizontal');
	}

	$('#status').text(y + ' / ' + z);
};

window.addEventListener('deviceorientation', driver);
"use strict";