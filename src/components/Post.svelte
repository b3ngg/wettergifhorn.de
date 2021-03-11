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
    {#if data.image}
      <div class="image" />
    {/if}
    <div class="header">
      <span class="icon">{data.icon}</span>
      <div class="right">
        <h2>{data.title}</h2>
        <div class="tags">
          {#each data.tags as tag}
            <div class="tag">{tag}</div>
          {/each}
        </div>
      </div>
    </div>
    <div class="body">
      {#each data.blocks as block}
        <p>{block.content}</p>
      {/each}
    </div>
    <div class="footer">
      {data.date}
    </div>
  {:else}
    Lade
  {/if}
</div>
