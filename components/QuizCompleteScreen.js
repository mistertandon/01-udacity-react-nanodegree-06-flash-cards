import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { setNotification, clearNotificationObject } from './../utils/notification'

export class QuizCompleteScreen extends Component {

  state = {
    totalQuestions: null,
    correctQuestions: null
  }

  _restartQuizLabel = 'Restart Quiz';

  _backToDeckLabel = 'Back To Deck';

  componentDidMount() {

    const { totalQuestionsProp, correctQuestionsProp } = this.props;

    this.setState(() => ({
      totalQuestions: totalQuestionsProp,
      correctQuestions: correctQuestionsProp
    }))

    clearNotificationObject()
      .then(() => setNotification)
  }

  render() {

    const { totalQuestions, correctQuestions } = this.state;
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
              {this._backToDeckLabel}
            </Text>
          </TouchableOpacity>

        </View>

      )
    } else {

      return null;
    }
  }
}