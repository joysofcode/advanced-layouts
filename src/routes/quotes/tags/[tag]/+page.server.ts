import type { PageServerLoad } from './$types'
import { getQuotesByTag } from '$lib/server/database'

export const load: PageServerLoad = async ({ params }) => {
	return { quotesByTag: getQuotesByTag(params.tag) }
}
