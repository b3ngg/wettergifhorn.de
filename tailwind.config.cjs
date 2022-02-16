const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif']
			},
			colors: {
				blue: {
					DEFAULT: '#2274a5'
				},
				bleach: {
					DEFAULT: '#EAE0CC'
				},
				green: {
					DEFAULT: '#A0CA92'
				},
				yellow: {
					DEFAULT: '#F9C22E'
				},
				red: {
					DEFAULT: '#CD4336'
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
