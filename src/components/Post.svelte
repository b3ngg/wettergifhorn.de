<script lang="ts">
	import type { Post } from '$lib/types';
	import { getRelativeTime } from '$lib/helper';
	import Box from './Box.svelte';
	import Tag from './Tag.svelte';

	export let post: Post;
</script>

<Box>
	<div class="items-center pb-4 md:flex md:space-x-8">
		<div class="pb-4 text-7xl md:text-8xl">{post.icon ?? '💬'}</div>
		<div>
			<h3 class="pb-4 text-4xl font-black text-gray-800">{post.title}</h3>
			<div class="flex flex-wrap">
				{#if post.tags}
					{#each post.tags as tag}
						<Tag value={tag} />
					{/each}
				{/if}
			</div>
		</div>
	</div>
	<div class="prose py-6 text-gray-700 md:prose-lg">
		{#each post.blocks as block}
			<p>{block.content}</p>
		{/each}
	</div>

	<div class="text-gray-500">
		{getRelativeTime(post.date)}
	</div>
</Box>
