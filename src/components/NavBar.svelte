<script lang="ts">
	import { page } from '$app/state';
	import { TUTORING_AVAILABLE } from '$app/env/public';

	let isHome = $derived(page.url.pathname === '/');
</script>

<div class="flex justify-between items-center w-full py-4 px-8 {isHome ? 'fixed' : 'sticky'} top-0 left-0 z-50 bg-contrast text-white">
	<a href="/">Bartek Włodarczyk</a>
	<div class="flex gap-4">
		{#if TUTORING_AVAILABLE}
			<a href="/tutoring">Tutoring</a>
		{/if}
		<a href="/projects">My Projects</a>
		<a href="/portfolio.pdf">CV</a>
		<a href="/about">About Me</a>
	</div>
</div>
