import React from 'react'
import { AsyncStorage } from 'react-native'

import { FLASH_CARDS_KEY } from './constants'

export const _deckAdd = (deck) => {

  return AsyncStorage.getItem(FLASH_CARDS_KEY)
    .then(result => {
      console.log(result)
      return result;
    })
}