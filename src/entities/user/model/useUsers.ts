import { useEffect, useState } from 'react'

import { timer } from '../../../shared/lib/timer'
import { fetchUsers } from './services'
import { IUser, IUserStatus } from './types'

interface IUseUsersReturn {
	usersList: IUser[]
	status: IUserStatus
	setUsersList: React.Dispatch<React.SetStateAction<IUser[]>>
}

export const useUsers = (limit?:number): IUseUsersReturn => {
	const [usersList, setUsersList] = useState<IUser[]>([])
	const [status, setStatus] = useState<IUserStatus>('idle')

	const fetchData = async () => {
		setStatus('loading') // Устанавливаем состояние загрузки перед запросом данных
		try {
			// Имитируем задержку в 1 секунду перед запросом данных
			await timer(1000)

			const users = await fetchUsers(limit) // Получаем пользователей с учетом лимита
			setUsersList(users)
			setStatus('success') // Устанавливаем состояние успешной загрузки
		} catch (error) {
			console.error('Error fetching users:', error)
			setStatus('error') // Устанавливаем состояние ошибки
		}
	}

	useEffect(() => {
		fetchData()
	}, [limit])

	return { usersList, status, setUsersList }
}
