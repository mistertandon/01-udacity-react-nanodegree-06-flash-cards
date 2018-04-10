import { DECK_LIST } from './../actions/deckAction'

function deck(state = { deck: [] }, action) {

  switch (action.type) {

    case DECK_LIST:
      return {
        ...state,
        deck: [
          { name: 'ReactJs' },
          { name: 'Angular 5.x' },
          { name: 'AngularJs 1.x' },
        ]
      }

    default: return state
  }
}

export default deck;