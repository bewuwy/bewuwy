<script lang="ts">
	import '../app.css';
    import NavBar from '../components/NavBar.svelte';

	let { children } = $props();
</script>

<!-- navbar -->
<NavBar />

{@render children()}
