/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,md,mdx,ts,vue}'],
	theme: {
		extend: {
			colors: {
				'base': '#121212',
				'base-200': '#222222',
				'base-400': '#424242',
				'base-600': '#626262',
				'primary': '#8266c4',
			},
			content: {
				default: '""',
			},
			fontFamily: {
				sans: ['darkmode-mono-on', 'sans-serif'],
				verdana: ['verdana', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
