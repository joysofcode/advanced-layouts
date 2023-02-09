<script lang="ts">
	import { page } from '$app/stores'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h2 class="serif capitalize">#{$page.params.tag}</h2>

{#each data.quotesByTag as quote}
	<article>
		<p class="serif">
			“{quote.text}” — {quote.author}
		</p>

		{#each quote.tags as tag}
			<a href="/quotes/tags/{tag}">#{tag}</a>
		{/each}

		<footer>
			<a href="/quotes/id/{quote.id}">Share</a>
		</footer>
	</article>
{/each}
