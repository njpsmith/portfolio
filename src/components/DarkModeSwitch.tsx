import { Sun, Moon } from 'lucide-react';

// Sound from https://uppbeat.io/

const DarkModeSwitch = () => {
	function playSound() {
		// Play music
		const audio = document.getElementById('darkModeSound');
		audio.currentTime = 0;
		audio.play().catch((err) => {
			console.warn('Audio play failed:', err);
		});
	}

	return (
		<div className="dark-mode mt-6">
			<audio id="darkModeSound" preload="none">
				<source src="/assets/music/mechanical_click.mp3" type="audio/mpeg" />
			</audio>
			<div className="dark-mode-switch-wrapper">
				<Sun />

				<div className="dark-mode-switch">
					<input id="switch" type="checkbox" />
					<label htmlFor="switch" id="toggle" onClick={() => playSound()}>
						Toggle
					</label>
				</div>

				<Moon />
			</div>
		</div>
	);
};

export default DarkModeSwitch;
