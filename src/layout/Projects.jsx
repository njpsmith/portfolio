import Card from '../components/Card';

const Projects = () => {
	return (
		<section
			id="projects"
			className="projects mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="projects-heading"
		>
			<div className="container">
				<h2 id="projects-heading">Selected Projects</h2>

				<ul className="project-list" role="list">
					<li className="project-item">
						<Card
							title="Tesco Pet Insurance - Quote & Buy journey"
							// 			blurb="Video course that teaches how to build a web app with the Spotify Web
							// API. Topics covered include the principles of REST APIs, user auth
							// flows, Node, Express, React, Styled Components, and more."
							blurb="Built using with React, TypeScript, ES6, Context API, Playwright, and RESTful APIs."
						/>
						<article className="project mb-16" aria-labelledby="proj-1-title">
							<a href="project-1/index.html" className="project-link">
								<h3 id="proj-1-title">Project Two</h3>
								<p className="project-summary">
									Short summary — problem solved, tech used, outcome.
								</p>
								<p className="project-meta">React · TypeScript · Vite</p>
							</a>
							<div className="project-actions">
								<a
									href="https://github.com/you/project-1"
									aria-label="Project One — source code"
									target="_blank"
									rel="noopener noreferrer"
								>
									Source
								</a>
								<a
									href="https://project-1.live"
									aria-label="Project One — live demo"
									target="_blank"
									rel="noopener noreferrer"
								>
									Live
								</a>
							</div>
						</article>

						<article className="project mb-16" aria-labelledby="proj-1-title">
							<a href="project-1/index.html" className="project-link">
								<h3 id="proj-1-title">Project Three</h3>
								<p className="project-summary">
									Short summary — problem solved, tech used, outcome. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit. Proin
									imperdiet libero a libero maximus iaculis. Ut porttitor,
									tellus eu aliquam tristique, lectus lorem molestie libero, ac
									laoreet libero lectus sed magna. Maecenas nec ipsum nunc.
									Vivamus egestas leo cursus, volutpat turpis ut, hendrerit
									quam.
								</p>
								<p className="project-meta">React · TypeScript · Vite</p>
							</a>
							<div className="project-actions">
								<a
									href="https://project-1.live"
									aria-label="Project One — live demo"
									target="_blank"
									rel="noopener noreferrer"
								>
									Live
								</a>
							</div>
						</article>
						{/*
						<article className="project mb-16" aria-labelledby="proj-1-title">
							<a href="project-1/index.html" className="project-link">
								<h3 id="proj-1-title">Project One</h3>
								<p className="project-summary">
									Short summary — problem solved, tech used, outcome. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit. Proin
									imperdiet libero a libero maximus iaculis. Ut porttitor,
									tellus eu aliquam tristique, lectus lorem molestie libero, ac
									laoreet libero lectus sed magna. Maecenas nec ipsum nunc.
									Vivamus egestas leo cursus, volutpat turpis ut, hendrerit
									quam.
								</p>
								<p className="project-meta">React · TypeScript · Vite</p>
							</a>
							<div className="project-actions">
								<a
									href="https://project-1.live"
									aria-label="Project One — live demo"
									target="_blank"
									rel="noopener noreferrer"
								>
									Live
								</a>
							</div>
						</article>

						<article className="project mb-16" aria-labelledby="proj-1-title">
							<a href="project-1/index.html" className="project-link">
								<h3 id="proj-1-title">Project One</h3>
								<p className="project-summary">
									Short summary — problem solved, tech used, outcome. Lorem
									ipsum dolor sit amet, consectetur adipiscing elit. Proin
									imperdiet libero a libero maximus iaculis. Ut porttitor,
									tellus eu aliquam tristique, lectus lorem molestie libero, ac
									laoreet libero lectus sed magna. Maecenas nec ipsum nunc.
									Vivamus egestas leo cursus, volutpat turpis ut, hendrerit
									quam.
								</p>
								<p className="project-meta">React · TypeScript · Vite</p>
							</a>
							<div className="project-actions">
								<a
									href="https://project-1.live"
									aria-label="Project One — live demo"
									target="_blank"
									rel="noopener noreferrer"
								>
									Live
								</a>
							</div>
						</article>*/}
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Projects;
