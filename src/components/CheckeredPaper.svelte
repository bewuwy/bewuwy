<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		children?: Snippet;
		class?: string;
		gridSize?: number | string;
		gridColor?: string;
		paperColor?: string;
		rounded?: string;
		shadow?: string;
		padding?: string;
	}

	let {
		children,
		class: className = '',
		gridSize = 20,
		gridColor = 'rgba(0, 0, 0, 0.07)',
		paperColor = '#ffffff',
		rounded = 'rounded-2xl',
		shadow = 'shadow-xl shadow-black/8 ring-1 ring-black/5',
		padding = 'p-6',
		style = '',
		...restProps
	}: Props = $props();

	const formattedGridSize = $derived(
		typeof gridSize === 'number' ? `${gridSize}px` : gridSize
	);

	const paperStyle = $derived(
		`--paper-grid-size: ${formattedGridSize}; --paper-grid-color: ${gridColor}; --paper-bg-color: ${paperColor}; ${style}`
	);
</script>

<div
	class="checkered-paper relative {rounded} {shadow} {padding} {className}"
	style={paperStyle}
	{...restProps}
>
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.checkered-paper {
		background-color: var(--paper-bg-color, #ffffff);
		background-image:
			linear-gradient(to right, var(--paper-grid-color, rgba(0, 0, 0, 0.07)) 1px, transparent 1px),
			linear-gradient(to bottom, var(--paper-grid-color, rgba(0, 0, 0, 0.07)) 1px, transparent 1px);
		background-size: var(--paper-grid-size, 20px) var(--paper-grid-size, 20px);
	}
</style>
