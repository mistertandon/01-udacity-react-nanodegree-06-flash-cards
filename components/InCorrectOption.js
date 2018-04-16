import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export const InCorrectOption = ({ handleClick }) => {

  return (

    <TouchableOpacity style={{ marginTop: 10, backgroundColor: Red }}
      onPress={handleClick}
    >
      <Text>
        InCorrectOption
      </Text>
    </TouchableOpacity>

  )
}