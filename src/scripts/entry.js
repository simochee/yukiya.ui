$(function() {
	// デバッグ用表示の有無
	const hash = location.href.match(/#(.+)$/g);
	const mode = hash ? hash[0].slice(1,) : null;
	if(mode === 'debug') {
		$('#debug').css({
			visibility: 'visible'
		});
	}
	// デバッグモードに移行
	let timer = 0;
	let count = 0;
	$(window).on('click', () => {
		const now = new Date;
		console.log(now - timer, count)
		if(now - timer < 200) {
			if(count >= 10) {
				if(mode === 'debug') {
					// 終了
					$('#monitor').attr('data-state', 'play');
					setTimeout(() => {
						location.hash = '';
						location.reload();
					}, 2000);
				} else {
					// 移行
					$('#monitor').attr('data-state', 'debug');
					setTimeout(() => {
						location.hash = 'debug';
						location.reload();
					}, 2000);
				}
			}
			count++;
		} else {
			count = 1;
		}
		timer = now;
	});
});