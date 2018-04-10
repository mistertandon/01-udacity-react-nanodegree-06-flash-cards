import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { TabNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import { AliceBlue, Azure } from './utils/colors'
import DeckReducer from './reducers/deckReducer'
import FlashCardStatusBar from './components/FlashCardStatusBar'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'DECKS'
      }
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck'
      }
    }
  }, {
    tabBarOptions: {
      activeBackgroundColor: AliceBlue,
      inactiveBackgroundColor: Azure
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
