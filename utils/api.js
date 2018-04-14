import React from 'react'
import { AsyncStorage } from 'react-native'

import { FLASH_CARDS_KEY } from './constants'

export const _saveDeckTitle = (deckTitle) => {

  const deckObj = {
    [deckTitle]: {
      title: deckTitle,
      questions: []
    }
  }

  return AsyncStorage
    .mergeItem(FLASH_CARDS_KEY, JSON.stringify(deckObj))
    .then(() => _getDecksList());
}

export const _getDecksList = () => {

  return AsyncStorage
    .getItem(FLASH_CARDS_KEY);
}

export const _addCardToDeck = (deck, questionObj) => {

  return _getDecksList()
    .then(flashCardData => {

      const _fcData = JSON.parse(flashCardData);
      const fcData = {
        ..._fcData,
        [deck]: {
          ..._fcData[deck],
          questions: _fcData[deck]['questions'].concat([questionObj])
        }
      }

      return AsyncStorage
        .mergeItem(FLASH_CARDS_KEY, JSON.stringify(fcData))
        .then(() => _getDecksList());
    })
}