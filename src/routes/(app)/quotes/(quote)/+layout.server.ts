import type { LayoutServerLoad } from './$types'
import { getQuotes } from '$lib/server/database'

export const load: LayoutServerLoad = async () => {
	return { quotes: getQuotes() }
}
