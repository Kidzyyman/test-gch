import ContentLoader from 'react-content-loader'
import { IChildrenProps } from '../../../../shared/types/children'
import './style.css'
import { IUserCardSkeletonProps } from './types'

const SkeletonContainer = ({ children }: IChildrenProps) => (
	<div className='skeleton-container'>{children}</div>
)

const UserCardSkeleton = ({ backgroundColor }: IUserCardSkeletonProps) => (
	<SkeletonContainer>
		<ContentLoader
			speed={2}
			width={400}
			height={331}
			viewBox='0 0 400 331'
			backgroundColor={backgroundColor}
			foregroundColor='#ecebeb'
		>
			<rect x='0' y='0' rx='20' ry='20' width='112' height='112' />
			<rect x='125' y='5' rx='10' ry='10' width='250' height='10' />
			<rect x='125' y='25' rx='10' ry='10' width='170' height='10' />
			<rect x='125' y='45' rx='10' ry='10' width='190' height='10' />
			<rect x='0' y='120' rx='10' ry='10' width='110' height='10' />
			<rect x='125' y='65' rx='10' ry='10' width='150' height='10' />
			<rect x='0' y='141' rx='10' ry='10' width='110' height='10' />
			<rect x='0' y='160' rx='10' ry='10' width='110' height='10' />
			<rect x='0' y='180' rx='10' ry='10' width='110' height='10' />
			<rect x='0' y='200' rx='10' ry='10' width='110' height='10' />
			<rect x='0' y='220' rx='10' ry='10' width='110' height='10' />
			<rect x='0' y='240' rx='10' ry='10' width='250' height='10' />
			<rect x='0' y='260' rx='10' ry='10' width='250' height='10' />
			<rect x='0' y='280' rx='10' ry='10' width='250' height='10' />
			<rect x='0' y='300' rx='10' ry='5' width='66' height='25' />
		</ContentLoader>
	</SkeletonContainer>
)

export default UserCardSkeleton
