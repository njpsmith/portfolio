const About = () => {
	return (
		<section
			id="about"
			className="about mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="about-heading"
		>
			<div className="container">
				{/*<h2 id="about-heading" className="text-xl uppercase tracking-widest font-bold">*/}
				<h2
					id="about-heading"
					className="text-xl font-bold py-5 lg:p-0 sticky top-0 z-20 lg:relative mb-4"
				>
					About
				</h2>

				{/*<p>Short professional summary, skills and technologies.</p>*/}

				{/*				<p className="lead">
					I build accessible, performant front-end experiences using React,
					TypeScript and modern tooling.
				</p>
			*/}
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

				{/*<p>
				London-based, coffee drinker, learning to speak Italian.</p>*/}
				{/*watching non-league football, */}
				<p>
					In my spare time I can be found mixing margaritas, planning trips to
					Japan, drinking coffee, and learning to speak Italian.
				</p>
				<small>
					<p>
						{/*<a href="/haiku">Here's a haiku I wrote about coding</a>.*/}
						{/*<strong>Here's a haiku I wrote about coding:</strong>*/}
						<br />
						{/*Here's a haiku I wrote about coding:*/}
						Here's a haiku about coding:
					</p>

					<p>コードの花 画面に咲き出す 光の詩</p>

					<p>Kōdo no hana gamen ni saki dasu hikari no uta.</p>

					<p>
						Flowers of pure code, blossom across the bright screen, a poem of
						light.
					</p>
				</small>

				{/*<p>
					<a className="btn-primary" href="#contact">
						Hire me
					</a>
					<a className="btn-ghost" href="#projects">
						See my work
					</a>
				</p>*/}
			</div>
		</section>
	);
};

export default About;
