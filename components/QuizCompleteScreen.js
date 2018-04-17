import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { setNotification, clearNotificationObject } from './../utils/notification'

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

  render() {

    const { totalQuestions, correctQuestions, backToDeckLabel } = this.state;
    const { deck } = this.props;
    const { navigation } = this.props.navigation;

    if (totalQuestions !== null && correctQuestions !== null) {

      return (

        <View>

          <Text>
            Correct Answer {correctQuestions}
          </Text>

          <TouchableOpacity onPress={
            () => {

              navigation.navigate('Card', {
                deck
              })
            }
          }
            style={{ margin: 10 }}
          >
            <Text>
              {this._restartQuizLabel}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={
            () => {

              navigation.navigate('Deck', {
                deck
              })
            }
          }
            style={{ margin: 10 }}
          >
            <Text>
              {backToDeckLabel}
            </Text>
          </TouchableOpacity>

        </View>

      )
    } else {

      return null;
    }
  }
}