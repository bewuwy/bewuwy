import svelte from 'eslint-plugin-svelte';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...svelte.configs['flat/recommended'],
];
