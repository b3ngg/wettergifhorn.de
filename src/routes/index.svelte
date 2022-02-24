<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/posts');
		const json = await response.json();

		return {
			props: {
				posts: json.posts
			}
		};
	};
</script>

<script lang="ts">
	import PostComponent from '$components/Post.svelte';
	import type { Post } from '$lib/types';
	import Button from '$components/Button.svelte';
	import Box from '$components/Box.svelte';
	import State from '$components/State.svelte';

	export let posts: Post[] = [];
</script>

<svelte:head>
	<title>Wetter Gifhorn</title>
	<meta
		name="description"
		content="Jeden Tag neue handgemachte Wettervorhersagen für den Landkeis Gifhorn."
	/>
</svelte:head>

<Box>
	<h2>Die neusten Beiträge</h2>
	<State post={posts[0]} />
</Box>

<div>
	{#each posts as post}
		<PostComponent {post} />
	{/each}
</div>

<div class="mb-32">
	<a href="/archive" rel="external">
		<Button>Ältere Beiträge anzeigen</Button>
	</a>
</div>
