import React, { useState, useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { motion, animate } from 'framer-motion';

const Header = () => {
	const [activeSection, setActiveSection] = useState('about');
	const [ignoreScrollSpy, setIgnoreScrollSpy] = useState(false);

	const sectionIds = ['about', 'experience', 'projects', 'contact'];

	useEffect(() => {
		// const observers: IntersectionObserver[] = [];
		const observers = [];

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				(entries) => {
					if (ignoreScrollSpy) return; // ignore while programmatic click is happening
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							setActiveSection(id);
						}
					});
				},
				{ threshold: 0.6 }, // 60% visible = considered "active"
			);

			observer.observe(el);
			observers.push(observer);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, [ignoreScrollSpy]);

	return (
		<header
			className="site-header lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[50%] lg:flex-col lg:justify-between lg:py-24"
			role="banner"
		>
			<div className="container">
				<div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
					>
						{/*<a href="#home" aria-label="Home — Nicholas Smith">*/}
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Nicholas Smith
						</h1>
						{/*</a>*/}
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
					>
						<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
							Front End Developer
						</h2>
						<p className="mt-4 max-w-xs leading-normal">
							I build modern, scalable front-end applications for the web.
						</p>
					</motion.div>
				</div>

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

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
				>
					<nav className="nav hidden lg:block" aria-label="Site navigation">
						{/*<nav className="nav lg:block" aria-label="Site navigation">*/}
						{/*<ul className="mt-16 w-max">*/}
						<ul className="mt-16">
							{sectionIds.map((id) => (
								<li key={id}>
									<button
										className={`group flex items-center py-3 ${activeSection === id ? 'active' : ''}`}
										onClick={() => {
											setActiveSection(id); // Active on click also
											setIgnoreScrollSpy(true);

											const target = document.getElementById(id);
											if (!target) return;

											const targetY =
												target.getBoundingClientRect().top + window.scrollY;

											animate(window.scrollY, targetY, {
												duration: 0.8,
												ease: 'easeInOut',
												onUpdate: (latest) => window.scrollTo(0, latest),
												onComplete: () => setIgnoreScrollSpy(false), // scroll finished!
											});
										}}
									>
										<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 hover:bg-gray-500 transition-all group-hover:w-16  group-focus-visible:w-16 motion-reduce:transition-none"></span>
										<span className="nav-text text-xs font-bold uppercase tracking-widest opacity-60 hover:opacity-100">
											{id.charAt(0).toUpperCase() + id.slice(1)}
										</span>
									</button>
								</li>
							))}
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
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
