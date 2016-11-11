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
			if(z < 0) {
				// 前進
                socket.emit("straight", FR_THR, FR_THR - abs_z);
                $('#guideline').css({
                	transform: `rotate(${((FR_THR - abs_z) / 40) * 250 - 35}deg)`
                });
				$('#monitor').text('FORWERD');                
			} else {
				// 停止
                socket.emit("stop");
                $('#guideline').css({
                	transform: `rotate(35deg)`
                });
				$('#monitor').text('STOP'); 
			}
    	}
		else if(abs_y >= Y_THR && abs_y <= 90) {

		}
    	else if(abs_z <= BK_THR) {
			$('#message').text('Forwerd')
    		if(z > 0) {
				$('#message').text('Forwerd - ' + z)
    			// 後進
                socket.emit("back", BK_THR, BK_THR - abs_z);
                $('#guideline').css({
                	transform: `rotate(${((FR_THR - abs_z) / 40) * 250 - 35}deg)`
                });
				$('#monitor').text('BACK');
    		} else {
				// 停止
                socket.emit("stop");
                $('#guideline').css({
                	transform: `rotate(35deg)`
                });
				$('#monitor').text('STOP'); 
    		}
		} else {
			$('#message').text('Stop')
			// 停止
            socket.emit("stop");
            $('#guideline').css({
            	transform: `rotate(35deg)`
            });
			$('#monitor').text('STOP'); 
		}

		$('#status').text(`${y} / ${z}, abs ? ${FR_THR - abs_z}`)
	}
}

window.addEventListener('deviceorientation', driver);
