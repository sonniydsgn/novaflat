import type { HTMLAttributes } from 'astro/types'

export interface CallToAction extends HTMLAttributes<'button'> {
	tier?: 'primary' | 'link'
	text?: string
	class?: string
	link?: string
	type?: 'button' | 'submit' | 'reset'
}
