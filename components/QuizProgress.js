import React from 'react'
import { View, Text } from 'react-native'
import { Foundation } from '@expo/vector-icons'

export const QuizProgress = ({ questionIndexProp, totalQuestionsProp }) => {

  return (

    <View>
      <Text>
        {questionIndexProp} &nbsp;<Foundation name='italic' size={20} /> &nbsp; {totalQuestionsProp}
      </Text>
    </View>

  )
}