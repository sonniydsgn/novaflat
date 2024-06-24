module.exports = {
	root: true,
	env: {
		node: true,
		es2020: true,
		browser: true,
	},
	extends: ['plugin:astro/recommended', 'prettier'],
	plugins: ['simple-import-sort'],
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		'simple-import-sort/imports': 'warn',
		'simple-import-sort/exports': 'warn',
		'sort-imports': 'off',
		'import/order': 'off',
		'no-var': 'error',
		'prefer-const': 'warn',
		'func-names': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
	},
	overrides: [
		{
			files: ['*.astro'],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro'],
			},
		},
		{
			files: ['**/*.astro/*.js', '*.astro/*.js'],
			parser: '@typescript-eslint/parser',
		},
	],
}
