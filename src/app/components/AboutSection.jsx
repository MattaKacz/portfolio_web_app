'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, AnimatePresence } from 'framer-motion';

const TAB_DATA = [
	{
		title: 'Skills',
		id: 'skills',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>
					<strong>Backend:</strong> Python (3.x), Django, FastAPI, REST APIs
				</li>
				<li>
					<strong>Frontend & Scripting:</strong> HTML/CSS, Bash, Shell scripting
				</li>
				<li>
					<strong>Test Automation:</strong> Pytest, Playwright, Selenium,
					Unittest, TDD
				</li>
				<li>
					<strong>DevOps & CI/CD:</strong> GitHub Actions, Jenkins, Docker, Git
				</li>
				<li>
					<strong>Databases & Data:</strong> MySQL, MongoDB, SQLite, Pandas,
					NumPy
				</li>
				<li>
					<strong>Cloud & Infrastructure:</strong> AWS (EC2, S3), Linux (Ubuntu,
					Debian), Nginx
				</li>
				<li>
					<strong>AI & LLMs:</strong> GPT-4, OpenAI API, LangChain, Vector DBs
					(Pinecone, FAISS)
				</li>
				<li>
					<strong>Workflow:</strong> Agile/Scrum, JIRA, Peer Reviews, Mentoring
				</li>
			</ul>
		),
	},
	{
		title: 'Education',
		id: 'education',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>
					BSc in Electronics, Wrocław University of Science and Technology,
					Poland (2018)
				</li>
				<li>
					Engineering Thesis: "Development of an Independent Microenvironment
					System" (2018)
				</li>
				<li>AI_DEVS – Advanced Practical AI for Developers (2025)</li>
			</ul>
		),
	},
	{
		title: 'Certifications',
		id: 'certifications',
		content: (
			<ul className='list-disc pl-5 space-y-2'>
				<li>ISTQB Certified Tester Foundation Level</li>
				<li>AI_DEVS Advanced AI Agent Certificate (2025)</li>
				<li>Certified Python Developer</li>
				<li>Python for Data Analysis Certificate</li>
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
			<div className='container mx-auto gap-8 items-start py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 xl:px-16 '>
				<Image
					src='/images/image_about.png'
					alt="Hello I'm Matt"
					width={500}
					height={500}
					quality={100}
					className='rounded-2xl shadow-lg shadow-purple-700/30 border border-purple-900/50 transition duration-300 hover:scale-105'
				/>
				<div className='mt-4 md:mt-0 text-left flex flex-col h-full bg-[#1A1A1A]/60 p-6 md:p-8 rounded-xl shadow-lg shadow-purple-900/20 backdrop-blur-md text-gray-300'>
					<h2 className='text-3xl font-bold mb-6 text-white'>About Me</h2>

					<p className='text-sm md:text-base leading-relaxed mb-4'>
						I'm a backend developer specializing in Python, Django, and FastAPI,
						with a strong focus on building scalable APIs, test automation, and
						AI-enhanced solutions. Currently based in Australia on a post-study
						visa, I'm open to full-time opportunities and sponsorship.
					</p>

					<p className='text-sm md:text-base leading-relaxed mb-6'>
						I thrive on turning complex challenges into elegant code, and I
						bring a proactive, solution-oriented mindset to every project.
						Beyond coding, I enjoy working on real-world applications that make
						a tangible impact.
					</p>

					<div className='flex flex-wrap gap-2 justify-start mt-8'>
						<TabButton
							selectTab={() => handleTabChange('skills')}
							active={tab === 'skills'}>
							<span className='text-sm sm:text-base'>Skills</span>
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('education')}
							active={tab === 'education'}>
							<span className='text-sm sm:text-base'>Education</span>
						</TabButton>
						<TabButton
							selectTab={() => handleTabChange('certifications')}
							active={tab === 'certifications'}>
							<span className='text-sm sm:text-base'>Certifications</span>
						</TabButton>
					</div>

					<div className='mt-8 min-h-[150px] md:min-h-[180px] transition-all duration-500'>
						<AnimatePresence mode='wait'>
							<motion.div
								key={tab}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.4, ease: 'easeOut' }}>
								{TAB_DATA.find((t) => t.id === tab).content}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
