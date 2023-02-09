import { z } from 'zod'
import type { Actions } from './$types'
import { addQuote } from '$lib/server/database'
import { fail } from '@sveltejs/kit'

export const actions: Actions = {
	default: async ({ request }) => {
		const formData = await request.formData()
		const data = Object.fromEntries(formData)

		const quoteSchema = z.object({
			text: z.string(),
			author: z.string(),
			source: z.string(),
			tags: z.string()
		})
		const result = quoteSchema.safeParse(data)

		if (!result.success) {
			return fail(400, {
				data,
				errors: result.error.flatten().fieldErrors
			})
		}

		if (result.success) {
			const quote = {
				...result.data,
				tags: result.data.tags.split(',')
			}
			addQuote(quote)
		}
	}
}
