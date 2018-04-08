import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import DeckReducer from './reducers/deckReducer'
import FlashCardStatusBar from './components/FlashCardStatusBar'
import DeckList from './components/DeckList'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS'
      }
    }
  }
)

export default class App extends React.Component {

  render() {

    return (

      <Provider store={createStore(DeckReducer)}>
        <View style={styles.container}>
          <FlashCardStatusBar backgroundColor={'#f8defe'} barStyle="lite-content" />
          <Tabs />
        </View>
      </Provider >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
});
