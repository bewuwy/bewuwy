<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<!-- navbar -->
<div class="flex justify-between items-center w-full py-4 px-8 top-0 bg-contrast text-white">
	<a href="/">Bartek Włodarczyk</a>
	<div class="flex gap-4">
		<a href="/portfolio.pdf">CV</a>
		<a href="/tutoring">Tutoring</a>
		<a href="/projects">Projects</a>
		<a href="/about">About</a>
	</div>
</div>

{@render children()}
