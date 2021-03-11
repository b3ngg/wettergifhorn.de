<script lang="ts">
  export let icon: string;
  export let title: string;
  export let tags: string[];
</script>

<div class="container">
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

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
  }

  span {
    font-size: 4rem;
  }

  .right {
    padding-left: 2rem;
  }

  .tags {
    display: flex;
  }

  .tag {
    background-color: var(--c-soft-blue);
    color: var(--c-blue);
    padding: 0.05rem 1rem;
    border-radius: 20px;
  }
</style>
