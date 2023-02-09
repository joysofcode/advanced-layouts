import type { PageServerLoad } from './$types'
import { getUniqueTags } from '$lib/server/database'

export const load: PageServerLoad = async () => {
	return { tags: getUniqueTags() }
}
