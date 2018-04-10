export const DECK_LIST = 'DECK_LIST'
export const DECK_ADD = 'DECK_ADD'

export const getDeckList = () => {

  return {
    type: DECK_LIST
  }
}

export const deckAdd = (deck) => {

  return {
    type: DECK_ADD,
    deck
  }
}