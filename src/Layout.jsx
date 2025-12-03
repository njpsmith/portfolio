import { motion } from 'framer-motion';
import Header from './layout/Header';
import Footer from './layout/Footer';
import About from './layout/About';
import Projects from './layout/Projects';
import Experience from './layout/Experience';
import Contact from './layout/Contact';

const Layout = () => {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
			<div className="lg:flex lg:justify-between lg:gap-4">
				<Header />

				<div className="layout pt-24 lg:w-[50%] lg:py-24">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
					>
						<main
							id="main"
							className="main mb-16 md:mb-24 lg:mb-36"
							role="main"
						>
							<About />

							<Experience />
							<Projects />

							<Contact />
						</main>

						<Footer />
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Layout;
