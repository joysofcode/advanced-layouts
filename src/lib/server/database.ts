type QuoteWithoutId = Omit<(typeof quotes)[0], 'id'>

function createRandomId() {
	return Math.random().toString(16).slice(2)
}

export function getQuotes() {
	return quotes
}

export function getQuoteById(id: string) {
	return quotes.find((quote) => quote.id === id)
}

export function getUniqueTags() {
	const tags = new Set()

	quotes.forEach((quote) => {
		quote.tags.forEach((tag) => {
			tags.add(tag)
		})
	})

	return [...tags]
}

export function getQuotesByTag(tag: string) {
	return quotes.filter((quote) => quote.tags.includes(tag))
}

export function addQuote(quote: QuoteWithoutId) {
	quotes = [...quotes, { id: createRandomId(), ...quote }]
}

export let quotes = [
	{
		id: createRandomId(),
		text: 'Try not. Do or do not. There is no try.',
		author: 'Yoda',
		source: 'Star Wars',
		tags: ['inspirational']
	},
	{
		id: createRandomId(),
		text: "I'm going to make him an offer he can't refuse.",
		author: 'Vito Corleone',
		source: 'The Godfather',
		tags: ['business']
	},
	{
		id: createRandomId(),
		text: 'All those moments will be lost in time, like tears in rain.',
		author: 'Roy Batty',
		source: 'Blade Runner (1982)',
		tags: ['meaning']
	},
	{
		id: createRandomId(),
		text: "Talent is a pursued interest. Anything that you're willing to practice, you can do.",
		author: 'Bob Ross',
		source: 'The Joy of Painting',
		tags: ['inspirational']
	}
]
