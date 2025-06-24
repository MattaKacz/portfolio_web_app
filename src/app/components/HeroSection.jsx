'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

const HeroSection = () => {
	return (
		<section>
			<div className='flex flex-col lg:flex-row items-center'>
				<div className='flex-1 flex flex-col items-center lg:items-start'>
					<h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center lg:text-left'>
						<span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>
							Hello, I'm{' '}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								'Matty!',
								1000,
								'Python Developer',
								1000,
								'Software Tester',
								1000,
								'AI_Agent',
								1000,
							]}
							wrapper='span'
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-center lg:text-left'>
						Backend engineer specializing in Python, Django, and FastAPI. I build scalable systems and explore AI-powered tools to make them smarter - with a passion for clean code, automation, and robust testing.
					</p>
					<div className='flex flex-col sm:flex-row gap-4 mb-6 w-full sm:w-auto'>
						<Link
							href='#contact'
							className='w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white text-center'>
							Hire Me
						</Link>
						<a
							href='/Mateusz Kaczor - resume - 2025.pdf'
							download
							className='w-full sm:w-auto px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white'>
							<span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 text-center'>
								Download CV
							</span>
						</a>
					</div>
				</div>
				<div className='flex-1 flex justify-center mt-6 lg:mt-0'>
					<div className='rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] relative flex justify-center items-center'>
						<Image
							src='/images/hero-image.png'
							alt='hero image'
							width={500}
							height={600}
							className='object-contain w-full h-full'
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
