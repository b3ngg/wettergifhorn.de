<script>
  import { showInfo } from './../store';
  import Health from './Health.svelte';
</script>

<header>
  <div class="flex">
    <div class="logo">
      <img src="/assets/logo.svg" alt="Wetter Gifhorn" />
      <div class="overlay" />
    </div>
    <div class="text">
      <h1>Wetter Gifhorn</h1>
    </div>
    <div on:click={() => showInfo.update((value) => !value)} class="info">
      {#if $showInfo}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      {:else}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      {/if}
    </div>
  </div>
  <Health />
</header>

<style>
  header {
    margin: 3rem 0;
    padding: 2rem var(--u-padding);
    background: linear-gradient(180deg, var(--c-white) 0%, #f2f2f2 100%);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.01);
    border-radius: 10px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .logo {
    border-radius: 50%;
    border: 0.25rem solid var(--c-grey);
    width: 5.5rem;
    height: 5.5rem;
    position: relative;
  }

  img {
    width: 5rem;
    border-radius: 50%;
  }

  .overlay {
    width: 5rem;
    height: 5rem;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 20px -8px rgba(0, 0, 0, 0.8) inset;
  }

  h1 {
    line-height: 3rem;
  }

  .info {
    margin: 1rem;
  }

  .info svg {
    cursor: pointer;
    height: 2rem;
    color: #a0ca92;
  }

  @media screen and (max-width: 500px) {
    .flex {
      flex-direction: column;
      justify-content: center;
      margin: 0;
    }

    .text {
      margin-top: 1rem;
      text-align: center;
    }
  }
</style>
