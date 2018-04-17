import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

import { LightRed, White } from './../utils/colors'

export const InCorrectOption = ({ handleClick }) => {

  return (

    <TouchableOpacity onPress={handleClick}
      style={{ marginTop: 10, backgroundColor: LightRed, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 15 }}
    >
      <Text style={{ color: White }}>
        Incorrect Option
      </Text>
    </TouchableOpacity>

  )
}