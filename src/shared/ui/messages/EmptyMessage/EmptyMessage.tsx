import './styles.css'
import { IEmptyMessage } from './types'

const EmptyMessage = ({ text, subtext }: IEmptyMessage) => {
	return (
		<div className='empty-message'>
			<div className='empty-message__icon'>📭</div>
			<p className='empty-message__text'>{text}</p>
			<p className='empty-message__subtext'>{subtext}</p>
		</div>
	)
}

export default EmptyMessage
