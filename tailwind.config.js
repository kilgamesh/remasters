/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
	"./pages/**/*.{js,ts,jsx,tsx}",
	"./projects/**/*.{js,ts,jsx,tsx}",
	"./styles/**/*.{js,ts,jsx,tsx}",
	"./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
		spacing: {
			'108': '32rem',
			'128': '54rem'
		}
	},
  },
  plugins: [],
}
