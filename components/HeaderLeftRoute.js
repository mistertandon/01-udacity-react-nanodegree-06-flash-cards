import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const HeaderLeftRoute = ({ navigateToRoute }) => {

  return (

    <TouchableOpacity onPress={navigateToRoute} style={{ marginLeft: 10 }}>
      <Text>
        <MaterialCommunityIcons name='arrow-left' size={20} />
      </Text>
    </TouchableOpacity>

  )
}