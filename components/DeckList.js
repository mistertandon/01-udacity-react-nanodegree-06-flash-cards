import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { setNotification, clearNotificationObject } from './../utils/notification'
import { capitalizedFirstLetter } from './../utils/helpers'
import { AliceBlue, MediumSlateBlue } from '../utils/colors'
import { getDeckList } from './../actions/fcAction'


class DeckList extends Component {

  componentDidMount() {

    const { dispatchGetDeckList } = this.props;

    setNotification()
    dispatchGetDeckList();
  }

  navigateToDeck = (deck) => {

    this.props.navigation.navigate('Deck', { deck })
  }

  deckList = () => {

    const { fc, jsonParsedFc } = this.props;

    if (fc && fc.length) {

      return fc.map(deckTitle => (

        <TouchableOpacity key={`deck_container_${deckTitle}`}
          onPress={() => {

            this.navigateToDeck(deckTitle)
          }}
          style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: AliceBlue, margin: 5 }}>
          <Text>
            {capitalizedFirstLetter(deckTitle)}
          </Text>
          <Text>
            {jsonParsedFc[deckTitle]['questions'].length} Cards
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

  const { fc } = state.fc;
  console.log(fc);
  if ((fc === null) || (fc && Array.isArray(fc) && fc.length === 0)) {

    return {
      fc: [],
      jsonParsedFc: []
    }
  }

  if (fc && Object.keys(JSON.parse(fc)).length !== 0) {

    return {
      fc: Object.keys(JSON.parse(fc)),
      jsonParsedFc: JSON.parse(fc)
    }
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