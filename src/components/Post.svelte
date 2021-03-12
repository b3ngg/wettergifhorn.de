<script lang="ts">
  import { firstPost } from './../store';

  import Inview from 'svelte-inview';
  import { addAdditonalDataToPost } from '../api/notion';

  import type { Post } from '../api/types';
  import PostBody from './PostBody.svelte';
  import PostCover from './PostCover.svelte';
  import PostFooter from './PostFooter.svelte';
  import PostHeader from './PostHeader.svelte';
  import Spinner from './Spinner.svelte';

  let visRef;

  let complete: boolean = false;
  export let data: Post;
  export let index: number;

  const addData = async () => {
    data = await addAdditonalDataToPost(data);
    complete = true;
    if (index === 0) firstPost.set(data);
  };
</script>

<div class="container">
  {#if complete}
    <PostCover {...data} />
    <PostHeader {...data} />
    <PostBody {...data} />
    <PostFooter {...data} />
  {:else}
    <Inview wrapper={visRef} on:enter={addData}>
      <div bind:this={visRef}>
        <Spinner />
      </div>
    </Inview>
  {/if}
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4rem 0;

    background: linear-gradient(
      180deg,
      var(--c-white) 0%,
      var(--c-dark-white) 100%
    );
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.01);
    border-radius: 10px;
  }
</style>
