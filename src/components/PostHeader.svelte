<script lang="ts">
  export let icon: string;
  export let title: string;
  export let tags: string[];
</script>

<div class="header">
  <span class="icon">{icon}</span>
  <div class="right">
    <h2>{title}</h2>
    <div class="tags">
      {#each tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>
</div>
