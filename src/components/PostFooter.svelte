<script lang="ts">
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';
  import 'dayjs/locale/de';

  dayjs.locale('de');
  dayjs.extend(relativeTime);

  export let created: Date;
</script>

<div class="container">
  {dayjs(created).fromNow()}
</div>

<style>
  .container {
    padding: var(--u-padding);
    color: var(--c-grey);
    font-size: 0.8rem;
  }
</style>
