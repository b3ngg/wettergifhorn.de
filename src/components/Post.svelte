<script lang="ts">
  import { onMount } from 'svelte';
  import { addAdditonalDataToPost } from '../api/notion';

  import type { Post } from '../api/types';

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
    <h1>{data.icon}</h1>
  {:else}
    Lade
  {/if}
</div>
