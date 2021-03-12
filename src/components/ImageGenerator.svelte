<script lang="ts">
  import domtoimage from 'dom-to-image';
  import { onMount } from 'svelte';

  import { addAdditonalDataToPost, getCollectionAsPosts } from '../api/notion';

  import type { Post } from '../api/types';
  import PostBody from './PostBody.svelte';
  import PostCover from './PostCover.svelte';
  import PostHeader from './PostHeader.svelte';

  export let id: string;

  let imageRef;

  let data: Post;
  let textLenght: number = 0;

  onMount(async () => {
    const initialData = await getCollectionAsPosts(
      'd85f75983c61439a87f132323a409d0d'
    ).then((posts) => posts.filter((post) => post.id == id)[0]);
    const completeData = await addAdditonalDataToPost(initialData);

    data = completeData;

    textLenght = data.blocks
      .flat()
      .reduce<number>(
        (accumulator, currentValue) =>
          accumulator + currentValue.content.length,
        0
      );

    await new Promise((r) => setTimeout(r, 100));

    const scale = 2;
    domtoimage
      .toJpeg(imageRef, {
        height: imageRef.offsetHeight * scale,
        width: imageRef.offsetWidth * scale,
        style: {
          transform: 'scale(' + scale + ')',
          transformOrigin: 'top left',
          width: imageRef.offsetWidth + 'px',
          height: imageRef.offsetHeight + 'px',
        },
      })
      .then(async (dataUrl) => {
        var link = document.createElement('a');
        link.download = data.title + '.jpeg';
        link.href = dataUrl;
        link.click();

        await new Promise((r) => setTimeout(r, 400));
        history.back();
      });
  });
</script>

{#if data}
  <div bind:this={imageRef} class="frame">
    <div class="container">
      <PostCover {...data} />
      <PostHeader {...data} />
      {#if textLenght < 600 || !data.image}
        <PostBody {...data} />
      {/if}
      <div class="branding">
        <p>Mehr auf wettergifhorn.de</p>
      </div>
    </div>
  </div>
{:else}
  Lade
{/if}

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;

    background: linear-gradient(
      180deg,
      var(--c-white) 0%,
      var(--c-dark-white) 100%
    );
    border-radius: 10px;
  }

  .frame {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54rem;
    height: 60rem;
    background-color: var(--c-bg);
  }

  .branding {
    padding: var(--u-padding);
    color: var(--c-black);
  }
</style>
