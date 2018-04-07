import { DECK_LIST } from './../actions/deckAction'

function deckReducer(state = { deckList: [] }, action) {

  switch (action.type) {

    case DECK_LIST:
      return {
        ...state,
        deckList: [
          { name: 'ReactJs' },
          { name: 'Angular 5.x' },
          { name: 'AngularJs 1.x' },
        ]
      }
  }
}

export default deckReducer;