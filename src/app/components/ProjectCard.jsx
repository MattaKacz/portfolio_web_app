import React from 'react';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({ imgUrl, title, description, gitUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='relative overflow-hidden cursor-pointer rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-[1.01] transition-transform duration-300 group'
    >
      {/* Light sweep */}
      <div className="absolute inset-0 z-10 pointer-events-none before:absolute before:-left-full before:top-0 before:h-full before:w-1/2 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:animate-shine" />

      {/* Background Image */}
      <div
        className='h-52 md:h-72 rounded-t-xl relative overflow-hidden'
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 hidden group-hover:flex group-hover:opacity-100 transition-all duration-500 rounded-t-xl'>
          <Link
            href={gitUrl}
            className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
            onClick={(e) => e.stopPropagation()}
          >
            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white' />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className='text-white bg-white/5 backdrop-blur-lg rounded-b-xl py-6 px-4 z-20 relative'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#ADB7BE]'>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;