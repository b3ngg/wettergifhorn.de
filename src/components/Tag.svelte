<script lang="ts">
  const categories = [
    { keywords: ['sonnig'], h: 44, s: 94, l: 58 },
    { keywords: ['gefährlich', 'gefahr'], h: 5, s: 60, l: 51 },
  ];

  const colors = (value: string): [string, string] => {
    for (const category of categories) {
      for (const keyword of category.keywords) {
        if (value.includes(keyword)) {
          return [
            `hsl(${category.h}, ${category.s}%, ${category.l}%)`,
            `hsl(${category.h}, ${category.s}%, 94%)`,
          ];
        }
      }
    }

    return ['var(--c-blue)', 'var(--c-soft-blue)'];
  };

  export let value: string;
</script>

<div style="color: {colors(value)[0]}; background-color: {colors(value)[1]};">
  {value}
</div>

<style>
  div {
    background-color: var(--c-soft-blue);
    color: var(--c-blue);
    padding: 0.05rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    margin-right: 0.4rem;
    margin-bottom: 0.8rem;
    font-weight: 500;
  }
</style>
