<script lang="ts">
	import devTools from './store'

	export let layout: string
</script>

{#if $devTools.layout}
	<div data-layout={layout}>
		<slot />
	</div>
{:else}
	<slot />
{/if}

<style>
	[data-layout] {
		position: relative;
		border: 8px solid aqua;
	}

	[data-layout]::before {
		content: attr(data-layout) ' layout';
		position: absolute;
		left: 8px;
		font-weight: bold;
		text-transform: uppercase;
		color: aqua;
	}
</style>
