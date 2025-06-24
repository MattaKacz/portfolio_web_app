import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import VantaBackground from '../components/VantaBackground';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata = {
	title: 'Matt Kaczor | Backend Developer',
	description: 'Portfolio site of Matt Kaczor – Python, Django, FastAPI developer with a focus on AI-powered backends.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<VantaBackground />
				<main className='relative z-10'>{children}</main>
			</body>
		</html>
	);
}
