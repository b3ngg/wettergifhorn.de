<script>
	import '../app.css';
	import '@fontsource/lato/400.css';
	import '@fontsource/lato/900.css';
</script>

<header class="bg-bleach p-2 shadow-md">
	<div class="container mx-auto flex items-center justify-start space-x-4">
		<img src="/logo.svg" alt="Wetter Gifhorn" class="w-24" />
		<h1>Wetter Gifhorn</h1>
	</div>
</header>

<main class="h-full min-h-screen w-full bg-bleach">
	<article class="container mx-auto p-2 py-10">
		<slot />
	</article>
</main>
