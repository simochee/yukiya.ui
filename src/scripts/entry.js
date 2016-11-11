$(function() {
	// デバッグ用表示の有無
	const hash = location.href.match(/#(.+)$/g);
	const mode = hash ? hash[0].slice(1,) : null;
	if(mode === 'debug') {
		$('#debug').css({
			visibility: 'visible'
		});
	}
});