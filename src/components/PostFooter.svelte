<script lang="ts">
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/de';

  dayjs.locale('de');
  dayjs.extend(relativeTime);

  export let date: Date;
</script>

<div class="container">
  {dayjs(date).fromNow()}
</div>

<style>
  .container {
    padding: 2rem;
    color: var(--c-grey);
    font-size: 0.8rem;
  }
</style>
