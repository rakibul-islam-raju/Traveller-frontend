const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: colors.cyan,
				teal: colors.teal,
			},
		},
	},
	variants: {
		extend: {
			display: ["hover", "focus"],
			visibility: ["hover", "focus"],
		},
	},
	plugins: [],
};
