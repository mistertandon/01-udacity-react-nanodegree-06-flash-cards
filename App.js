import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { FontAwesome } from '@expo/vector-icons'

import { AliceBlue, Azure } from './utils/colors'

import fc from './reducers/fcReducer'
import FlashCardStatusBar from './components/FlashCardStatusBar'
import Deck from './components/Deck'
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

const MainNavigator = StackNavigator(
  {
    Decks: {
      screen: Tabs
    },
    Deck: {
      screen: Deck
    }
  }
)

const appReducers = combineReducers(
  {
    fc
  }
)

const storeRef = createStore(
  appReducers,
  compose(
    applyMiddleware(thunk)
  )
)

export default class App extends React.Component {

  render() {

    return (

      <Provider store={storeRef}>
        <View style={styles.container}>
          <FlashCardStatusBar backgroundColor={'#f8defe'} barStyle="lite-content" />
          <MainNavigator />
        </View>
      </Provider >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
