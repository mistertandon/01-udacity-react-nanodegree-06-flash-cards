import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { setNotification, clearNotificationObject } from './../utils/notification'
import { DodgerBlue, White } from '../utils/colors';

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

  render() {

    const { totalQuestions, correctQuestions, backToDeckLabel } = this.state;
    const { deck } = this.props;
    const { navigation } = this.props.navigation;

    if (totalQuestions !== null && correctQuestions !== null) {

      return (

        <View style={{ flex: 1, marginTop: 20, marginLeft: 10, marginRight: 10, justifyContent: 'space-between', paddingBottom: 150 }}>

          {this.renderResult()}
          <View>
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
        </View>

      )
    } else {

      return null;
    }
  }
}