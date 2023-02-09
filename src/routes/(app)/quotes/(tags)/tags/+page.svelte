<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h2 class="serif">Tags</h2>

<div class="tags">
	{#each data.tags as tag}
		<a href="/quotes/tags/{tag}">#{tag}</a>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		gap: 0.4rem;
	}

	.tags a {
		padding: 0.4rem 0.8rem;
		border-radius: 1rem;
		background: hsl(206 29% 10%);
		border: 1px solid hsl(206 29% 14%);
	}

	.tags a:hover {
		text-decoration: none;
	}
</style>
