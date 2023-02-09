<script lang="ts">
	import { DevTools } from '$lib/devtools'

	import '@picocss/pico'
	import '../app.css'
</script>

<svelte:head>
	<link rel="icon" href="https://fav.farm/🪶" />
	<title>Plume</title>
</svelte:head>

<DevTools />

<slot />
