import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, MediumSlateBlue } from '../utils/colors'
import { getDeckList } from './../actions/fcAction'

class DeckList extends Component {

  componentDidMount() {

    const { dispatchGetDeckList } = this.props;
    console.log('dispatchGetDeckList');
    dispatchGetDeckList();
  }

  deckList = () => {

    const { fc } = this.props;

    if (fc && fc.length) {

      return fc.map(deckInfo => (

        <TouchableOpacity key={`deck_container_${deckInfo}`}
          onPress={() => {
            console.log('TouchableOpacity');
            this.props.navigation.navigate('Deck')
          }}
          style={{ height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: AliceBlue, margin: 5 }}>
          <Text>
            {deckInfo}
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

  if ((fc === null) || (fc && Array.isArray(fc) && fc.length === 0)) {

    return {
      fc: []
    }
  }

  if (fc && Object.keys(JSON.parse(fc)).length !== 0) {

    return {
      fc: Object.keys(JSON.parse(fc))
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