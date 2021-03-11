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
    padding: var(--u-padding);
    background: linear-gradient(
      180deg,
      var(--c-white) 0%,
      var(--c-dark-white) 100%
    );
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.01);
    border-radius: 10px;
  }

  .logo {
    border-radius: 50%;
    border: 0.4rem solid var(--c-grey);
    width: 5.8rem;
    height: 5.8rem;
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
