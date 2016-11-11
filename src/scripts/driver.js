// const socket = io();
let timer = 0;

const driver = (e) => {
	const y = Math.round(e.beta);
	const z = Math.round(e.gamma);
	if(new Date - timer > 200) {
		timer = new Date;
		const abs_y = Math.abs(y);
		const abs_z = Math.abs(z);

		$('#status').text(`${y} / ${z}`)
	}

	$('#status').text(`${z} / ${y}`);
}

window.addEventListener('deviceorientation', driver);
