import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { capitalizedFirstLetter } from './../utils/helpers'
import { Red, DodgerBlue, White } from './../utils/colors'
import Card from './Card'
import { HeaderLeftRoute } from './HeaderLeftRoute'

class Deck extends Component {

  _addCardLabel = 'Add Card';

  _startQuizLabel = 'Start Quiz';

  static navigationOptions = ({ navigation }) => {

    const { deck } = navigation.state.params;

    return {

      title: capitalizedFirstLetter(deck),
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
      <View style={{ backgroundColor: Red, height: 80, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ color: White, fontWeight: 'bold', fontSize: 20 }}>
          {capitalizedFirstLetter(deck)}
        </Text>
        <Text style={{ color: White, marginTop: 5, fontWeight: 'bold', fontSize: 16, fontStyle: 'italic' }}>
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

      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: White, height: 60, borderRadius: 15 }}
        onPress={() => {

          this.navigateToAddCardScreen()
        }}>
        <Text style={{ color: DodgerBlue }}>{this._addCardLabel}</Text>
      </TouchableOpacity>

    )
  }

  renderStartQuizButton = () => {

    const { deck } = this.props.navigation.state.params;

    return (

      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: DodgerBlue, height: 60, marginTop: 15, borderRadius: 15 }}
        onPress={() => {

          this.props.navigation.navigate('Card', {
            deck
          })
        }}
      >
        <Text style={{ color: White }}>{this._startQuizLabel}</Text>
      </TouchableOpacity>

    )
  }

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', margin: 5, justifyContent: 'space-around' }}>

        {this.renderDeckTitle()}

        <View style={{ alignSelf: 'stretch', marginLeft: 20, marginRight: 20 }}>
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