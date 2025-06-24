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
				<li>Python, Django, FastAPI</li>
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
		<section className='text-white'>
			<div className='gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 xl:px-16 '>
				<Image
					src='/images/image_about.png'
					alt='About'
					width={500}
					height={500}
					quality={100}
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
					<h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
					<p className='text-base md:text-lg'>
						I'm a backend developer with a focus on Python, Django, and FastAPI.
						I build scalable APIs, automate testing, and explore AI-powered
						solutions. Based in Australia, I enjoy turning complex ideas into
						clean, functional code.
					</p>
					<div className='flex flex-row justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							{' '}
							Skills{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							{' '}
							Education{' '}
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certifications')}
							active={tab === 'certifications'}>
							{' '}
							Certifications{' '}
						</TabButton>
					</div>
					<div className='mt-8'>
						{TAB_DATA.find((t) => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
