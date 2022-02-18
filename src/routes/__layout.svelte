<script>
	import '../app.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/900.css';
	import { navigating } from '$app/stores';
	import { slide } from 'svelte/transition';
	import About from './_About.svelte';
</script>

<main class="container mx-auto" transition:slide>
	<header class="flex flex-col items-center justify-center p-6 text-center">
		<a href="/">
			<img src="/logo.svg" alt="Wetter Gifhorn" class="w-96" />
		</a>
		<h1>Wetter Gifhorn</h1>
	</header>

	<div
		class="w-full justify-around p-4 py-10 md:flex md:space-x-12"
		class:animate-pulse={$navigating}
	>
		<article class="flex-grow">
			<slot />
		</article>

		<aside>
			<About />
		</aside>
	</div>
	<footer class="p-6">
		© Ben Weber {new Date().getFullYear()} – <a href="https://snuna.com"> Website von Snuna </a>
	</footer>
</main>
