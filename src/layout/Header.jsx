import { Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
	return (
		<header
			className="site-header lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24"
			role="banner"
		>
			<div className="container">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<a href="#home" aria-label="Home — Nicholas Smith">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Nicholas Smith
						</h1>
					</a>
					<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
						Front End Developer
					</h2>
					<p className="mt-4 max-w-xs leading-normal">
						I build modern, scalable front-end applications for the web.
					</p>
				</motion.div>

				{/*<nav className="primary-nav" role="navigation" aria-label="Primary">
							<ul>
								<li>
									<a href="#projects">Projects</a>
								</li>
								<li>
									<a href="#about">About</a>
								</li>
								<li>
									<a href="#contact">Contact</a>
								</li>
							</ul>
						</nav>*/}

				<nav className="nav hidden lg:block" aria-label="Site navigation">
					{/*<nav className="nav lg:block" aria-label="Site navigation">*/}
					{/*<ul className="mt-16 w-max">*/}
					<ul className="mt-16">
						<li>
							<a className="group flex items-center py-3 active" href="#about">
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest">
									About
								</span>
							</a>
						</li>
						<li>
							<a className="group flex items-center py-3" href="#experience">
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest">
									Experience
								</span>
							</a>
						</li>
						<li>
							<a className="group flex items-center py-3" href="#projects">
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest">
									Projects
								</span>
							</a>
						</li>

						<li>
							<a className="group flex items-center py-3" href="#contact">
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest">
									Contact
								</span>
							</a>
						</li>
					</ul>
				</nav>

				<nav className="social-links" aria-label="Social">
					<ul className="ml-1 mt-8 flex items-center">
						<li className="mr-5 shrink-0 text-xs">
							<a
								className="text-slate-200"
								href="https://github.com/njpsmith"
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 300 }}
								>
									<Github />
								</motion.div>
							</a>
						</li>
						<li className="mr-5 shrink-0 text-xs">
							<a
								className="text-slate-200"
								href="https://www.linkedin.com/in/nicholas-smith-97a90829/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<motion.div
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									transition={{ type: 'spring', stiffness: 300 }}
								>
									<Linkedin />
								</motion.div>
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;
