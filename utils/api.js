import React from 'react'
import { AsyncStorage } from 'react-native'

import { FLASH_CARDS_KEY } from './constants'

export const _saveDeckTitle = (deckTitle) => {

  return AsyncStorage
    .mergeItem(FLASH_CARDS_KEY, JSON.stringify({ [deckTitle]: [] }))
    .then(() => _getDecksList());
}

export const _getDecksList = () => {

  return AsyncStorage
    .getItem(FLASH_CARDS_KEY);
}