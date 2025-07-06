'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';
import { XMarkIcon } from '@heroicons/react/24/solid';

const backdropVariants = {
	hidden: { opacity: 0 },
	visible: { opacity: 0.5 },
	exit: { opacity: 0 },
};

const sidebarVariants = {
	hidden: { x: '100%' },
	visible: { x: 0 },
	exit: { x: '100%' },
};

const MenuOverlay = ({ links, isOpen, onClose }) => {
	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Tło */}
					<motion.div
						className='fixed inset-0 bg-black z-40'
						variants={backdropVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						onClick={onClose}
					/>

					{/* Sidebar */}
					<motion.div
						className='fixed top-0 right-0 h-full w-64 bg-[#121212] text-white z-50 p-6'
						variants={sidebarVariants}
						initial='hidden'
						animate='visible'
						exit='exit'
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
						<button
							onClick={onClose}
							className='absolute top-4 right-4 text-slate-200 hover:text-white'>
							<XMarkIcon className='h-6 w-6' />
						</button>
						<ul className='flex flex-col space-y-6 mt-10'>
							{links.map((link, index) => (
								<li key={index}>
									<NavLink href={link.path} title={link.title} />
								</li>
							))}
						</ul>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
};

export default MenuOverlay;
