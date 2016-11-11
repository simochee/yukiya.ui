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
			if(z > 0) {
				// 前進
                socket.emit("straight", FR_THR, FR_THR - abs_z);
                $('#status').text(FR_THR - abs_z);
			}
		}

		// $('#status').text(`${y} / ${z}`)
	}
}

window.addEventListener('deviceorientation', driver);
