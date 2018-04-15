import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, Red, Lime } from './../utils/colors'

const DeckWithNoCard = () => {

  return (
    <View>
      <Text>
        No Question added to deck yet.
      </Text>
    </View>
  )
}

const QuizCompleteScreen = () => {

  return (
    <View>
      <Text>
        Congratulations!!! You have been completed quiz.
      </Text>
    </View>
  )
}

const QuestionScreen = () => {

  return (
    <View>
      <Text>
        QuestionScreen
      </Text>
    </View>
  )
}

const AnswerScreen = () => {

  return (
    <View>
      <Text>
        AnswerScreen
      </Text>
    </View>
  )
}

const FlipToAnswerScreen = () => {

  return (
    <View>
      <Text>
        FlipToAnswerScreen
      </Text>
    </View>
  )
}

const FlipToQuestionScreen = () => {

  return (
    <View>
      <Text>
        FlipToQuestionScreen
      </Text>
    </View>
  )
}

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

  render() {

    const { questionIndex, isQuestionScreen, isAnswerScreen, correctQuestions, inCorrectQuestions, totalQuestions } = this.state;
    const { deck } = this.props.navigation.state.params;
    const { cards } = this.props;

    if (cards && cards.length === 0) {

      return (
        <DeckWithNoCard />
      )
    }

    if (questionIndex && (questionIndex > cards.length - 1)) {

      return (
        <QuizCompleteScreen />
      )
    }

    if (isQuestionScreen) {

      return (

        <View>
          <QuestionScreen />
          <FlipToAnswerScreen />
          <CorrectOption />
          <InCorrectOption />
        </View>

      )
    }

    if (isAnswerScreen) {

      return (

        <View>
          <AnswerScreen />
          <FlipToQuestionScreen />
          <CorrectOption />
          <InCorrectOption />
        </View>

      )
    }
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