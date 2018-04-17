import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { MediumSeaGreen, White } from './../utils/colors'

export const CorrectOption = ({ handleClick }) => {

  return (

    <TouchableOpacity onPress={handleClick}
      style={{ marginTop: 10, backgroundColor: MediumSeaGreen, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
    >
      <Text style={{ color: White }}>
        Correct Option
      </Text>
    </TouchableOpacity>

  )
}