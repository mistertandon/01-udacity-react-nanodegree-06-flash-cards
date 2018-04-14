import {
  _getDecksList,
  _saveDeckTitle,
  _addCardToDeck
} from './../utils/api'

export const DECK_LIST = 'DECK_LIST'
export const FLASH_CARDS = 'FLASH_CARDS'

/**
 * @param {Object} fc
 */
export const flashCardsAction = (fc) => {

  return {
    type: FLASH_CARDS,
    fc
  }
}

export const getDeckList = () => {

  return dispatch => _getDecksList()
    .then(flashCardsData => dispatch(flashCardsAction(flashCardsData))
    )
}

export const saveDeckTitle = (deckTitle) => {

  return dispatch => _saveDeckTitle(deckTitle)
    .then(flashCardsData => dispatch(flashCardsAction(flashCardsData)))
}

export const addCardToDeck = (deckTitle, questionObj) => {

  return dispatch => _addCardToDeck(deckTitle, questionObj)
    .then(flashCardsData => dispatch(flashCardsAction(flashCardsData)))
}