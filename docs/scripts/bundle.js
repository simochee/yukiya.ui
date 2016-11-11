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
	var y = e.beta;
	var z = e.gamma;

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

	if (y > 10 && y < 170) {
		if (y < 30 || y > 150) {
			handle('left-1');
		} else if (y < 50 || y > 120) {
			handle('left-2');
		} else {
			handle('left-3');
		}
	} else if (y < -10 && y > -170) {
		if (y > -30 || y < -150) {
			handle('right-1');
		} else if (y > -50 || y < -120) {
			handle('right-2');
		} else {
			handle('right-3');
		}
	} else {
		handle('horizontal');
	}

	$('#debugY').text(y);
	$('#debugZ').text(z);
};

window.addEventListener('deviceorientation', driver);
'use strict';

$(function () {
	// デバッグ用表示の有無
	var hash = location.href.match(/#(.+)$/g);
	var mode = hash ? hash[0].slice(1) : null;
	if (mode === 'debug') {
		$('#debug').css({
			visibility: 'visible'
		});
	}
	// デバッグモードに移行
	var timer = 0;
	var count = 0;
	$(window).on('click', function () {
		var now = new Date();
		console.log(now - timer, count);
		if (now - timer < 200) {
			if (count >= 10) {
				if (mode === 'debug') {
					// 終了
					$('#monitor').attr('data-state', 'play');
					setTimeout(function () {
						location.hash = '';
						location.reload();
					}, 2000);
				} else {
					// 移行
					$('#monitor').attr('data-state', 'debug');
					setTimeout(function () {
						location.hash = 'debug';
						location.reload();
					}, 2000);
				}
			}
			count++;
		} else {
			count = 1;
		}
		timer = now;
	});
});