import React from 'react';

function ProjectTag({ name, onClick, isSelected }) {
	const buttonStyles = isSelected
		? 'text-white border-purple-500 bg-white/10'
		: 'text-[#ADB7BE] border-slate-600 hover:border-purple-500';

	return (
		<button
			className={`relative group ${buttonStyles} rounded-full border-2 px-6 py-2 text-xl cursor-pointer overflow-hidden`}
			onClick={() => onClick(name)}
		>
			{name}

			{/* Light sweep effect */}
			<span className="absolute inset-0 pointer-events-none overflow-hidden">
				<span className="absolute top-0 left-[-75%] h-full w-[150%] bg-gradient-to-r from-transparent via-purple-400/60 to-transparent blur-3xl opacity-0 group-hover:opacity-100 animate-sweep-slow rounded-full" />
			</span>
		</button>
	);
}

export default ProjectTag;