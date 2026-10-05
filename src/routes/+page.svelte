<script lang="ts">
	import CheckeredPaper from '../components/CheckeredPaper.svelte';
	import Sticker from '../components/Sticker.svelte';
</script>

<svelte:head>
	<title>bewu.dev</title>
	<meta name="description" content="I'm Bartek, a developer and student based in Delft" />
	<link rel="canonical" href="https://bewu.dev/" />
</svelte:head>

<main class="relative w-screen h-screen overflow-hidden flex flex-col justify-center items-center -z-10">
	<Sticker
		src="/stickers/typescript.svg"
		alt="TypeScript"
		top="12%"
		left="8%"
		rotation={-14}
		size={135}
		class="z-0 hidden sm:inline-flex"
	/>

	<Sticker
		src="/stickers/python.svg"
		alt="Python"
		top="15%"
		right="8%"
		rotation={12}
		size={140}
		class="z-0 hidden sm:inline-flex"
	/>

	<Sticker
		src="/stickers/docker.svg"
		alt="Docker"
		bottom="12%"
		left="10%"
		rotation={8}
		size={130}
		class="z-0 hidden md:inline-flex"
	/>

	<Sticker
		src="/stickers/svelte.svg"
		alt="Svelte"
		bottom="14%"
		right="10%"
		rotation={-10}
		size={130}
		class="z-0 hidden sm:inline-flex"
	/>

	<Sticker
		src="/stickers/go.svg"
		alt="Go"
		top="45%"
		left="3%"
		rotation={-6}
		size={120}
		class="z-0 hidden lg:inline-flex"
	/>

	<Sticker
		src="/stickers/postgresql.png"
		alt="PostgreSQL"
		top="48%"
		right="4%"
		rotation={15}
		size={125}
		class="z-0 hidden lg:inline-flex"
	/>

	<Sticker
		src="/stickers/javascript.png"
		alt="JavaScript"
		top="7%"
		left="45%"
		rotation={6}
		size={115}
		class="z-0 hidden md:inline-flex"
	/>

	<div class="relative z-10 flex flex-col items-center px-4">
		<CheckeredPaper class="flex flex-col items-center text-center max-w-xl">
			<h1 class="text-4xl sm:text-6xl font-bold">Bartek Włodarczyk</h1>
			<span class="text-xl sm:text-2xl mt-2 text-gray-700">Software Developer</span>
		</CheckeredPaper>
	</div>
</main>
