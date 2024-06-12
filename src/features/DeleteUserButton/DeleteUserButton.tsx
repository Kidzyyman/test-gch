import { deleteUser } from '../../entities/user'
import DeleteButton from '../../shared/ui/buttons/DeleteButton/DeleteButton'
import { IDeleteUserButtonProps } from './types'

const DeleteUserButton = ({
	userId,
	onUpdateUsersList,
}: IDeleteUserButtonProps) => {
	const handleDeleteUser = async () => {
		try {
			await deleteUser(userId)
			onUpdateUsersList()
		} catch (error) {
			console.error('Failed to delete user:', error)
		}
	}

	return <DeleteButton onClick={handleDeleteUser} />
}

export default DeleteUserButton
