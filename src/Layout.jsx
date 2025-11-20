import Footer from './layout/Footer';

import Header from './layout/Header';
import About from './layout/About';
import Projects from './layout/Projects';
import Contact from './layout/Contact';

const Layout = () => {
	return (
		<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
			<div className="lg:flex lg:justify-between lg:gap-4">
				<Header />

				<div className="layout pt-24 lg:w-[50%] lg:py-24">
					<main
						id="main"
						className="main mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
						role="main"
					>
						<About />

						<Projects />

						<Contact />
					</main>

					<Footer />
				</div>
			</div>
		</div>
	);
};

export default Layout;
