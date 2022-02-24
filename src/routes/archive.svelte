<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch(`/api/posts?start=${4}&end=${100}`);
		const json = await response.json();

		return {
			props: {
				posts: json.posts
			}
		};
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types';
	import PostComponent from '$components/Post.svelte';
	import Button from '$components/Button.svelte';
	import Box from '$components/Box.svelte';

	export let posts: Post[] = [];
</script>

<svelte:head>
	<title>Wetter Gifhorn - Archive</title>
	<meta name="description" content="Archiv aller Wettervorhersagen von Wetter Gifhorn." />
</svelte:head>

<div>
	<Box>
		<h2>Archiv</h2>
		<a href="/" class="my-4">
			<Button>Zurück zur Startseite</Button>
		</a>
	</Box>
	{#each posts as post}
		<PostComponent {post} />
	{/each}

	<p>Weiter zurückliegende Wettervorhersagen auf Anfrage.</p>
</div>
