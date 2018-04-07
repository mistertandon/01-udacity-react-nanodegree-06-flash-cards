import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import DeckReducer from './reducers/deckReducer'

import DeckList from './components/DeckList'

export default class App extends React.Component {

  render() {

    return (

      <Provider store={createStore(DeckReducer)}>
        <View style={styles.container}>
          <DeckList />
        </View>
      </Provider >

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
