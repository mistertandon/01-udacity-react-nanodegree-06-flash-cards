import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {

  _addCardLabel = 'Add Card';

  componentDidMount() {

  }

  renderDeckTitle = () => {

    const { deck } = this.props.navigation.state.params;

    return (
      <View>
        <Text>
          {deck}
        </Text>
      </View>
    )
  }

  renderAddCardButton = () => {

    return (
      <TouchableOpacity>
        <Text>{this._addCardLabel}</Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View style={{ alignItems: 'center', margin: 5 }}>
        {this.renderDeckTitle()}
        {this.renderAddCardButton()}
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const { deck } = ownProps.navigation.state.params;
  const { fc } = state.fc;

  if (fc && JSON.parse(fc).hasOwnProperty(deck)) {

    return {
      cards: JSON.parse(fc)[deck]
    }
  }

  return {
    cards: []
  }
}

const mapDispatchToProps = (dispatch) => {

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Deck);