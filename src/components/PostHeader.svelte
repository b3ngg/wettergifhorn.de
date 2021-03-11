<script lang="ts">
  export let icon: string;
  export let title: string;
  export let tags: string[];
</script>

<div class="container">
  <span class="icon">{icon ? icon : '💬'}</span>
  <div class="right">
    <h2>{title}</h2>
    <div class="tags">
      {#if tags}
        {#each tags as tag}
          <div class="tag">{tag}</div>
        {/each}
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem var(--u-padding);
  }

  span {
    font-size: 4rem;
  }

  .right {
    padding-left: 2rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    background-color: var(--c-soft-blue);
    color: var(--c-blue);
    padding: 0.05rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 0.4rem;
    margin-bottom: 0.8rem;
  }

  @media screen and (max-width: 700px) {
    .container {
      flex-direction: column;
      align-items: flex-start;
    }

    .right {
      padding: 0;
    }

    .tags {
      margin-top: 0.6rem;
    }
  }
</style>
