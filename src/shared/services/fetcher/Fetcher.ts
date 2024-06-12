// сервис для запросов get,delete
export class Fetcher<T> {
	constructor(private url: string) {}

	async get(limit?: number): Promise<T> {
		let requestUrl = this.url
		if (limit) {
			requestUrl += `?_limit=${limit}`
		}
		const response = await fetch(requestUrl)
		if (!response.ok) {
			throw new Error('Failed to fetch data')
		}
		return response.json()
	}

	async delete(userId: number): Promise<void> {
		const response = await fetch(`${this.url}/${userId}`, {
			method: 'DELETE',
		})
		if (!response.ok) {
			throw new Error('Failed to delete user')
		}
	}
}
