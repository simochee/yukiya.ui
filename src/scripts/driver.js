// const socket = io();
let timer = 0;

const driver = (e) => {
	console.log('start')

	const y = Math.round(event.beta);
	const z = Math.round(event.gamma);

	$('#status').text(`${z} / ${y}`);

}

document.addEventListener('deviceorientation', driver);
document.addEventListener('load', driver);