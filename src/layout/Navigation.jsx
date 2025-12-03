import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import DarkModeSwitch from '../components/DarkModeSwitch';

const Navigation = () => {
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
		>
			<nav
				className="nav hidden lg:block"
				aria-label="Site navigation"
				role="navigation"
			>
				<ul className="mt-16">
					{sectionIds.map((id) => (
						<li
							key={id}
							{...(activeSection === id && { 'aria-current': 'page' })}
						>
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
								<span className="nav-indicator mr-4 h-px w-8 bg-slate-300 hover:bg-gray-500 transition-all group-hover:w-16 group-focus-visible:w-16 motion-reduce:transition-none"></span>
								<span className="nav-text text-xs font-bold uppercase tracking-widest">
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
							aria-label="My GitHub profile"
						>
							<motion.div
								tabIndex={-1}
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
							aria-label="My LinkedIn profile"
						>
							<motion.div
								tabIndex={-1}
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

			<DarkModeSwitch />
		</motion.div>
	);
};

export default Navigation;
