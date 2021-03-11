<script lang="ts">
  export let image: string;
</script>

{#if image}
  <div style="background-image: url('{image}')" />
{/if}

<style>
  div {
    background-position: center;
    background-size: cover;
    height: 16rem;
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
</style>
