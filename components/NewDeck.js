import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, StyleSheet, KeyboardAvoidingView } from 'react-native'
import t from 'tcomb-form-native'

import { DodgerBlue } from './../utils/colors'
import { saveDeckTitle } from './../actions/fcAction'

const Form = t.form.Form;

const DeckModel = t.struct(
  {
    name: t.String
  }
)

const DeckOptions = {
  fields: {
    name: {
      label: 'Deck Name',
      error: 'Without Deck name how are you going to create new Deck!!!'
    }
  }
}

class NewDeck extends Component {

  handleFormSubmit = () => {

    const formData = this._form.getValue();

    if (formData !== null) {

      this.props.dispatchSaveDeckTitle(formData.name);

      this.props.navigation.navigate('Deck', { deck: formData.name })
    }
  }

  render() {

    return (

      <View style={{ flex: 1, marginTop: 20 }}>

        <KeyboardAvoidingView behaviour='padding' style={{ marginLeft: 20, marginRight: 20 }}>

          <Form ref={formData => this._form = formData}
            options={DeckOptions}
            type={DeckModel} />

          <Button color={DodgerBlue}
            title='Add New Deck'
            onPress={this.handleFormSubmit}
            disabled={false}
            testID={'new_deck_submit'}
          />

        </KeyboardAvoidingView>
      </View>

    )
  }
}

const mapStateToProps = (state) => {

  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    dispatchSaveDeckTitle: (deckTitle) => {
      dispatch(saveDeckTitle(deckTitle))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);