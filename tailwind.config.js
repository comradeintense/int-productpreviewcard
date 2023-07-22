/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkCyan: 'hsl(158, 36%, 37%)',
				cream: 'hsl(30, 38%, 92%)',
				veryDarkblue: 'hsl(212, 21%, 14%)',
				darkGrayishblue: 'hsl(228, 12%, 48%)',
			},
			fontFamily: {
				montserrat: ['Montserrat', 'sans-serif'],
				fraunces: ['Fraunces', 'serif'],
			},
		},
	},
	plugins: [],
};
