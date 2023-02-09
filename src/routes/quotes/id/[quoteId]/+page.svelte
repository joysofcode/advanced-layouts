<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<h2 class="serif">Quote</h2>

<blockquote>
	<p class="serif">“{data.quote.text}”</p>
	<footer>
		<cite>- {data.quote.author}</cite>
	</footer>
</blockquote>
