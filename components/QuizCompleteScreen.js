import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { setNotification, clearNotificationObject } from './../utils/notification'
import { DodgerBlue, White, MediumSeaGreen, LightRed } from '../utils/colors';

export class QuizCompleteScreen extends Component {

  state = {
    totalQuestions: null,
    correctQuestions: null,
    backToDeckLabel: 'Back To Deck'
  }

  _restartQuizLabel = 'Restart Quiz';



  componentDidMount() {

    const { totalQuestionsProp, correctQuestionsProp, deck } = this.props;

    this.setState(() => ({
      totalQuestions: totalQuestionsProp,
      correctQuestions: correctQuestionsProp,
      backToDeckLabel: `Back To ${deck} Deck`
    }))

    clearNotificationObject()
      .then(() => setNotification)
  }

  renderResult = () => {

    const { correctQuestions } = this.state;

    return (

      <View
        style={{ height: 70, justifyContent: 'center', alignItems: 'center', backgroundColor: DodgerBlue, borderRadius: 15 }}
      >
        <Text style={{ color: White }}>
          Correct Answer {correctQuestions}
        </Text>
      </View>

    )
  }

  renderQuizRestartOption = () => {

    return (

      <TouchableOpacity onPress={
        () => {

          navigation.navigate('Card', {
            deck
          })
        }
      }
        style={{ marginTop: 10, backgroundColor: MediumSeaGreen, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
      >
        <Text style={{ color: White }}>
          {this._restartQuizLabel}
        </Text>
      </TouchableOpacity>

    )
  }

  renderNavigateToDeckOption = () => {

    const { backToDeckLabel } = this.state;
    const { deck } = this.props;
    const { navigation } = this.props.navigation;

    return (

      <TouchableOpacity onPress={
        () => {

          navigation.navigate('Deck', {
            deck
          })
        }
      }
        style={{ marginTop: 10, backgroundColor: LightRed, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
      >
        <Text style={{ color: White }}>
          {backToDeckLabel}
        </Text>
      </TouchableOpacity>

    )
  }

  render() {

    const { totalQuestions, correctQuestions } = this.state;

    if (totalQuestions !== null && correctQuestions !== null) {

      return (

        <View style={{ flex: 1, marginTop: 20, marginLeft: 10, marginRight: 10, justifyContent: 'space-between', paddingBottom: 150 }}>

          {this.renderResult()}

          <View>

            {this.renderQuizRestartOption()}
            {this.renderNavigateToDeckOption()}

          </View>
        </View>

      )
    } else {

      return null;
    }
  }
}