<script lang="ts">
  import { getCollectionAsPosts } from './api/notion';

  import Header from './components/Header.svelte';
  import Post from './components/Post.svelte';
  import Spinner from './components/Spinner.svelte';

  let posts = getCollectionAsPosts('d85f75983c61439a87f132323a409d0d');
</script>

<div class="wrapper">
  <Header />

  {#await posts}
    <Spinner />
  {:then value}
    {#each value as item}
      <Post data={item} />
    {/each}
  {:catch error}
    Fehler: {error}
  {/await}
</div>

<style>
  .wrapper {
    max-width: 40rem;
    box-sizing: content-box;
    margin: 0 auto;
    position: relative;
    padding: 1rem;
  }
</style>
