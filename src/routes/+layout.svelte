<script lang="ts">
	import { DevTools, Visualize } from '$lib/devtools'

	import '@picocss/pico'
	import '../app.css'
</script>

<DevTools />

<Visualize layout="root">
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

<svelte:head>
	<link rel="icon" href="https://fav.farm/🪶" />
	<title>Plume</title>
</svelte:head>

<style>
	.landing {
		color: inherit;
	}
</style>
