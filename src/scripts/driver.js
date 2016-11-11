// const socket = io();
let timer = 0;

const driver = (e) => {
	try {

		const y = Math.round(e.beta);
		const z = Math.round(e.gamma);

		$('#status').text(`${z} / ${y}`);		
	} catch (e) {
		$('#status').text(e);
	}

}

window.addEventListener('deviceorientation', driver);
