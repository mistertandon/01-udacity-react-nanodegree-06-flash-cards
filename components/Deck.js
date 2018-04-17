import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { LightBlue, Red, Lime } from './../utils/colors'
import Card from './Card'
import { HeaderLeftRoute } from './HeaderLeftRoute'

class Deck extends Component {

  _addCardLabel = 'Add Card';

  _startQuizLabel = 'Start Quiz';

  static navigationOptions = ({ navigation }) => {

    const { deck } = navigation.state.params;

    return {

      title: `${deck}`,
      headerLeft: <HeaderLeftRoute navigateToRoute={
        () => {
          navigation.navigate('Decks')
        }
      } />
    }
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

  navigateToAddCardScreen = () => {

    const { deck } = this.props.navigation.state.params;

    this.props.navigation.navigate('AddCard', { deck })
  }

  renderAddCardButton = () => {

    return (

      <TouchableOpacity style={{ marginTop: 40, backgroundColor: Red }}
        onPress={() => {

          this.navigateToAddCardScreen()
        }}>
        <Text>{this._addCardLabel}</Text>
      </TouchableOpacity>

    )
  }

  renderStartQuizButton = () => {

    const { deck } = this.props.navigation.state.params;

    return (

      <TouchableOpacity style={{ marginTop: 40, backgroundColor: Lime }}
        onPress={() => {

          this.props.navigation.navigate('Card', {
            deck
          })
        }}
      >
        <Text>{this._startQuizLabel}</Text>
      </TouchableOpacity>

    )
  }

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', margin: 5, justifyContent: 'space-around' }}>

        {this.renderDeckTitle()}

        <View>
          {this.renderAddCardButton()}
          {this.renderStartQuizButton()}
        </View>

      </View >
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  console.log(state);

  const { deck } = ownProps.navigation.state.params;
  const { fc } = state.fc;

  if (fc && JSON.parse(fc).hasOwnProperty(deck)) {

    return {
      cards: JSON.parse(fc)[deck].questions
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