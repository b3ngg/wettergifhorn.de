<script lang="ts">
  import { onMount } from 'svelte';
  import { addAdditonalDataToPost } from '../api/notion';

  import type { Post } from '../api/types';
  import PostBody from './PostBody.svelte';
  import PostCover from './PostCover.svelte';
  import PostFooter from './PostFooter.svelte';
  import PostHeader from './PostHeader.svelte';

  let complete: boolean = false;
  export let data: Post;

  // TODO: Replace with viewport detection
  onMount(async () => {
    data = await addAdditonalDataToPost(data);
    complete = true;
  });
</script>

<div class="post">
  {#if complete}
    <PostCover {...data} />
    <PostHeader {...data} />
    <PostBody {...data} />
    <PostFooter {...data} />
  {:else}
    Lade
  {/if}
</div>
