<script lang="ts">
  export let value: string;
</script>

<div>{value}</div>

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
