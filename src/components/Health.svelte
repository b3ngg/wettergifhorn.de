<script lang="ts">
  import type { Post } from '../api/types';

  import { firstPost } from '../store';

  const getMessage = (latestPost: Post): string => {
    if (latestPost === undefined) return 'Beiträge laden …';

    return 'Ich bin bis zum 23.8.2021 im Urlaub. Bis dahin wird es keine neuen Wettervorhersagen geben.';

    const currentDate = new Date();
    if (currentDate.getDay() === 0 || currentDate.getDay() === 6)
      return 'Am Wochenende gibt es gewöhnlich keine Wettervorhersagen. Dafür gibt es am Freitag eine Wettervorhersage für Samstag und Sonntag.';

    if (latestPost.created.toDateString() === currentDate.toDateString())
      return 'Die Wettervorhersage ist für Heute aktuell.';

    if (currentDate.getHours() < 8)
      return 'Für Heute gibt es noch keine Wettervorhersage. Normalerweise schreibe ich sie zwischen 5–7 Uhr.';

    if (currentDate.getHours() < 10)
      return 'Leider gibt es für Heute noch keine Wettervorhersage. Kann sein, dass ich verschlafen habe oder so … Sorry!';

    return 'Für Heute gibt es leider keine Wettervorhersage. Sorry!';
  };

  let message = 'Lade …';

  firstPost.subscribe((value) => (message = getMessage(value)));
</script>

<div class="container">
  <span>{message}</span>
</div>

<style>
  .container {
    width: 100%;
    text-align: center;
    padding-top: 1rem;
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 0;
  }

  span {
    color: var(--c-blue);
    font-weight: 700;
  }
</style>
