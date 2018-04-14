import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { LightBlue, LightSkyBlue } from './../utils/colors'

class Deck extends Component {

  _addCardLabel = 'Add Card';

  _startQuizLabel = 'Start Quiz';

  componentDidMount() {

  }

  renderDeckTitle = () => {

    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;

    return (
      <View style={{ backgroundColor: LightBlue }}>
        <Text>
          {deck}
        </Text>
        <Text>
          {cards.length} Cards
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

  renderStartQuizButton = () => {

    return (
      <TouchableOpacity>
        <Text>{this._startQuizLabel}</Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', margin: 5, justifyContent: 'space-around' }}>
        {this.renderDeckTitle()}
        <View style={{ backgroundColor: LightSkyBlue }}>
          {this.renderAddCardButton()}
          {this.renderStartQuizButton()}
        </View>
      </View >
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