<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement> {
		src?: string;
		alt?: string;
		size?: number | string;
		rotation?: number | string;
		top?: number | string;
		bottom?: number | string;
		left?: number | string;
		right?: number | string;
		class?: string;
		children?: Snippet;
	}

	let {
		src,
		alt = 'Sticker',
		size = 110,
		rotation = 0,
		top,
		bottom,
		left,
		right,
		class: className = '',
		style = '',
		children,
		...restProps
	}: Props = $props();

	const formattedSize = $derived(typeof size === 'number' ? `${size}px` : size);
	const formattedRotation = $derived(
		typeof rotation === 'number' ? `${rotation}deg` : rotation
	);

	const isPositioned = $derived(
		top !== undefined || bottom !== undefined || left !== undefined || right !== undefined
	);

	const formatPos = (val: number | string | undefined) => {
		if (val === undefined) return undefined;
		return typeof val === 'number' ? `${val}px` : val;
	};

	const positionStyle = $derived.by(() => {
		const styles: string[] = [];
		if (top !== undefined) styles.push(`top: ${formatPos(top)}`);
		if (bottom !== undefined) styles.push(`bottom: ${formatPos(bottom)}`);
		if (left !== undefined) styles.push(`left: ${formatPos(left)}`);
		if (right !== undefined) styles.push(`right: ${formatPos(right)}`);
		return styles.join('; ');
	});

	const stickerStyle = $derived(
		`--sticker-size: ${formattedSize}; --sticker-rotate: ${formattedRotation}; ${positionStyle ? positionStyle + ';' : ''} ${style}`
	);
</script>

<div
	class="sticker-container inline-flex items-center justify-center bg-white p-1 rounded-xl border-2 border-white shadow-lg shadow-black/20 select-none {isPositioned ? 'absolute' : ''} {className}"
	style={stickerStyle}
	{...restProps}
>
	{#if src}
		<img
			{src}
			{alt}
			class="w-full h-auto object-contain pointer-events-none rounded-lg"
			draggable="false"
		/>
	{/if}
	{#if children}
		{@render children()}
	{/if}
</div>

<style>
	.sticker-container {
		width: var(--sticker-size, 110px);
		height: auto;
		transform: rotate(var(--sticker-rotate, 0deg));
	}
</style>
