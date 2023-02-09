import { writable } from 'svelte/store'

const devTools = writable({
	layout: false
})

export default devTools
