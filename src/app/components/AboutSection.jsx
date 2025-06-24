'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>Snake, Python, Django, FastAPI</li>
				<li>PostgreSQL, MySQL</li>
				<li>GitHub Actions, Pytest</li>
				<li>Docker, Nginx, Gunicorn</li>
				<li>LLMs, LangChain, Vector Databases</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>Bachelor of Computer Science, University of Technology Sydney</li>
				<li>Master of Software Engineering, University of Melbourne</li>
			</ul>
		),
	},
	{
		title: 'Certifications',
		id: 'certifications',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>Certified Python Developer</li>
				<li>FastAPI Mastery Certification</li>
				<li>Docker Certified Associate</li>
			</ul>
		),
	},
];
const AboutSection = () => {
	const [tab, setTab] = useState('skills');
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section id='about' className='text-white'>
			<div className='gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 xl:px-16 '>
				<Image src='/images/image_about.png' alt="Hello I'm Matt" width={500} height={500} quality={100} className='rounded-2xl shadow-lg shadow-purple-700/30 border border-purple-900/50 transition duration-300 hover:scale-105' />
				<div className='mmt-4 md:mt-0 text-left flex flex-col h-full bg-[#1A1A1A]/60 p-6 md:p-8 rounded-xl shadow-lg shadow-purple-900/20 backdrop-blur-md max-w-prose text-gray-300'>
					<h2 className='text-3xl font-bold mb-6 text-white'>About Me</h2>

					<p className='text-sm md:text-base leading-relaxed mb-4'>I’m a backend developer specializing in Python, Django, and FastAPI, with a strong focus on building scalable APIs, test automation, and AI-enhanced solutions. Currently based in Australia on a post-study visa, I’m open to full-time opportunities and sponsorship.</p>

					<p className='text-sm md:text-base leading-relaxed mb-6'>I thrive on turning complex challenges into elegant code, and I bring a proactive, solution-oriented mindset to every project. Beyond coding, I enjoy working on real-world applications that make a tangible impact.</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
							{' '}
							Certifications{' '}
						</TabButton>
					</div>
					<div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
