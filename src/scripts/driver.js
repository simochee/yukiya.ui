const meter = (speed) => {
	$('#guideline').css({
		transform: `rotate(${speed * 250 - 35}deg)`
	});
}

const driver = (e) => {
	const y = Math.round(e.beta);
	const z = Math.round(e.gamma);

	/*
	 * 値を送信
	 */

	// 停止判定
	if(60 > z && z < -60) {
		meter(0);
	}
	// 後進判定
	else if(z <= 60 && z > 0) {
		meter(z / 60)
	}
	// 前進判定
	else {
		meter(Math.abs(z) / 60);
	}

	 $('#status').text(`${y} / ${z}`);
}

window.addEventListener('deviceorientation', driver);
