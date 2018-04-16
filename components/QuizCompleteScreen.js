import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { setNotification, clearNotificationObject } from './../utils/notification'

export class QuizCompleteScreen extends Component {

  state = {
    totalQuestions: null,
    correctQuestions: null
  }

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

    if (totalQuestions !== null && correctQuestions !== null) {

      return (

        <View>
          <Text>
            Right Answer {correctQuestions} out of {totalQuestions} questions.
          </Text>
        </View>

      )
    } else {

      return null;
    }
  }
}