import React from 'react'
import { View, Text } from 'react-native'

import { DodgerBlue, White } from './../utils/colors'

export const DisplayEitherQuestionOrAnswerScreen = ({ isQuestion, isAnswer, questionText, answerText }) => {

  return (

    <View
      style={{ height: 70, justifyContent: 'center', alignItems: 'center', backgroundColor: DodgerBlue, marginTop: 20, borderRadius: 15 }}
    >
      <Text style={{ color: White }}>
        {isQuestion && (questionText)}
        {isAnswer && (answerText)}
      </Text>
    </View>

  )
}