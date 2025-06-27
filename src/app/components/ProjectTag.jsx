import React from 'react';

function ProjectTag({ name, onClick, isSelected }) {
	const baseStyles =
		'relative overflow-hidden project-glass-real rounded-full px-7 py-2 text-lg font-semibold transition-all duration-300 text-white border backdrop-blur-md bg-white/10';
	const activeStyles = 'border-white/60 shadow-md';
	const inactiveStyles = 'border-white/30 hover:border-white/50';

	return (
		<button
			className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles} flex items-center justify-center text-center whitespace-nowrap min-w-[80px]`}
			aria-pressed={isSelected}
			onClick={() => onClick(name)}
		>
			<span className='relative z-10'>{name}</span>
			<span className='absolute inset-0 animate-sweep-glass pointer-events-none z-0 before:absolute before:inset-0 before:rounded-full before:bg-white/30 before:blur-md before:opacity-1' />
		</button>
	);
}

export default ProjectTag;