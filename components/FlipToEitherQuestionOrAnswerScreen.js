import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { White, DodgerBlue } from '../utils/colors';

export const FlipToEitherQuestionOrAnswerScreen = ({ displayLabel, flipScreen }) => {

  return (

    <TouchableOpacity onPress={flipScreen}
      style={{ marginTop: 10, backgroundColor: White, height: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
    >
      <Text style={{ color: DodgerBlue }}>
        {displayLabel}
      </Text>
    </TouchableOpacity>

  )
}