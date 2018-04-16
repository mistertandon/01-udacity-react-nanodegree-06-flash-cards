import React from 'react'
import { View, Text } from 'react-native'

export const DisplayEitherQuestionOrAnswerScreen = ({ isQuestion, isAnswer, questionText, answerText }) => {

  return (

    <View>
      <Text>
        {isQuestion && (questionText)}
        {isAnswer && (answerText)}
      </Text>
    </View>

  )
}