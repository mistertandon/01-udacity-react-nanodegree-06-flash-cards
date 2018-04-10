import { _deckAdd } from './../utils/api'

export const DECK_LIST = 'DECK_LIST'
export const DECK_ADD = 'DECK_ADD'


export const getDeckList = () => {

  return {
    type: DECK_LIST
  }
}

export const deckAddAction = (deck) => {

  return {
    type: DECK_ADD,
    deck
  }
}

export const deckAdd = (deck) => {

  return _deckAdd()
    .then(result => {
      console.log(result);
    })
}

