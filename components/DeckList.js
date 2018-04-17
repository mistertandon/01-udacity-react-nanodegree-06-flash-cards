import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { setNotification, clearNotificationObject } from './../utils/notification'
import { capitalizedFirstLetter } from './../utils/helpers'
import { AliceBlue, MediumSlateBlue, LightSkyBlue } from '../utils/colors'
import { getDeckList } from './../actions/fcAction'


class DeckList extends Component {

  _emptyDeckListMessage = 'No Deck Exist';

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
          style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: LightSkyBlue, marginTop: 5, marginLeft: 10, marginRight: 10, borderRadius: 15 }}
          onPress={() => {

            this.navigateToDeck(deckTitle)
          }}
        >
          <Text style={{ fontSize: 18 }}>
            {capitalizedFirstLetter(deckTitle)}
          </Text>
          <Text style={{ marginTop: 5, fontSize: 15, fontStyle: 'italic' }}>
            {jsonParsedFc[deckTitle]['questions'].length} Cards
          </Text>
        </TouchableOpacity>

      ))
    } else {

      return (

        <View key={`deck_container`}
          style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: LightSkyBlue, marginTop: 5, marginLeft: 10, marginRight: 10, borderRadius: 15 }}
        >
          <Text key={`deck_name`}
            style={{ fontSize: 18 }}
          >
            {this._emptyDeckListMessage}
          </Text>
        </View>

      )
    }
  }

  render() {

    return (

      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.deckList()}
      </View>

    )
  }
}

const mapStateToProps = (state) => {

  const { fc } = state.fc;

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