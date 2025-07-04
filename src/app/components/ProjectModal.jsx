'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

export default function ProjectModal({ project, onClose }) {
	const getRepoName = (url) => {
		try {
			const parts = new URL(url).pathname.split('/');
			return `${parts[1]}/${parts[2]}`;
		} catch {
			return 'GitHub';
		}
	};

	return (
		<AnimatePresence>
			{project && (
				<motion.div
					className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={onClose}>
					<motion.div
						className='fixed right-0 top-0 h-full w-full sm:w-[480px] z-50 bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 overflow-y-auto text-white rounded-l-3xl'
						initial={{ x: '100%' }}
						animate={{ x: 0 }}
						exit={{ x: '100%' }}
						transition={{ duration: 0.4, ease: 'easeInOut' }}
						onClick={(e) => e.stopPropagation()}>
						{/* Zamknij */}
						<button
							onClick={onClose}
							className='absolute top-4 right-4 text-white text-2xl hover:scale-110 transition-transform'
							aria-label='Close modal'>
							✕
						</button>

						{/* Tytuł */}
						<h2 className='text-3xl font-bold mt-8 break-words'>
							{project.title}
						</h2>

						{/* GitHub link pod tytułem */}
						{project.gitUrl && (
							<a
								href={project.gitUrl}
								target='_blank'
								rel='noopener noreferrer'
								title='View on GitHub'
								className='mt-3 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white/80 bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/20 hover:text-white hover:animate-glow'>
								<FaGithub className='w-5 h-5' />
								<span className='truncate max-w-[220px] sm:max-w-none'>
									{getRepoName(project.gitUrl)}
								</span>
							</a>
						)}

						{/* Opis */}
						<p className='text-gray-200 text-base leading-relaxed mt-4'>
							{project.description}
						</p>

						{/* Obrazek */}
						{project.image && (
							<img
								src={project.image}
								alt={project.title}
								className='mt-6 rounded-xl border border-white/10'
							/>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
