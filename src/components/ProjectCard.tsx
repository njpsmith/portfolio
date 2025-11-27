import { useState } from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/Badge';

type CardProps = {
	title: string;
	blurb: string[];
	link: string;
	imageSrc: string;
	imageAlt: string;
	badges: string[];
};

const ProjectCard = ({
	title,
	blurb,
	link,
	imageSrc,
	imageAlt,
	badges,
}: CardProps) => {
	return (
		<motion.div
			initial={{
				// boxShadow: '0px 0px 0px rgba(0,0,0,0)',
				boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
				scale: 1,
			}}
			whileHover={{
				// scale: 1.015,
				scale: 1.01,
				boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
				// boxShadow: '0px 8px 20px rgba(0,0,0,1)',
			}}
			transition={{
				duration: 0.2,
				ease: 'easeOut',
			}}
			whileTap={{
				scale: 0.97,
				// scale: 1,
			}}
			// transition={{ type: 'spring', stiffness: 300 }}
			className="project-card mb-12 bg-white rounded-2xl p-6 shadow-md relative"
		>
			<a href={link} target="_blank" rel="noopener noreferrer">
				<h3 className="text-xl font-semibold">{title}</h3>
				{blurb.map((b, index) => (
					<p key={index} className="mt-2 text-gray-500 text-sm">
						{b}
					</p>
				))}

				<figure>
					<img
						alt={imageAlt}
						loading="lazy"
						// width="200"
						width="400"
						// height="48"
						className="aspect-video object-cover object-top rounded border-2 border-slate-200/10  group-hover:border-slate-200/30 mt-3"
						src={imageSrc}
					/>
				</figure>

				<ul
					className="mt-2 flex flex-wrap badges"
					aria-label="Technologies used:"
				>
					{badges.map((badge, index) => {
						return <Badge text={badge} key={index} />;
					})}
				</ul>
			</a>
		</motion.div>
	);
};

export default ProjectCard;
