/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#C1272D',
					50: '#fdeeee',
					100: '#fad6d7',
					200: '#f6adaf',
					300: '#f0828a',
					400: '#e4575f',
					500: '#C1272D',
					600: '#a31e23',
					700: '#84171b',
					800: '#681115',
					900: '#4d0c0f'
				}
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			container: { center: true }
		}
	},
	plugins: []
};
