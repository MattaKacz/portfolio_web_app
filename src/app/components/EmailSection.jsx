'use client';
import React, { useState } from 'react';
import GithubIcon from '../../../public/github_alt_icon.svg';
import LinkedinIcon from '../../../public/linkedin_alt_icon.svg';
import Link from 'next/link';
import Image from 'next/image';
// import AnimatedGif from './AnimatedGif';

const EmailSection = () => {
	const [emailSubmitted, setEmailSubmitted] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		};
		const JSONdata = JSON.stringify(data);
		const endpoint = '/api/send';

		// Form the request for sending data to the server.
		const options = {
			// The method is POST because we are sending data.
			method: 'POST',
			// Tell the server we're sending JSON.
			headers: {
				'Content-Type': 'application/json',
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};

		const response = await fetch(endpoint, options);
		const resData = await response.json();
		setEmailSubmitted(true);

		if (response.status === 200) {
			console.log('Message sent.');
		}
		console.log('To:', email);
		console.log('Sending from:', fromEmail);
	};
	return (
		<section
			id='contact'
			className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
			<div className='me="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'></div>
			{/* <div>
				<h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'> I'm currently open to new opportunities - whether it's a full-time role, a freelance collaboration, or just a chat about Python, testing, or backend architecture. My inbox is always open. If you have a question, an idea, or just want to say hi, I'll do my best to get back to you as soon as I can.</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/MattaKacz'>
						<Image src={GithubIcon} alt='Github Icon' />
					</Link>
					<Link href='https://www.linkedin.com/in/kaczormk/'>
						<Image src={LinkedinIcon} alt='LinkedIn Icon' />
					</Link>
				</div>
			</div> */}
			<div className='bg-[#1A1A1A]/50 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-purple-900/20'>
				<h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
				<p className='text-[#ADB7BE] mb-4 max-w-md'>
					I'm currently open to new opportunities - whether it's a full-time
					role, a freelance collaboration, or just a chat about Python, testing,
					or backend architecture. My inbox is always open. If you have a
					question, an idea, or just want to say hi, I'll do my best to get back
					to you as soon as I can.
				</p>
				<div className='socials flex flex-row gap-2'>
					<Link href='https://github.com/MattaKacz'>
						<Image src={GithubIcon} alt='Github Icon' />
					</Link>
					<Link href='https://www.linkedin.com/in/kaczormk/'>
						<Image src={LinkedinIcon} alt='LinkedIn Icon' />
					</Link>
				</div>
			</div>

			<div className='bg-[#1A1A1A]/50 backdrop-blur-md p-6 rounded-xl shadow-lg shadow-purple-900/20'>
				<form className='flex flex-col' onSubmit={handleSubmit}>
					<div className='mb-6'>
						<label
							htmlFor='email'
							className='text-white block mb-2 text-sm font-medium'>
							Your email
						</label>
						<input
							name='email'
							type='emial'
							id='email'
							required
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder='your@email.com'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='subject'
							className='text-white block mb-2 text-sm font-medium'>
							Subject
						</label>
						<input
							name='subject'
							type='text'
							id='subject'
							required
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder='Just saying hi!'
						/>
					</div>
					<div className='mb-6'>
						<label
							htmlFor='message'
							className='text-white block text-sm mb-2 font-medium'>
							Message
						</label>
						<textarea
							name='message'
							id='message'
							className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
							placeholder="Let's talk about..."
						/>
					</div>
					<button
						type='submit'
						className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full shadow-md'>
						Send me a Message
					</button>
					{
						// If the email was submitted successfully, show a success message.
						emailSubmitted && (
							<p className='text-green-500 text-sm mt-2'>
								Email sent successfully!
							</p>
						)
					}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
