module.exports = {
	darkMode: "class",
	content: [
		"./src/app/**/*.{ts,tsx,js,jsx,mdx}",
		"./src/components/**/*.{ts,tsx,js,jsx,mdx}",
		"./src/lib/**/*.{ts,tsx,js,jsx,mdx}",
	],
	theme: { extend: {} },
	plugins: [require("tailwindcss-animate")],
};


