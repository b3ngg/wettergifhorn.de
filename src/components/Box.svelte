<script lang="ts">
	export let image: string = null;
</script>

<div class="mb-12 max-w-4xl rounded-xl bg-white/80 bg-gradient-to-b shadow-lg">
	{#if image}
		<div
			class="h-72 w-full rounded-t-xl bg-cover"
			style:background-image="url('{image
				.replace('w=1400', 'w=800')
				.replace('fm=jpg', 'fm=webp')}')"
		/>
	{/if}
	<div class="p-8 md:p-10">
		<slot />
	</div>
</div>
