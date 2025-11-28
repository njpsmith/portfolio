const Footer = () => {
	return (
		<footer className="site-footer" role="contentinfo">
			<div className="container">
				<p>
					Built with React.js, Vite, Tailwind CSS
					{/*WCAG AA
					accessibility compliant. */}
					All text is set in the Inter typeface. The code for this site can be
					found{' '}
					<a
						href="https://github.com/njpsmith/portfolio"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
					.
				</p>
				<p>
					For a secret, <strong>enter the Konami Code</strong> (on desktop), or{' '}
					<strong>quickly tap the screen five times</strong> (on mobile).
				</p>
				<p className="text-center lg:text-left">
					© <time>{new Date().getFullYear()}</time>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
