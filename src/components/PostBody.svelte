<script lang="ts">
  import type { Block } from '../api/types';

  export let blocks: Block[];
</script>

<div class="body">
  {#each blocks as block}
    <p>{block.content}</p>
  {/each}
</div>
