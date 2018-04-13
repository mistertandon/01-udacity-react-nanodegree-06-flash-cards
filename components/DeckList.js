import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, MediumSlateBlue } from '../utils/colors'
import { getDeckList } from './../actions/deckAction'

class DeckList extends Component {

  componentDidMount() {

    const { dispatchGetDeckList } = this.props;

    dispatchGetDeckList();
  }

  deckList = () => {

    const { deck } = this.props.deck;

    if (deck && deck.length) {

      return deck.map(deckInfo => (

        <TouchableOpacity key={`deck_container_${deckInfo.name}`}
          onPress={() => {
            console.log('TouchableOpacity');
            this.props.navigation.navigate('Deck')
          }}
          style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: AliceBlue, margin: 5 }}>
          <Text>
            {deckInfo.name}
          </Text>
        </TouchableOpacity>

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