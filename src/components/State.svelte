<script lang="ts">
	import { isToday, isWeekend } from '$lib/helper';

	import type { Post } from '$lib/types';

	const getMessage = (latestPost: Post): string => {
		if (latestPost === undefined) return 'Beiträge laden …';

		const currentDate = new Date();
		if (isWeekend())
			return 'Am Wochenende gibt es gewöhnlich keine Wettervorhersagen. Dafür gibt es am Freitag eine Wettervorhersage für Samstag und Sonntag.';

		if (isToday(latestPost.date)) return 'Die Wettervorhersage ist für Heute aktuell.';

		if (currentDate.getHours() < 8)
			return 'Für Heute gibt es noch keine Wettervorhersage. Normalerweise schreibe ich sie zwischen 6 und 8 Uhr.';

		if (currentDate.getHours() < 10)
			return 'Leider gibt es für Heute noch keine Wettervorhersage. Kann sein, dass ich verschlafen habe oder so … Sorry!';

		return 'Für Heute gibt es leider keine Wettervorhersage. Sorry!';
	};

	export let post: Post;
</script>

{#if post}
	<p class="p-1 text-blue">{getMessage(post)}</p>
{/if}
