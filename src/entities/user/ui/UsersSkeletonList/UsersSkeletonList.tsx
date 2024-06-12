import UserCardSkeleton from '../UserCardSkeleton/UserCardSkeleton'
import { IUsersSkeletonListProps } from './types'

const UsersSkeletonList = ({ limit, usersList }: IUsersSkeletonListProps) => {
	const skeletonCount = limit ?? usersList.length

	return (
		<>
			{Array.from({ length: skeletonCount }).map((_, index) => (
				<UserCardSkeleton
					key={index}
					backgroundColor='var(--secondary--white)'
				/>
			))}
		</>
	)
}

export default UsersSkeletonList
