import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import VantaBackground from '../components/VantaBackground';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';

export default function Home() {
	return (
		<main className='relative z-10 flex min-h-screen flex-col'>
			{/* <VantaBackground /> */}
			<Navbar />

			<div className='container mt-24 mx-auto px-12 py-4'>
				<HeroSection />
				<AboutSection />
				<ProjectsSection />
				<EmailSection />
			</div>
			<Footer />
		</main>
	);
}
