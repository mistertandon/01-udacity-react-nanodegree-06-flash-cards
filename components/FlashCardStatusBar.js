import React from 'react'
import { View, StatusBar } from 'react-native'
import { Constants } from 'expo'

const FlashCardStatusBar = ({ backgroundColor, ...props }) => (

  <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar translucent backgroundColor={backgroundColor} />
  </View>

)

export default FlashCardStatusBar;