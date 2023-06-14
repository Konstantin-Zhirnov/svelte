import { writable } from 'svelte/store'
import type { CardType } from './types'

export const cards = writable<CardType[]>([])
export const disableButton = writable<boolean>(false)
