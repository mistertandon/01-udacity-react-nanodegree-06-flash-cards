import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, Red, Lime } from './../utils/colors'
import { DisplayEitherQuestionOrAnswerScreen } from './DisplayEitherQuestionOrAnswerScreen'
import { FlipToEitherQuestionOrAnswerScreen } from './FlipToEitherQuestionOrAnswerScreen'
import { DeckWithNoCard } from './DeckWithNoCard'
import { QuizCompleteScreen } from './QuizCompleteScreen'

const CorrectOption = () => {

  return (

    <TouchableOpacity style={{ marginTop: 10, backgroundColor: Red }}
      onPress={() => { }}
    >
      <Text>
        CorrectOption
      </Text>
    </TouchableOpacity>

  )
}

const InCorrectOption = () => {

  return (

    <TouchableOpacity style={{ marginTop: 10, backgroundColor: Red }}
      onPress={() => { }}
    >
      <Text>
        InCorrectOption
      </Text>
    </TouchableOpacity>

  )
}

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

  renderQuestion = () => {

    const { cards } = this.props;
    const { index } = this.props.navigation.state.params;

    return (

      <View style={{ margin: 10, height: 100, backgroundColor: AliceBlue, alignSelf: 'stretch' }}>
        <Text>
          {cards[index].question}
        </Text>
      </View>

    )
  }

  renderCorrectOptions = () => {

    const { index, deck } = this.props.navigation.state.params;

    return (
      <TouchableOpacity style={{ marginTop: 10, backgroundColor: Lime }}
        onPress={() => {

          this.props.navigation.navigate('Card', {
            index: index + 1,
            deck
          })
        }}
      >
        <Text>
          {this._correctOptionLabel}
        </Text>
      </TouchableOpacity>
    )

  }

  handleScreenFlipRequest = (flipToQuestionScreen, flipToAnswerScreen) => {

    console.log(flipToQuestionScreen);
    console.log(flipToAnswerScreen);

    this.setState(() => (
      {
        isQuestionScreen: flipToQuestionScreen,
        isAnswerScreen: flipToAnswerScreen,
      }
    ))
  }

  render() {

    const { questionIndex, isQuestionScreen, isAnswerScreen, correctQuestions, inCorrectQuestions, totalQuestions } = this.state;
    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;
    console.log(questionIndex);
    console.log(cards);
    if (cards && cards.length === 0) {

      return (
        <DeckWithNoCard />
      )
    }

    if (questionIndex !== null && (questionIndex > cards.length - 1)) {

      return (
        <QuizCompleteScreen />
      )
    }

    if (questionIndex !== null && isQuestionScreen) {

      return (

        <View>
          <DisplayEitherQuestionOrAnswerScreen isQuestion={true} isAnswer={false} questionText={cards[questionIndex]['question']} answerText={''} />
          <FlipToEitherQuestionOrAnswerScreen
            displayLabel={this._questionLabel}
            flipScreen={
              () => {
                this.handleScreenFlipRequest(false, true)
              }
            }
          />
          <CorrectOption />
          <InCorrectOption />
        </View>

      )
    }

    if (questionIndex !== null && isAnswerScreen) {

      return (

        <View>
          <DisplayEitherQuestionOrAnswerScreen isQuestion={false} isAnswer={true} questionText={''} answerText={cards[questionIndex]['answer']} />
          <FlipToEitherQuestionOrAnswerScreen
            displayLabel={this._answerLabel}
            flipScreen={
              () => {
                this.handleScreenFlipRequest(true, false)
              }
            }
          />
          <CorrectOption />
          <InCorrectOption />
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