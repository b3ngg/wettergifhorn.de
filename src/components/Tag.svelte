<script lang="ts">
	const categories = [
		{ keywords: ['sonnig'], h: 44, s: 94, l: 58 },
		{ keywords: ['gefährlich', 'gefahr'], h: 5, s: 60, l: 51 }
	];

	const colors = (value: string): [string, string] => {
		for (const category of categories) {
			for (const keyword of category.keywords) {
				if (value.includes(keyword)) {
					return [
						`hsl(${category.h}, ${category.s}%, ${category.l}%)`,
						`hsl(${category.h}, ${category.s}%, 94%)`
					];
				}
			}
		}

		return ['rgb(34 116 165)', 'rgb(34 116 165 / 0.14)'];
	};

	export let value: string;
</script>

<div
	class="my-1 mr-2 rounded-3xl p-0.5 px-4"
	style:color={colors(value)[0]}
	style:background-color={colors(value)[1]}
>
	{value}
</div>
