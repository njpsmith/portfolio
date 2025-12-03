const About = () => {
	return (
		<section
			id="about"
			className="about mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="about-heading"
		>
			<div className="container">
				<h2
					id="about-heading"
					className="text-xl font-bold mb-0 py-5 lg:pb-4 lg:pt-0 sticky top-0 z-20 lg:relative"
				>
					About
				</h2>

				<p>
					Front-end developer with 10+ years’ experience building high-quality,
					user-focused web applications in fast-paced environments. Skilled in
					React, TypeScript, and modern front-end tooling, with strong attention
					to detail, excellent communication and ability to deliver projects
					under pressure.
				</p>
				<p>
					Adept at collaborating with cross-functional teams, mentoring junior
					developers, and driving technical excellence. Passionate about
					crafting intuitive, responsive interfaces and leveraging innovative
					technologies to solve real-world problems.
				</p>

				<p>
					In my spare time I can be found watching non-league football, mixing
					margaritas, planning trips to Japan, drinking coffee, and learning to
					speak Italian. London-based.
				</p>
				<p>
					Contact me:{' '}
					<a href="mailto:smith.nicholasjp@gmail.com">
						smith.nicholasjp@gmail.com
					</a>
				</p>

				<br />
				{/*<small>
					<p>Here's a haiku about coding:</p>

					<p>コードの花 画面に咲き出す 光の詩</p>

					<p>Kōdo no hana gamen ni saki dasu hikari no uta.</p>

					<p>
						Flowers of pure code, blossom across the bright screen, a poem of
						light.
					</p>
				</small>*/}
			</div>
		</section>
	);
};

export default About;
