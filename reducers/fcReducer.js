import { FLASH_CARDS } from './../actions/fcAction'

function flashCard(state = { fc: [] }, action) {

  switch (action.type) {

    case FLASH_CARDS:
      return {
        fc: action.fc
      }

    default: return state
  }
}

export default flashCard;