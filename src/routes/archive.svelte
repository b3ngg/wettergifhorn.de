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
	import type { Post } from '$lib/types';
	import PostComponent from '$components/Post.svelte';
	import { lastPost } from '$lib/stores';
	import Button from '$components/Button.svelte';

	export let posts: Post[] = [];

	const loadMore = async () => {
		loading = true;
		const response = await fetch(`/api/posts?start=${pagination}&end=${pagination + 10}`);
		const newPosts = await response.json();
		posts = [...posts, ...newPosts.posts];
		loading = false;
		pagination += 10;
	};

	let pagination: number = 10;
	let loading: boolean = false;
	lastPost.set(posts[0]);
</script>

<div>
	{#each posts as post}
		<PostComponent {post} />
	{/each}

	<div on:click={loadMore} class:animate-pulse={loading}>
		<Button>Mehr laden</Button>
	</div>
</div>
