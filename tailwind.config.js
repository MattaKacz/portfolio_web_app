/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backdropBlur: {
				glass: '20px',
				xl: '30px',
			},
			boxShadow: {
				glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
			},
			borderColor: {
				glass: 'rgba(255, 255, 255, 0.2)',
			},
			backgroundColor: {
				glass: 'rgba(255, 255, 255, 0.05)',
			},
			keyframes: {
				glow: {
					'0%, 100%': {
						boxShadow: '0 0 10px 2px rgba(168, 85, 247, 0.25)',
					},
					'50%': {
						boxShadow: '0 0 20px 4px rgba(168, 85, 247, 0.4)',
					},
				},
			},
			animation: {
				glow: 'glow 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
};
