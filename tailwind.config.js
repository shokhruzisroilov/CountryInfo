/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	// darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#2B3844',
				bgBlack: '#202C36',
				bgLight: '#fafafa',
			},
			fontFamily: {
				montserrat: ['Nunito Sans', 'sans-serif'],
			},
			boxShadow: {
				shadowSpan: '0px 0px 4px 1px rgba(0, 0, 0, 0.10)',
				shadowFilter: '[0px_2px_9px_0px_rgba(0, 0, 0, 0.05)',
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
}
