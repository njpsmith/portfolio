import ProjectCard from '../components/ProjectCard';

const Projects = () => {
	return (
		<section
			id="projects"
			className="projects mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="projects-heading"
		>
			<div className="container">
				<h2
					id="projects-heading"
					className="text-xl font-bold mb-0 py-5 lg:pb-4 lg:pt-0 sticky top-0 z-20 lg:relative"
				>
					Selected Projects
				</h2>

				<div className="project-list" role="list">
					<ProjectCard
						title="Tesco Pet Insurance - Quote & Buy journey"
						link="https://pet.tescoinsurance.com/quote"
						imageSrc="/images/tesco-qbe.png"
						imageAlt="Built a Quote & Buy pet insurance journey for Tesco"
						blurb={[
							'Transformed a single-brand application into a scalable multi-brand platform, implementing SCSS brand variables and feature flags to support custom styling and functionality per brand. This accelerated delivery across 3+ major insurance brands.',
							'Spearheaded the adoption of Playwright and built an automated testing suite. Migrated global state management from a deprecated library to Context/Redux, ensuring a more scalable and reliable architecture.',
						]}
						badges={[
							'React',
							'TypeScript',
							'ES6',
							'Context',
							'Playwright',
							'RESTful APIs',
						]}
					/>
					<ProjectCard
						title="Tesco Pet Insurance - Customer Portal"
						link="https://petportal.tescoinsurance.com/register#login"
						imageSrc="/images/tesco-portal.jpg"
						imageAlt="Built a pet insurance Customer Portal for Tesco"
						blurb={[
							'Built the pet insurance customer portal for Tesco, which allows customers to make and track insurance claims, view and edit their details, view insurance documents and get 24 hour access to a vet team.',
							'Migrated state management to Redux',
						]}
						badges={['React', 'TypeScript', 'ES6', 'Redux', 'RESTful APIs']}
					/>
					<ProjectCard
						title="Sainsbury's Pet Insurance - Quote & Buy journey"
						link="https://petinsurance.sainsburysbank.co.uk/quote"
						imageSrc="/images/sainsburys-qbe.png"
						imageAlt="Built a pet insurance Quote & Buy journey for Sainsbury's"
						blurb={[
							"Developed and maintained the Quote & Buy pet insurance journey for Sainsbury's. Built A/B tests with Optimizely to support marketing and product teams in conversion optimisation.",
						]}
						badges={['React', 'ES6', 'RESTful APIs', 'Webpack']}
					/>
					<ProjectCard
						title="Doodle Jump game clone"
						link="https://github.com/njpsmith/doodle-jump/tree/main/doodle-jump"
						imageSrc="/images/doodle-jump.jpg"
						imageAlt="Doodle Jump game clone"
						blurb={[
							'A re-creation of the popular mobile platforming game Doodle Jump. Achieve a high score by climbing as high as possible. Falling to the bottom of the screen ends the game. Platforms, enemies and power-ups are randomly generated.',
						]}
						badges={['React', 'ES6']}
					/>
				</div>
			</div>
		</section>
	);
};

export default Projects;
