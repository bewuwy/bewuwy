<script lang="ts">
	import { onMount } from "svelte";
	import CheckeredPaper from "../components/CheckeredPaper.svelte";
	import Sticker from "../components/Sticker.svelte";

	let scrollProgress = $state(0);
	let containerRef = $state<HTMLElement | null>(null);

	function handleScroll() {
		if (!containerRef) return;
		const rect = containerRef.getBoundingClientRect();
		const scrollDistance = rect.height - window.innerHeight;
		if (scrollDistance > 0) {
			const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
			scrollProgress = progress;
		}
	}

	onMount(() => {
		handleScroll();
	});
</script>

<svelte:head>
	<title>bewu.dev</title>
	<meta
		name="description"
		content="I'm Bartek, a developer and student based in Delft"
	/>
	<link rel="canonical" href="https://bewu.dev/" />
</svelte:head>

<svelte:window onscroll={handleScroll} onresize={handleScroll} />

<main>
	<div bind:this={containerRef} class="relative h-[200vh]">
		<div
			class="sticky top-0 h-screen w-screen overflow-hidden"
			style="perspective: 1500px;"
		>
			<!-- Page 2 (Revealed page underneath) -->
			<div class="absolute inset-0 w-full h-full z-0 flex flex-col justify-center items-center">
				<CheckeredPaper
					class="w-full h-full flex flex-col justify-center items-center px-4"
					rounded="rounded-none"
				>
					<p class="text-lg sm:text-xl text-gray-800">Lorem ipsum</p>
				</CheckeredPaper>
			</div>

			<!-- Page 1 (Book Cover, hinged at the top horizontal seam) -->
			<div
				class="cover-panel absolute inset-0 w-full h-full origin-top z-10 overflow-hidden"
				style="transform: rotateX({scrollProgress * 110}deg); transform-style: preserve-3d; backface-visibility: hidden; pointer-events: {scrollProgress > 0.9 ? 'none' : 'auto'};"
			>
				<div class="grid grid-cols-[1fr_auto_1fr] grid-rows-3 w-full h-full p-4 sm:p-8">
					<!-- Top-Left: TypeScript -->
					<div class="flex items-center justify-center">
						<Sticker
							src="/stickers/typescript.svg"
							alt="TypeScript"
							rotation={-14}
							size={135}
						/>
					</div>

					<!-- Top-Center: JavaScript -->
					<div class="flex items-center justify-center px-4">
						<Sticker
							src="/stickers/javascript.png"
							alt="JavaScript"
							rotation={6}
							size={115}
						/>
					</div>

					<!-- Top-Right: Python -->
					<div class="flex items-center justify-center">
						<Sticker
							src="/stickers/python.svg"
							alt="Python"
							rotation={12}
							size={140}
						/>
					</div>

					<!-- Middle-Left: Go (more to the side) -->
					<div class="flex items-center justify-start pl-4 sm:pl-8">
						<Sticker
							src="/stickers/go.svg"
							alt="Go"
							rotation={-6}
							size={120}
						/>
					</div>

					<!-- Center: Big Name Card -->
					<div class="flex items-center justify-center px-4 sm:px-8">
						<CheckeredPaper
							class="flex flex-col items-center text-center max-w-xl"
						>
							<h1 class="text-4xl sm:text-6xl font-bold whitespace-nowrap">
								Bartek Włodarczyk
							</h1>
							<span class="text-xl sm:text-2xl mt-2 text-gray-700 whitespace-nowrap"
								>Software Developer</span
							>
						</CheckeredPaper>
					</div>

					<!-- Middle-Right: PostgreSQL (more to the side) -->
					<div class="flex items-center justify-end pr-4 sm:pr-8">
						<Sticker
							src="/stickers/postgresql.png"
							alt="PostgreSQL"
							rotation={15}
							size={125}
						/>
					</div>

					<!-- Bottom-Left: Docker -->
					<div class="flex items-center justify-center">
						<Sticker
							src="/stickers/docker.svg"
							alt="Docker"
							rotation={8}
							size={130}
						/>
					</div>

					<!-- Bottom-Center: Empty -->
					<div class="flex items-center justify-center px-4">
						<!-- Bottom-center cell stays empty -->
					</div>

					<!-- Bottom-Right: Svelte -->
					<div class="flex items-center justify-center">
						<Sticker
							src="/stickers/svelte.svg"
							alt="Svelte"
							rotation={-10}
							size={130}
						/>
					</div>
				</div>

				<!-- Scroll cue arrow -->
				<div
					class="absolute bottom-8 flex justify-center w-full pointer-events-none transition-opacity duration-200"
					style="opacity: {Math.max(0, 1 - scrollProgress * 15)};"
					aria-hidden="true"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6 animate-bounce text-gray-700"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	.cover-panel {
		background-color: var(--bg-color);
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='matrix' values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)'/%3E%3C/svg%3E");
	}
</style>
