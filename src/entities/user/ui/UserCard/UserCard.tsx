import './style.css'
import { IUserCardProps } from './types'

const UserCard = ({ user, button }: IUserCardProps) => {
	const {
		name,
		username,
		email,
		phone,
		website,
		address: {
			street,
			suite,
			city,
			zipcode,
			geo: { lat, lng },
		},
		company: { name: companyName, catchPhrase, bs },
	} = user

	return (
		<article className='user-card'>
			<header className='user-card__header'>
				<div className='user-card__avatar'></div>
				<div className='user-card__info'>
					<h2 className='user-card__name'>{name}</h2>
					<p className='user-card__username'>{username}</p>
					<div className='user-card__email'>{email}</div>
					<div className='user-card__phone'>{phone}</div>
					<div className='user-card__website'>{website}</div>
				</div>
			</header>
			<section className='user-card__address'>
				<address>
					<p className='user-card__address-item'>{street}</p>
					<p className='user-card__address-item'>{suite}</p>
					<p className='user-card__address-item'>{city}</p>
					<p className='user-card__address-item'>{zipcode}</p>
					<p className='user-card__address-item'>{lat}</p>
					<p className='user-card__address-item'>{lng}</p>
				</address>
			</section>
			<section className='user-card__company'>
				<h3 className='user-card__company-name'>{companyName}</h3>
				<p className='user-card__company-catch-phrase'>{catchPhrase}</p>
				<p className='user-card__company-bs'>{bs}</p>
			</section>
			{button && <div style={{ marginTop: '1rem' }}>{button}</div>}
		</article>
	)
}

export default UserCard
