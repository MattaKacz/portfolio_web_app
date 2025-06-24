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

		// <main className="relative z-10 w-full h-screen flex items-center justify-center text-white">
		// 	<TestVanta />s
		// 	<h1 className="text-3xl font-bold z-20">Test Vanta Globe</h1>
		// </main>
	);
}
