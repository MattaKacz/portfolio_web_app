import React from 'react';

const ProjectCard = ({ imgUrl, title, description, onClick }) => {
	return (
		<div
			onClick={onClick}
			className='relative overflow-hidden cursor-pointer rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-[1.01] transition-transform duration-300 group'>
			{/* Light sweep */}
			<div className='absolute inset-0 z-10 pointer-events-none before:absolute before:-left-full before:top-0 before:h-full before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shine' />

			{/* Background Image */}
			<div
				className='h-52 md:h-72 rounded-t-xl relative overflow-hidden'
				style={{
					background: `url(${imgUrl})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			/>

			{/* Content */}
			<div className='text-white bg-white/5 backdrop-blur-lg rounded-b-xl py-6 px-4 z-20 relative'>
				<h5 className='text-xl font-semibold mb-2'>{title}</h5>
				<p className='text-[#ADB7BE]'>{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;
