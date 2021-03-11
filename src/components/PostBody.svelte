<script lang="ts">
  import type { Block } from '../api/types';

  export let blocks: Block[];
</script>

<div class="container">
  {#each blocks as block}
    <p>{block.content}</p>
  {/each}
</div>

<style>
  .container {
    padding: 0 2rem;
  }

  p {
    margin: 0;
    padding: 0.2rem 0;
  }
</style>
