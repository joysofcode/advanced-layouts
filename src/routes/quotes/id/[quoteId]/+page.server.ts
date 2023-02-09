import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { getQuoteById } from '$lib/server/database'

export const load: PageServerLoad = async ({ params }) => {
	const quote = getQuoteById(params.quoteId)

	if (!quote) {
		throw error(404)
	}

	return { quote }
}
