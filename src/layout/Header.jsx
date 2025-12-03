import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import Navigation from './Navigation';

const Header = () => {
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
						aria-hidden="true"
					>
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
							Nicholas Smith
						</h1>
					</motion.div>

					<h1 className="sr-only">Nicholas Smith</h1>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
						aria-hidden="true"
					>
						<h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">
							Front End Developer
						</h2>
						<p className="mt-4 max-w-xs leading-normal">
							I build modern, scalable front-end applications for the web.
						</p>
					</motion.div>

					<h2 className="sr-only">Front End Developer</h2>
					<p className="sr-only">
						I build modern, scalable front-end applications for the web.
					</p>
				</div>

				<Navigation />
			</div>
		</header>
	);
};

export default Header;
