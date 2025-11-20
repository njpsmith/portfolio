const Footer = () => {
	return (
		<footer className="site-footer" role="contentinfo">
			<div className="container">
				<p>
					Built with React.js, Vite, Tailwind CSS, Three.js. WCAG AA
					accessibility compliant. All text is set in the Inter typeface.
				</p>
				<p>
					© <time>{new Date().getFullYear()}</time>
					{/*Your Name — Built with care.*/}
				</p>
				{/*<nav className="footer-nav" aria-label="Footer">
					<ul>
						<li>
							<a href="https://github.com/njpsmith">
								<Github />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/nicholas-smith-97a90829/">
								<Linkedin />
							</a>
						</li>
					</ul>
				</nav>*/}
			</div>
		</footer>
	);
};

export default Footer;
