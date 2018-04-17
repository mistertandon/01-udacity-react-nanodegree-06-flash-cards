import React from 'react'
import { View, Text } from 'react-native'
import { DodgerBlue, White } from '../utils/colors';

export const DeckWithNoCard = () => {

  return (
    <View
      style={{ height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: DodgerBlue, marginTop: 30, marginLeft: 10, marginRight: 10, borderRadius: 15 }}
    >
      <Text style={{ color: White }}>
        No Question added to deck yet.
      </Text>
    </View>
  )
}