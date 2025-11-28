import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeSwitch = () => {
	const [isNight, toggleNight] = useState(false);

	const handleClick = () => {
		// Save in localStorage
		localStorage.setItem('darkMode', !isNight);

		toggleNight(!isNight);
		playSound();
	};

	const playSound = () => {
		// Play music. Sound from https://uppbeat.io/
		const audio = document.getElementById('darkModeSound');
		audio.currentTime = 0;
		audio.play().catch((err) => {
			console.warn('Audio play failed:', err);
		});
	};

	useEffect(() => {
		if (isNight) {
			document.body.classList.add('night');
		} else {
			document.body.classList.remove('night');
		}
	}, [isNight]);

	useEffect(() => {
		const stored = localStorage.getItem('darkMode');
		const isDark = stored === 'true';

		const setToDarkMode = isDark;

		if (setToDarkMode) {
			document.body.classList.add('night');
			toggleNight(true);
		}
	}, []);

	return (
		<div className="dark-mode mt-6">
			<audio id="darkModeSound">
				<source src="/assets/music/mechanical_click.mp3" type="audio/mpeg" />
			</audio>
			<div className="dark-mode-switch-wrapper">
				<Sun />

				<div className="dark-mode-switch">
					<input id="switch" type="checkbox" />
					<label htmlFor="switch" id="toggle" onClick={() => handleClick()}>
						Toggle
					</label>
				</div>

				<Moon />
			</div>
		</div>
	);
};

export default DarkModeSwitch;
