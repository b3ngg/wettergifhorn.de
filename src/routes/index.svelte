<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/today');
		const json = await response.json();

		return {
			props: {
				posts: json.posts
			}
		};
	};
</script>

<script lang="ts">
	import PostComponent from '$components/Post.svelte';
	import type { Post } from '$lib/types';
	import { lastPost } from '$lib/stores';
	import Box from '$components/Box.svelte';
	import { socials } from '$lib/socials';

	export let posts: Post[] = [];

	lastPost.set(posts[0]);
</script>

<div>
	{#each posts as post}
		<PostComponent {post} />
	{/each}
</div>

<Box>
	<h2>Über Wetter Gifhorn</h2>
	<div class="prose pt-8 text-gray-800 md:prose-lg">
		<img src="ben_weber.jpeg" alt="Ben Weber" class="rounded-xl" />
		<h3>Hey ich bin Ben!</h3>
		<p>
			Seit ein paar Jahren nun betreibe ich „Wetter Gifhorn“ als Hobby und schreibe
			Wettervorhersagen für Gifhorn und Umgebung. Die Art und Weise, wie ich das gemacht habe, hat
			sich mit der Zeit verändert. Ich versuche aber immer, das ganze möglichst nett und
			handgefertigt zu machen. Das ist nämlich der große Unterschied: Die Wettervorhersagen hier,
			stammen nämlich nicht etwa von irgendwelchen Computern, sondern sind alle von mir selber
			gemacht.
		</p>
		<p>
			Wenn Du also lieber Wettervorhersagen von einem echten Menschen, anstatt von einem Computer
			liest, bist Du hier genau richtig. Ich freu mich!
		</p>

		<div class="socials">
			{#each socials as social}
				<a
					href={social.link}
					style:background-color="#{social.hex}"
					class="my-2 inline-flex items-center rounded-full p-2 px-4 text-white no-underline transition hover:scale-105"
					target="_blank"
				>
					<svg
						viewBox="0 0 24 24"
						class="mr-2 h-6 fill-white text-white"
						xmlns="http://www.w3.org/2000/svg"
					>
						{@html social.svg}
					</svg>

					{social.title}
				</a>
				<br />
			{/each}
		</div>

		<h2>Rechtliches Zeug</h2>
		<h3>Impressum</h3>
		<p>
			Ben Weber<br />
			Dieselstraße 10 38518 Gifhorn<br />
			Telefon: +49 15 118703898<br />
			E-Mail: info@wettergifhorn.de
		</p>

		<h3>Haftungsbeschränkung</h3>
		<p>
			Für die Richtigkeit der Wettervorhersagen, Warnungen und andere Informationen auf dieser
			Website, so wie für den Inhalt von verlinkten Seiten, übernehme ich keine Haftung.
		</p>
		<h3>Copyright</h3>
		<p>
			Alle Inhalte unterliegen generell meinem Copyright und dürfen nicht weiterverbreitet werden.
		</p>
		<p>Falls Du meine Inhalte verwenden möchtest, schreibe mich einfach an und frage nett!</p>
		<p>
			Ausnahme bilden Bilder, die über die URL, beginnend mit „images.unsplash.com“, eingebunden
			werden. Diese unterliegen der Lizenz von dem Dienst Unsplash. Siehe:
			https://unsplash.com/license
		</p>

		<h3>Datenschutz</h3>
		<p>Diese Website nutz keine Cookies und keine Tracking Tools.</p>
		<p>
			Die Website wird mit den Diensten von Netlify betrieben. Beim Aufrufen der Seite könne
			möglicherweise Daten, die zur Bereitstellung der Website benötigt werden, an Netlify
			übermittelt werden. Lese dafür bitte Netlify's Datenschutzerklärung:
			https://www.netlify.com/privacy/
		</p>
		<p>
			Beim Gebrauch der Website werden Bilder von dem Dienst Unsplash eingebunden. Bei der Anfrage
			können unter Umständen Daten an Unsplash's Server übertragen werden. Lese dafür bitte
			Unsplash's Datenschutzerklärung: https://unsplash.com/privacy
		</p>
		<p>
			Ansonsten verzichte ich bewusst auf Einbindung von Drittanbietern, um einen möglichst hohen
			Datenschutz für Dich zu gewähren!
		</p>
	</div>
</Box>
