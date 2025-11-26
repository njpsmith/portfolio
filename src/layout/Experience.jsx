import ExperienceCard from '../components/ExperienceCard';
import { SquareArrowOutUpRight } from 'lucide-react';

const Experience = () => {
	return (
		<section
			id="experience"
			className="experience mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-labelledby="experience-heading"
		>
			<div className="container">
				<h2
					id="experience-heading"
					className="text-xl font-bold mb-0 py-5 lg:pb-4 lg:pt-0 sticky top-0 z-20 lg:relative"
				>
					Experience
				</h2>
				<ExperienceCard
					title="Frontend Developer · Pinnacle Pet UK"
					subtitle="Feb 2021 – Present | London, UK"
					blurb={[
						'Built and maintained the Quote & Buy pet insurance journeys and customer portals for major UK brands including Sainsbury’s, Tesco, Argos, Post Office, and RSPCA.',
					]}
					badges={[
						'React',
						'TypeScript',
						'ES6',
						'Context',
						'Redux',
						'Playwright',
						'Cypress',
						'RESTful APIs',
						'Optimizely',
						'Figma',
						'Formik',
						'Yup',
						'SCSS',
					]}
				/>
				<ExperienceCard
					title="Web Developer · Ignite Hospitality"
					subtitle="Jul 2019 - Jan 2021 | London, UK"
					blurb={[
						'Developed WordPress websites in a fast-paced agency environment for several high-profile hospitality clients. Clients included D&D London, Drake & Morgan, Cinnamon Collection, Artist Residence, Pho, and Smith & Wollensky.',
					]}
					badges={['JavaScript', 'HTML', 'SCSS', 'WordPress', 'PHP', 'Sketch']}
				/>
				<ExperienceCard
					title="Frontend Developer · Cornerstone"
					subtitle="Dec 2018 - Jun 2019 | London, UK"
					blurb={[
						'Men’s grooming subscription startup. I built new features (e.g. the Gifts page) and components while adhering to the existing coding standards and guidelines.',
					]}
					badges={[
						'React',
						'Redux',
						'JavaScript',
						'ES6',
						'Cypress',
						'Jest',
						'SCSS',
					]}
				/>
				<ExperienceCard
					title="Web Developer · Ignite Hospitality"
					subtitle="Oct 2016 - Dec 2018 | London, UK"
					blurb={[
						'Developed WordPress websites in a fast-paced agency environment for several high-profile hospitality clients.',
					]}
					badges={[
						'JavaScript',
						'HTML',
						'SCSS',
						'WordPress',
						'PHP',
						'Photoshop',
					]}
				/>
				<ExperienceCard
					title="Frontend Web Developer · Hype!"
					subtitle="Apr 2014 - Aug 2016 | London, UK"
					blurb={[
						'Created and maintained WordPress websites for clients such as UCL Laws, UCL Engineering and European CanCer Organisation.',
					]}
					badges={[
						'JavaScript',
						'HTML',
						'SCSS',
						'WordPress',
						'PHP',
						'Photoshop',
					]}
				/>

				<p>
					<a
						className="external-link ml-4"
						href="https://www.dropbox.com/scl/fi/rn2yvslma5hwa15h0thpz/Nicholas_Smith_CV.pdf?rlkey=2gx8airlbl6omlqor88e9a5cd&e=1&st=mlxk2md1&dl=0"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="View full CV"
					>
						View full CV{' '}
						<SquareArrowOutUpRight className="inline-block h-4 w-4 shrink-0 ml-1" />
					</a>
				</p>
			</div>
		</section>
	);
};

export default Experience;
