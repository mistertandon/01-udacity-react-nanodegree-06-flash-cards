import { FLASH_CARDS } from './../actions/deckAction'

function deck(state = { deck: [] }, action) {

  switch (action.type) {

    case FLASH_CARDS:
      return {
        fc: action.fc
      }

    default: return state
  }
}

export default deck;