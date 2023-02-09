<script lang="ts">
	import { Visualize } from '$lib/devtools'
</script>

<Visualize layout="app">
	<div class="container">
		<nav>
			<ul>
				<li>
					<a href="/" class="landing">🪶 Plume</a>
				</li>
			</ul>

			<ul>
				<li>
					<a href="/quotes">Quotes</a>
				</li>
				<li>
					<a href="/quotes/tags">Tags</a>
				</li>
				<li>
					<a href="/admin">Dashboard</a>
				</li>
			</ul>
		</nav>

		<slot />
	</div>
</Visualize>

<style>
	.landing {
		color: inherit;
	}
</style>
