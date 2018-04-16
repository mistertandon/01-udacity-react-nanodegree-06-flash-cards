import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const CorrectOption = ({ handleClick }) => {

  return (

    <TouchableOpacity style={{ marginTop: 10, backgroundColor: Red }}
      onPress={handleClick}
    >
      <Text>
        CorrectOption
      </Text>
    </TouchableOpacity>

  )
}