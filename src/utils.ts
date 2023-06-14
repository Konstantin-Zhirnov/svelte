import { cards, disableButton } from './store'

export const getCard = async (): Promise<void> => {
  disableButton.update((disableButton) => true)
  const res = await fetch(`https://random-data-api.com/api/coffee/random_coffee`)
  const result = await res.json()
  cards.update((cards) => [...cards, result])
  disableButton.update((disableButton) => false)
}
