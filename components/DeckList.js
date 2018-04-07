import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { getDeckList } from './../actions/deckAction'

class DeckList extends Component {

  render() {

    console.log(this.props);
    return (
      <View>
        <Text>
          Hello from DeckList component
        </Text>
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