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

	/*
	 * 値を送信
	 */

	 $('#status').text(`${y} / ${z}`);

}

window.addEventListener('deviceorientation', driver);
