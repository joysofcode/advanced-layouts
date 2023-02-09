<script lang="ts">
	import { Visualize } from '$lib/devtools'
	import type { LayoutData } from './$types'

	export let data: LayoutData
</script>

<Visualize layout="quotes">
	<main class="space">
		<slot />

		<div class="space" style:--space="8rem">
			<h3 class="serif capitalize">Other quotes</h3>

			{#each data.quotes as quote}
				<article>
					<p class="serif">
						“{quote.text}” — {quote.author}
					</p>

					<div class="tags">
						{#each quote.tags as tag}
							<a href="/quotes/tags/{tag}">#{tag}</a>
						{/each}
					</div>

					<footer>
						<a href="/quotes/id/{quote.id}">Share →</a>
					</footer>
				</article>
			{/each}
		</div>
	</main>
</Visualize>

<style>
	.tags a:hover {
		text-decoration: none;
	}
</style>
