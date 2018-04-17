import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, Red, Lime } from './../utils/colors'
import { QuizProgress } from './QuizProgress'
import { DisplayEitherQuestionOrAnswerScreen } from './DisplayEitherQuestionOrAnswerScreen'
import { FlipToEitherQuestionOrAnswerScreen } from './FlipToEitherQuestionOrAnswerScreen'
import { DeckWithNoCard } from './DeckWithNoCard'
import { QuizCompleteScreen } from './QuizCompleteScreen'
import { CorrectOption } from './CorrectOption'
import { InCorrectOption } from './InCorrectOption'

class Card extends Component {

  _correctOptionLabel = 'Correct';

  _incorrectOptionLabel = 'Incorrect';

  _questionLabel = 'Question';

  _answerLabel = 'Answer';

  state = {
    questionIndex: null,
    isQuestionScreen: true,
    isAnswerScreen: false,
    correctQuestions: null,
    inCorrectQuestions: null,
    totalQuestions: null
  }

  componentDidMount() {

    const { cards } = this.props;

    this.setState(() => (
      {
        questionIndex: 0,
        correctQuestions: 0,
        inCorrectQuestions: 0,
        totalQuestions: cards.length
      }
    ))

  }

  handleScreenFlipRequest = (flipToQuestionScreen, flipToAnswerScreen) => {

    this.setState(() => (
      {
        isQuestionScreen: flipToQuestionScreen,
        isAnswerScreen: flipToAnswerScreen,
      }
    ))
  }

  handleCorrectOptionClick = () => {

    this.setState(state => (
      {
        questionIndex: state.questionIndex + 1,
        isQuestionScreen: true,
        isAnswerScreen: false,
        correctQuestions: state.correctQuestions + 1
      }
    ))
  }

  handleIncorrectOptionClick = () => {

    this.setState(state => (
      {
        questionIndex: state.questionIndex + 1,
        isQuestionScreen: true,
        isAnswerScreen: false,
        inCorrectQuestions: state.inCorrectQuestions + 1
      }
    ))
  }

  render() {

    const { questionIndex, isQuestionScreen, isAnswerScreen, correctQuestions, inCorrectQuestions, totalQuestions } = this.state;
    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;

    if (cards && cards.length === 0) {

      return (
        <DeckWithNoCard />
      )
    }

    if (questionIndex !== null && (questionIndex > cards.length - 1)) {

      return (
        <QuizCompleteScreen totalQuestionsProp={totalQuestions}
          correctQuestionsProp={correctQuestions}
          deck={deck}
          navigation={this.props}
        />
      )
    }

    if (questionIndex !== null && isQuestionScreen) {

      return (

        <View style={{ flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10, justifyContent: 'space-between', paddingBottom: 100 }}>
          <View>
            <QuizProgress questionIndexProp={questionIndex + 1} totalQuestionsProp={totalQuestions} />
            <DisplayEitherQuestionOrAnswerScreen
              isQuestion={true}
              isAnswer={false}
              questionText={cards[questionIndex]['question']}
              answerText={''}
            />
            <FlipToEitherQuestionOrAnswerScreen
              displayLabel={this._answerLabel}
              flipScreen={
                () => {
                  this.handleScreenFlipRequest(false, true)
                }
              }
            />
          </View>
          <View>
            <CorrectOption handleClick={this.handleCorrectOptionClick} />
            <InCorrectOption handleClick={this.handleIncorrectOptionClick} />
          </View>
        </View>

      )
    }

    if (questionIndex !== null && isAnswerScreen) {

      return (

        <View style={{ flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10, justifyContent: 'space-between', paddingBottom: 100 }}>
          <View>
            <QuizProgress questionIndexProp={questionIndex + 1} totalQuestionsProp={totalQuestions} />
            <DisplayEitherQuestionOrAnswerScreen isQuestion={false} isAnswer={true} questionText={''} answerText={cards[questionIndex]['answer']} />
            <FlipToEitherQuestionOrAnswerScreen
              displayLabel={this._questionLabel}
              flipScreen={
                () => {
                  this.handleScreenFlipRequest(true, false)
                }
              }
            />
          </View>
          <View>
            <CorrectOption handleClick={this.handleCorrectOptionClick} />
            <InCorrectOption handleClick={this.handleIncorrectOptionClick} />
          </View>
        </View>

      )
    }

    return null
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

export default connect(mapStateToProps, mapDispatchToProps)(Card)