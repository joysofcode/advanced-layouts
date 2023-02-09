<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	function getRandomQuote<Quote>(quotes: Quote[]) {
		const index = Math.floor(Math.random() * quotes.length)
		return quotes[index]
	}

	const quote = getRandomQuote(data.quotes)
</script>

<h2 class="serif capitalize">Random quote</h2>

<article>
	<p class="serif">
		“{quote.text}” — {quote.author}
	</p>

	{#each quote.tags as tag}
		<a href="/quotes/tags/{tag}">#{tag}</a>
	{/each}

	<footer>
		<a href="/quotes/id/{quote.id}">Share →</a>
	</footer>
</article>
