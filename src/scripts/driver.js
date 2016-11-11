const meter = (speed) => {
	$('#message').text(speed);
	$('#guideline').css({
		transform: `rotate(${speed * 250 - 35}deg)`
	});
}

const monitor = (state) => {
	$('#monitor').attr('data-state', state);
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

	 $('#status').text(`${y} / ${z}`);
}

window.addEventListener('deviceorientation', driver);
