'use strict';

$(function () {
	$('#wrapper').on('click', function () {
		document.getElementById('controller').webkitRequestFullScreen();
	});
});
'use strict';

var socket = {
	emit: function emit() {}
};
var timer = 0;

var FR_THR = 40;
var BK_THR = 60;
var Y_THR = 40;

var driver = function driver(e) {
	var y = Math.round(e.beta);
	var z = Math.round(e.gamma);

	/*
  * 値を送信
  */

	$('#status').text(y + ' / ' + z);
};

window.addEventListener('deviceorientation', driver);
"use strict";