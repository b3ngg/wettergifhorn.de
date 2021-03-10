<header>
  <div class="logo">
    <img src="/assets/logo.svg" alt="Wetter Gifhorn" />
    <div class="overlay" />
  </div>
  <div class="text">
    <h1>Wetter Gifhorn</h1>
    <!-- TODO: Add health check -->
    <span>Zuletzt vor zwei Stunden aktualisiert</span>
  </div>
</header>

<style>
  header {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    border-radius: 50%;
    border: 0.4rem solid var(--c-grey);
    width: 6.8rem;
    height: 6.8rem;
    position: relative;
  }

  img {
    width: 6rem;
    border-radius: 50%;
  }

  .overlay {
    width: 6rem;
    height: 6rem;
    background-color: transparent;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    box-shadow: 0 0 20px -5px black inset;
  }

  .text {
    flex-grow: 0.8;
  }

  h1 {
    line-height: 3rem;
  }

  span {
    margin-left: 0.4rem;
  }

  @media screen and (max-width: 500px) {
    header {
      flex-direction: column;
      justify-content: center;
    }

    .text {
      margin-top: 1rem;
      text-align: center;
    }
  }
</style>
