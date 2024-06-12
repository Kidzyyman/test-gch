import { useState } from 'react'
import './style.css'
import { IDeleteButton } from './types'

const DeleteButton = ({ onClick }: IDeleteButton) => {
	const [isDeleting, setIsDeleting] = useState(false)

	const handleDelete = async () => {
		setIsDeleting(true)
		try {
			await onClick()
		} catch (error) {
			console.error('Failed to perform delete action:', error)
		} finally {
			setIsDeleting(false)
		}
	}

	return (
		<button
			className='delete-card-button'
			onClick={handleDelete}
			disabled={isDeleting}
		>
			{isDeleting ? 'Deleting...' : 'Delete'}
		</button>
	)
}

export default DeleteButton
