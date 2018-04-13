import React from 'react'
import { AsyncStorage } from 'react-native'

import { FLASH_CARDS_KEY } from './constants'

export const _saveDeckTitle = (deckTitle) => {

  return AsyncStorage
    .mergeItem(FLASH_CARDS_KEY, JSON.stringify({ [deckTitle]: [] }))
    .then(
      (result) => {

        return AsyncStorage
          .getItem(FLASH_CARDS_KEY)
      }
    );
}

export const _getDeck = (deck) => {

  return AsyncStorage
    .getItem(FLASH_CARDS_KEY)
    .then(result => {
      console.log(result);
      console.log(result[deck]);
    });
}