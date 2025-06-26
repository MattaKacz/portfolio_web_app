'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ project, onClose }) {
	return (
		<AnimatePresence>
			{project && (
				<motion.div className='fixed inset-0 z-40 bg-black/40 backdrop-blur-sm' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
					{/* Side panel glass */}
					<motion.div className='fixed right-0 top-0 h-full w-full sm:w-[480px] z-50 bg-white/10 backdrop-blur-2xl border-l border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.5)] p-6 overflow-y-auto text-white rounded-l-3xl' initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: 'easeInOut' }} onClick={(e) => e.stopPropagation()}>
						<button onClick={onClose} className='absolute top-4 right-4 text-white text-2xl hover:scale-110 transition-transform' aria-label='Close modal'>
							✕
						</button>
						<h2 className='text-3xl font-bold mb-4 mt-8'>{project.title}</h2>
						<p className='text-gray-200 text-base leading-relaxed'>{project.description}</p>
						{project.image && <img src={project.image} alt={project.title} className='mt-6 rounded-xl border border-white/10' />}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
