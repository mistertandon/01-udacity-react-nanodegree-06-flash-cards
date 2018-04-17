import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Animated } from 'react-native'
import { connect } from 'react-redux'

import { capitalizedFirstLetter } from './../utils/helpers'
import { DodgerBlue, White, LightRed } from './../utils/colors'
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

  state = {
    titleHeight: new Animated.Value(0),
    AddCardOrStartQuizButtonHeight: new Animated.Value(0)

  }

  componentDidMount() {

    let { titleHeight, AddCardOrStartQuizButtonHeight } = this.state;

    Animated.spring(titleHeight, { toValue: 80, speed: 10 }).start();
    Animated.spring(AddCardOrStartQuizButtonHeight, { toValue: 80, speed: 10 }).start();
  }

  renderDeckTitle = () => {

    let { titleHeight } = this.state;
    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;

    return (

      <Animated.View style={{ backgroundColor: LightRed, height: titleHeight, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', borderRadius: 15, marginLeft: 20, marginRight: 20 }}>
        <Text style={{ color: White, fontSize: 20 }}>
          {capitalizedFirstLetter(deck)}
        </Text>
        <Text style={{ color: White, marginTop: 5, fontSize: 16, fontStyle: 'italic' }}>
          {cards.length} Cards
        </Text>
      </Animated.View>

    )
  }

  navigateToAddCardScreen = () => {

    const { deck } = this.props.navigation.state.params;

    this.props.navigation.navigate('AddCard', { deck })
  }

  renderAddCardButton = () => {

    let { AddCardOrStartQuizButtonHeight } = this.state;

    return (

      <Animated.View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: White, height: AddCardOrStartQuizButtonHeight, borderRadius: 15 }}>
        <TouchableOpacity
          onPress={() => {

            this.navigateToAddCardScreen()
          }}>
          <Text style={{ color: DodgerBlue }}>{this._addCardLabel}</Text>
        </TouchableOpacity>
      </Animated.View>

    )
  }

  renderStartQuizButton = () => {

    let { AddCardOrStartQuizButtonHeight } = this.state;
    const { deck } = this.props.navigation.state.params;

    return (

      <Animated.View style={{ height: AddCardOrStartQuizButtonHeight, justifyContent: 'center', alignItems: 'center', backgroundColor: DodgerBlue, marginTop: 15, borderRadius: 15 }}>
        <TouchableOpacity
          onPress={() => {

            this.props.navigation.navigate('Card', {
              deck
            })
          }}
        >
          <Text style={{ color: White }}>{this._startQuizLabel}</Text>
        </TouchableOpacity>
      </Animated.View>

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