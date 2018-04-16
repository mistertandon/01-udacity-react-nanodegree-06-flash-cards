import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export const FlipToEitherQuestionOrAnswerScreen = ({ displayLabel, flipScreen }) => {

  return (

    <TouchableOpacity onPress={flipScreen}>
      <Text>
        {displayLabel}
      </Text>
    </TouchableOpacity>

  )
}