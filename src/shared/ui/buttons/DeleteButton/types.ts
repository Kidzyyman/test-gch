import { HtmlHTMLAttributes } from 'react'

export interface IDeleteButton extends HtmlHTMLAttributes<HTMLButtonElement> {
	onClick: () => void
}
