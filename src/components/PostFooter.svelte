<script lang="ts">
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/de';

  dayjs.locale('de');
  dayjs.extend(relativeTime);

  export let created: Date;
  export let id: string;
</script>

<div class="container">
  <span>
    {dayjs(created).fromNow()}
  </span>
  <a href="/?id={id}">
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
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  </a>
</div>

<style>
  .container {
    padding: 2rem var(--u-padding);
    color: var(--c-grey);
    font-size: 0.8rem;
    display: flex;
    justify-content: space-between;
  }

  a {
    color: var(--c-grey);
  }

  svg {
    height: 24px;
    visibility: hidden;
  }

  .container:hover svg {
    visibility: visible;
  }
</style>
