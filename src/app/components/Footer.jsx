import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
			<div className='container p-12 flex justify-between'>
				<Link href={'/'} className='text-lg md:text-5xl text-white font-semibold'>
					<Image src='/images/image_logo.png' alt='logo' width={150} height={150} className='object-contain' />
				</Link>
				<p className='text-slate-400'>All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
