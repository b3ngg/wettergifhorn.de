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
	import { lastPost } from '$lib/stores';
	import Button from '$components/Button.svelte';

	export let posts: Post[] = [];

	lastPost.set(posts[0]);
</script>

<svelte:head>
	<title>Wetter Gifhorn</title>
	<meta
		name="description"
		content="Jeden Tag neue handgemachte Wettervorhersagen für den Landkeis Gifhorn."
	/>
</svelte:head>

<article>
	<div>
		{#each posts as post}
			<PostComponent {post} />
		{/each}
	</div>

	<div class="mb-32">
		<a href="/archive">
			<Button>Ältere Beiträge anzeigen</Button>
		</a>
	</div>
</article>
