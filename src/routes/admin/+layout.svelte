<script lang="ts">
	import { Visualize } from '$lib/devtools'
</script>

<Visualize layout="admin">
	<header>
		<nav>
			<ul>
				<li>
					<a href="/">🏠️ Plume</a>
				</li>
				<li>
					<a href="/admin/analytics">📊 Analytics</a>
				</li>
				<li>
					<a href="/admin/settings">⚙️ Settings</a>
				</li>
			</ul>
		</nav>
	</header>

	<main>
		<slot />
	</main>
</Visualize>

<style>
	header {
		padding-inline: 2rem;
		background: hsl(206 29% 6%);
		border-bottom: 1px solid hsl(206 29% 12%);
	}

	main {
		padding: 2rem;
		background: hsl(206 29% 8%);
	}
</style>
