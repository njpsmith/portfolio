import { motion } from 'framer-motion';

type CardProps = {
	title: string;
	blurb: string;
};

const Card = ({ title, blurb }: CardProps) => {
	return (
		<motion.div
			whileHover={{
				scale: 1.015,
				boxShadow: '0px 8px 20px rgba(0,0,0,0.15)',
			}}
			// whileTap={{ scale: 0.97 }}
			transition={{ type: 'spring', stiffness: 300 }}
			className="card mb-12 bg-white rounded-2xl p-6 shadow-md"
		>
			<h3 className="text-xl font-semibold">
				<a
					href="https://pet.tescoinsurance.com/quote"
					target="_blank"
					rel="noopener noreferrer"
				>
					{title}
				</a>
			</h3>
			<p className="mt-2 text-gray-500 text-sm">{blurb}</p>

			<figure>
				<img
					alt="Build a Spotify Connected App Newline course marketing card"
					loading="lazy"
					width="200"
					height="48"
					decoding="async"
					data-nimg="1"
					className="aspect-video object-cover rounded border-2 border-slate-200/10  group-hover:border-slate-200/30 mt-3"
					src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=640&q=75"
				/>
			</figure>
		</motion.div>
	);
};

export default Card;
