import Nyan from './Nyan';

// Music from https://uppbeat.io/

const KonamiCode = () => {
	//---------------------------------------------//
	// Desktop trigger
	//---------------------------------------------//
	const konamiCode = [
		'ArrowUp',
		'ArrowUp',
		'ArrowDown',
		'ArrowDown',
		'ArrowLeft',
		'ArrowRight',
		'ArrowLeft',
		'ArrowRight',
		'b',
		'a',
	];

	let konamiIndex = 0;

	document.addEventListener('keydown', (e) => {
		const key = e.key;

		if (key === konamiCode[konamiIndex]) {
			konamiIndex++;
			if (konamiIndex === konamiCode.length) {
				// Konami code entered
				showKonamiMessage();
				konamiIndex = 0; // reset
			}
		} else {
			konamiIndex = 0; // reset if wrong key
		}
	});

	//---------------------------------------------//
	// Mobile trigger
	//---------------------------------------------//
	let tapCount = 0;
	let tapTimer = null;
	// let holdTimer = null;

	document.addEventListener('touchstart', () => {
		tapCount++;

		// Reset taps if too slow
		clearTimeout(tapTimer);
		tapTimer = setTimeout(() => (tapCount = 0), 600);

		if (tapCount === 5) {
			showKonamiMessage();

			// // Start hold detection
			// holdTimer = setTimeout(() => {
			// 	// SUCCESS! Trigger your easter egg
			// 	showKonamiMessage();
			// 	tapCount = 0;
			// }, 800); // 0.8s hold
		}
	});

	// document.addEventListener('touchend', () => {
	// 	clearTimeout(holdTimer);
	// });

	//---------------------------------------------//
	// Mouse clicks trigger
	//---------------------------------------------//
	let clickCount = 0;
	let clickTimer = null;
	// let clickHoldTimer = null;

	document.addEventListener('mousedown', () => {
		clickCount++;

		// Reset clicks if too slow
		clearTimeout(clickTimer);
		clickTimer = setTimeout(() => {
			clickCount = 0;
		}, 600); // 600ms window for 5 clicks

		if (clickCount === 5) {
			showKonamiMessage();

			// // Start hold detection
			// clickHoldTimer = setTimeout(() => {
			// 	// SUCCESS! Trigger your easter egg
			// 	showKonamiMessage();
			// 	clickCount = 0;
			// }, 800); // Hold for 0.8s
		}
	});

	// document.addEventListener('mouseup', () => {
	// 	clearTimeout(clickHoldTimer);
	// });

	//---------------------------------------------//
	// Function to show message
	//---------------------------------------------//
	function showKonamiMessage() {
		const message = document.getElementById('konamiCode');
		message.style.display = 'block';

		// Play music
		const audio = document.getElementById('konamiAudio');
		audio.currentTime = 0;
		audio.play().catch((err) => {
			console.warn('Audio play failed:', err);
		});

		setTimeout(() => {
			message.style.display = 'none';
		}, 60000); // hide after 60 seconds
	}

	return (
		<div id="konamiCode">
			<audio id="konamiAudio" preload="none">
				<source src="/assets/music/varsity-sonda.mp3" type="audio/mpeg" />
			</audio>

			<div id="konamiMessage">🎉 You found the secret cat! 🎉</div>
			<Nyan />
		</div>
	);
};

export default KonamiCode;
