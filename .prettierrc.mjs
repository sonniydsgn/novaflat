export default {
	tabWidth: 2,
	useTabs: true,
	semi: false,
	endOfLine: 'auto',
	arrowParens: 'avoid',
	trailingComma: 'all',
	singleQuote: true,
	printWidth: 120,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
}
