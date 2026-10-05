<svelte:head>
	<title>bewu.dev</title>
	<meta name="description" content="i'm bewu, a developer and student based in Delft" />
	<link rel="canonical" href="https://bewu.dev/" />
</svelte:head>

<main class="w-screen h-screen flex flex-col justify-center items-center">
	<div class="flex flex-col justify-center items-center w-fit">
		<svg viewBox="0 -110 650 120" class="pb-4 w-80 sm:w-[30rem] md:w-[35rem] lg:w-[40rem] h-auto drop-shadow-lg hover:drop-shadow-xl">
			<text class="svgText" x="50%" y="0" text-anchor="middle">bewu.dev</text>
		</svg>
		<h1 class="text-lg">i'm Bartek and i'm a dev</h1>
	</div>

	<div class="flex justify-center items-center w-fit gap-4 mt-6">
		<a href="/projects" role="button">My projects</a>
		<a href="/about" role="button">About me</a>
	</div>
</main>

<style>
	svg {
		font-size: 140px;
		font-weight: bold;
		width: 450px;
		height: 70px;
		fill: white;
	}

	.svgText {
		fill: black;
		stroke: white;
		stroke-width: 15px;
		stroke-linejoin: round;
		paint-order: stroke;
	}
</style>
