/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */

export function videoPlayer() {
	let containers = document.querySelectorAll('.video-section-container');
	containers.forEach(container => {
		// button = container.querySelector('button.play-button'),
		let video = container.querySelector('video');
		// progressBar = container.querySelector('.progress-bar');
		container.addEventListener('click', event => {
			'BUTTON' !== event.target.nodeName &&
				'PROGRESS' !== event.target.nodeName &&
				(video.paused
					? (video.play() !== null &&
							video.play().catch(() => {
								video.play();
							}),
						container.classList.add('playing'),
						containers.forEach(containerItem => {
							containerItem != container &&
								(containerItem.querySelector('video').pause(),
								containerItem.classList.remove('playing'));
						}))
					: (video.pause(), container.classList.remove('playing')));
		});
		// progressBar.addEventListener('click', e => {
		// 	let rect = e.target.getBoundingClientRect(),
		// 		clickedValue =
		// 			((e.clientX - rect.left) / (rect.right - rect.left)) * 100;
		// 	(video.currentTime = (clickedValue / 100) * video.duration),
		// 		(progressBar.value = clickedValue);
		// }),
		// button.addEventListener('click', event => {
		// 	video.paused
		// 		? (video.play() !== null &&
		// 				video.play().catch(() => {
		// 					video.play();
		// 				}),
		// 			container.classList.add('playing'))
		// 		: (video.pause(), container.classList.remove('playing'));
		// });
		// ,
		// (video.ontimeupdate = () => {
		// let progress = (video.currentTime / video.duration) * 100;
		//     progressBar && progressBar.value = progress
		// });
	});
}
