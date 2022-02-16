<script>
	import '../app.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/900.css';
	import State from '$components/State.svelte';
	import { lastPost } from '$lib/stores';
	import { navigating } from '$app/stores';
</script>

<main class="mx-auto max-w-4xl">
	<header class="flex flex-col items-center justify-center p-6 text-center">
		<a href="/">
			<img src="/logo.svg" alt="Wetter Gifhorn" class="w-96" />
		</a>
		<h1>Wetter Gifhorn</h1>
		<State post={$lastPost} />
	</header>

	<article class="p-4 py-10" class:animate-pulse={$navigating}>
		<slot />
	</article>
</main>
