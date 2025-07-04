import React from 'react';

function ProjectTag({ name, onClick, isSelected }) {
	const baseStyles =
		'relative overflow-hidden flex items-center justify-center whitespace-nowrap text-center min-w-fit px-4 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base font-semibold backdrop-blur-md transition-all duration-300 ease-in-out rounded-full border-2';

	const activeStyles =
		'bg-gradient-to-br from-purple-500/30 via-fuchsia-500/20 to-purple-700/30 border-purple-500/60 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]';

	const inactiveStyles =
		'bg-white/5 hover:bg-white/10 text-white/80 border-white/10 hover:border-white/30';

	return (
		<button
			className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles}`}
			aria-pressed={isSelected}
			onClick={() => onClick(name)}>
			{/* Tekst */}
			<span className='relative z-10 font-satoshi'>{name}</span>

			{/* Shimmer tylko dla aktywnego */}
			{isSelected && (
				<span className='absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full'>
					<span className='absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent blur-sm animate-glass-shimmer' />
				</span>
			)}

			{/* Miękki fioletowy glow dla aktywnego */}
			{isSelected && (
				<span className='absolute inset-0 rounded-full ring-2 ring-purple-400/40 pointer-events-none' />
			)}

			{/* Stały ring dla wszystkich */}
			<span className='absolute inset-0 rounded-full ring-1 ring-white/5 pointer-events-none' />
		</button>
	);
}

export default ProjectTag;
