'use client';
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import ProjectModal from './ProjectModal';

const projectsData = [
	{
		id: 1,
		title: 'Project One',
		description: 'Description of project one.',
		image: '/images/projects/project1.png',
		tag: ['All', 'Python', 'Django'],
		gitUrl: '/',
	},
	{
		id: 2,
		title: 'Project Two',
		description: 'Description of project two.',
		image: '/images/projects/project2.png',
		tag: ['All', 'Python', 'Django'],
		gitUrl: '/',
	},
	{
		id: 3,
		title: 'Project Three',
		description: 'Description of project three.',
		image: '/images/projects/project3.png',
		tag: ['All', 'Web', 'React', 'Next.js'],
		gitUrl: 'https://github.com/MattaKacz/portfolio_web_app',
	},
	{
		id: 4,
		title: 'Project Three',
		description: 'Description of project three.',
		image: '/images/projects/project3.png',
		tag: ['All', 'Web', 'Django'],
		gitUrl: '/',
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState('All');
	const [selectedProject, setSelectedProject] = useState(null);

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	return (
		<section id='projects' className='my-12'>
			<div className='bg-[#1A1A1A]/60 rounded-2xl p-6 shadow-lg shadow-purple-900/20'>
				<h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
					My Projects
				</h2>
				<div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
					<ProjectTag
						onClick={handleTagChange}
						name='All'
						isSelected={tag === 'All'}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name='Python'
						isSelected={tag === 'Python'}
					/>
					<ProjectTag
						onClick={handleTagChange}
						name='Web'
						isSelected={tag === 'Web'}
					/>
				</div>
				<div className='grid md:grid-cols-3 gap-8 md:gap-12'>
					{filteredProjects.map((project) => (
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							onClick={() => setSelectedProject(project)}
						/>
					))}
				</div>
			</div>
			<ProjectModal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
		</section>
	);
};

export default ProjectsSection;
