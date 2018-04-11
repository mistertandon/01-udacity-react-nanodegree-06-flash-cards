import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { getDeckList } from './../actions/deckAction'
import Deck from './Deck'

class DeckList extends Component {

  componentDidMount() {

    const { dispatchGetDeckList } = this.props;

    dispatchGetDeckList();
  }

  deckList = () => {

    const { deck } = this.props.deck;

    if (deck && deck.length) {

      return deck.map(deckInfo => (

        <View key={`deck_container_${deckInfo.name}`}>
          <Text key={`deck_name_${deckInfo.name}`}>
            {deckInfo.name}
          </Text>
        </View>

      ))
    } else {

      return (

        <View key={`deck_container`}>
          <Text key={`deck_name`}>
            No deck Exist
          </Text>
        </View>

      )
    }
  }

  render() {



    return (

      <View style={{ flex: 1 }}>

        {this.deckList()}

      </View>

    )
  }
}

const mapStateToProps = (state) => {

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