<script lang="ts">
	import { isToday, isWeekend } from '$lib/helper';

	import type { Post } from '$lib/types';

	const getMessage = (latestPost: Post): string => {
		if (latestPost === undefined) return 'Beiträge laden …';

		const currentDate = new Date();
		if (isWeekend())
			return 'Am Wochenende gibt es gewöhnlich keine Wettervorhersagen. Dafür gibt es am Freitag eine Wettervorhersage für Samstag und Sonntag.';

		if (isToday(latestPost.date)) return 'Die Wettervorhersage ist für heute aktuell.';

		if (currentDate.getHours() < 8)
			return 'Für heute gibt es noch keine Wettervorhersage. Normalerweise schreibe ich sie zwischen 6 und 8 Uhr.';

		if (currentDate.getHours() < 10)
			return 'Leider gibt es für heute noch keine Wettervorhersage. Kann sein, dass ich verschlafen habe oder so … Sorry!';

		return 'Für heute gibt es leider keine Wettervorhersage. Sorry!';
	};

	export let post: Post;
</script>

{#if post}
	<p class="py-1 text-lg text-blue">{getMessage(post)}</p>
{/if}
