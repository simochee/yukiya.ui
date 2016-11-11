const socket = {
	emit: () => {}
};
let timer = 0;

const FR_THR = 40;
const BK_THR = 60;
const Y_THR = 40;

const driver = (e) => {
	const y = Math.round(e.beta);
	const z = Math.round(e.gamma);
	if(new Date - timer > 200) {
		timer = new Date;
		const abs_y = Math.abs(y);
		const abs_z = Math.abs(z);

		if(abs_z <= FR_THR) {
			$('#message').text('Forwerd')
			if(z > 0) {
				// 前進
                socket.emit("straight", FR_THR, FR_THR - abs_z);
                $('#guideline').css({
                	transform: `rotate(${((FR_THR - abs_z) / 40) * 250 - 35}deg)`
                });
				$('#monitor').text('FORWERD');                
			}
		}

		$('#status').text(`${y} / ${z}, ${FR_THR - abs_z}`)
	}
}

window.addEventListener('deviceorientation', driver);
