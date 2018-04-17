import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { LightGreen } from './../utils/colors'

export const CorrectOption = ({ handleClick }) => {

  return (

    <TouchableOpacity onPress={handleClick}
      style={{ marginTop: 10, backgroundColor: LightGreen, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
    >
      <Text>
        CorrectOption
      </Text>
    </TouchableOpacity>

  )
}