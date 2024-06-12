import { Fetcher } from '../../../shared/services/fetcher/Fetcher'
import { IDeleteUser, IFetchUsers, IUser } from './types'

// сущность для получения / удаления ... пользователей
const usersFetcher = new Fetcher<IUser[]>(
	'https://jsonplaceholder.typicode.com/users'
)

// получение пользователей
export const fetchUsers: IFetchUsers = async (limit) => {
	try {
		const data = await usersFetcher.get(limit) // Получаем только первые 5 пользователей
		return data
	} catch (error) {
		throw new Error('Failed to fetch users: ' + (error as Error).message)
	}
}

// удаление пользователей
export const deleteUser: IDeleteUser = async (userId) => {
	try {
		await usersFetcher.delete(userId)
	} catch (error) {
		throw new Error('Failed to delete user: ' + (error as Error).message)
	}
}
