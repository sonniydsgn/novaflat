import type { HTMLAttributes } from 'astro/types'

export interface CallToAction extends HTMLAttributes<'button'> {
	tier?: 'primary' | ''
	text?: string
	class?: string | undefined | null
	link?: string
	type?: 'button' | 'submit' | 'reset'
	modalTrigger?: '' | null
	modalClose?: boolean | null
}

export interface ModalTypes {
	name: string
	title: string
	desc?: string
	label: string
	class?: string
	size?: 'sm' | 'md'
}
