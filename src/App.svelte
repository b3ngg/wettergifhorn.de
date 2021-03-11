<script lang="ts">
  import { getCollectionAsPosts } from './api/notion';

  import Header from './components/Header.svelte';
  import ImageGenerator from './components/ImageGenerator.svelte';
  import Info from './components/Info.svelte';
  import Post from './components/Post.svelte';
  import Spinner from './components/Spinner.svelte';

  let posts = getCollectionAsPosts('d85f75983c61439a87f132323a409d0d');

  let id = new URL(window.location.href).searchParams.get('id');

  let showInfo = false;
</script>

{#if id}
  <ImageGenerator {id} />
{:else}
  <div class="wrapper">
    <Header />

    {#if showInfo}
      <Info />
    {:else}
      {#await posts}
        <Spinner />
      {:then value}
        {#each value as item}
          <Post data={item} />
        {/each}
      {:catch error}
        Fehler: {error}
      {/await}
    {/if}
  </div>
{/if}

<style>
  .wrapper {
    max-width: 40rem;
    box-sizing: content-box;
    margin: 0 auto;
    position: relative;
    padding: 1rem;
  }
</style>
