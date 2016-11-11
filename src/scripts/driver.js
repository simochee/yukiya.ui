const meter = (speed) => {
	$('#message').text(speed);
	$('#guideline').css({
		transform: `rotate(${speed * 250 - 35}deg)`
	});
}

const monitor = (state) => {
	$('#monitor').attr('data-state', state);
}

const handle = (step) => {
	$('#handle').attr('data-step', step);
}

const driver = (e) => {
	const y = Math.round(e.beta);
	const z = Math.round(e.gamma);

	/*
	 * 値を送信
	 */

	// 前進判定
	if(z <= 60 && z > 0) {
		monitor('forward');
		meter(1 - z / 60)
	}
	// 後進判定
	else if(z >= -60 && z < 0) {
		monitor('back');
		meter(1 - Math.abs(z) / 60);
	}
	// 停止判定
	else {
		monitor('stop');
		meter(0);
	}

	if(y > 10 && y < 170) {
		if(y < 30 || y < 150) {
			handle('left-1');
		} else if(y < 50 || 120) {
			handle('left-2');
		} else {
			handle('left-3');
		}
	} else if(y < -10 && y > -170) {
		if(y > -30 || y < -150) {
			handle('right-1');
		} else if(y > -50 || y < -120) {
			handle('right-2');
		} else {
			handle('right-3');
		}
	} else {
		handle('horizontal');
	}

	$('#debugY').text(y);
	$('#debugZ').text(z);
}

window.addEventListener('deviceorientation', driver);
