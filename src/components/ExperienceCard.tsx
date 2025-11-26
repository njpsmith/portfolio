import Badge from '../components/Badge';

type CardProps = {
	title: string;
	subtitle: string;
	blurb: string[];
	badges: string[];
};

const ExperienceCard = ({ title, subtitle, blurb, badges }: CardProps) => {
	return (
		<div className="card mb-12">
			<h3>{title}</h3>
			<h4 className="mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
				{subtitle}
			</h4>

			{blurb.map((b, index) => (
				<p key={index} className="mt-2 text-gray-500 text-sm">
					{b}
				</p>
			))}

			<ul
				className="-mt-2 lg:mt-2 flex flex-wrap badges"
				aria-label="Technologies used:"
			>
				{badges.map((badge, index) => {
					return <Badge text={badge} key={index} />;
				})}
			</ul>
		</div>
	);
};

export default ExperienceCard;
