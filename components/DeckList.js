import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { getDeckList } from './../actions/deckAction'

class DeckList extends Component {

  componentDidMount() {

    const { dispatchGetDeckList } = this.props;

    dispatchGetDeckList();
  }

  render() {

    const { deckList } = this.props;

    return (

      <View>

        {
          deckList && deckList.length && deckList.map((deck) => (

            <Text key={deck.name}>
              {deck.name}
            </Text>
          ))
        }

      </View>
    )
  }
}

const mapStateToProps = (state) => {

  console.log(state);

  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    dispatchGetDeckList: () => {
      dispatch(getDeckList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList)