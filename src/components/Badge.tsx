const Badge = ({ text }) => {
	return (
		<li className="mr-1.5 mt-2">
			<div className="flex items-center px-3 py-1 rounded-full text-xs font-medium leading-5 text-teal-300 badge">
				{text}
			</div>
		</li>
	);
};

export default Badge;
