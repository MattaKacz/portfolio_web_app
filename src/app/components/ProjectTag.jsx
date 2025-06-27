import React from 'react';

function ProjectTag({ name, onClick, isSelected }) {
	const baseStyles =
		'relative overflow-hidden flex items-center justify-center whitespace-nowrap text-center min-w-[90px] px-6 py-2 rounded-xl text-sm sm:text-base font-semibold backdrop-blur-md transition-all duration-300';

	const activeStyles =
		'bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-purple-700/10 border border-white/30 shadow-md scale-[1.03]';

	const inactiveStyles =
		'bg-white/10 border border-white/20 hover:border-white/40 hover:scale-105';

	return (
		<button
			className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles}`}
			aria-pressed={isSelected}
			onClick={() => onClick(name)}
		>
			{/* Tekst */}
			<span className="relative z-10">{name}</span>

			{/* Warstwa shimmer */}
			<span className="absolute inset-0 z-0 pointer-events-none">
				<span className="absolute left-[-75%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
			</span>

			{/* Obrys dla pełnego efektu szkła */}
			<span className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
		</button>
	);
}

export default ProjectTag;
