import {
	IUser,
	UserCard,
	UsersSkeletonList,
	useUsers,
} from '../../entities/user'

import { DeleteUserButton } from '../../features/DeleteUserButton'
import { ErrorMessage } from '../../shared/ui/errors/errorMessage'
import { EmptyMessage } from '../../shared/ui/messages/EmptyMessage'

import './style.css'
import { IUsersListProps } from './types'

const UsersList = ({ limit }: IUsersListProps) => {
	const { usersList, status, setUsersList } = useUsers(limit)

	const handleUsersFiltered = (prev: IUser[], user: IUser) => {
		return prev.filter((u) => u.id !== user.id)
	}

	return (
		<ul className='user-list'>
			{status === 'loading' && (
				<UsersSkeletonList limit={limit} usersList={usersList} />
			)}

			{status === 'error' && (
				<ErrorMessage textError={'Error receiving users...'} />
			)}

			{status === 'success' &&
				usersList.map((user) => (
					<UserCard
						key={user.id}
						user={user}
						button={
							<DeleteUserButton
								userId={user.id}
								onUpdateUsersList={() =>
									setUsersList((prev) => handleUsersFiltered(prev, user))
								}
							/>
						}
					/>
				))}

			{status === 'success' && usersList.length === 0 && (
				<EmptyMessage
					text={'Your list is empty'}
					subtext={'Add items to get started'}
				/>
			)}
		</ul>
	)
}

export default UsersList
