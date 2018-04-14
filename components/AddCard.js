import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'

import { addCardToDeck } from './../actions/fcAction'

const Form = t.form.Form;

const CardModel = t.struct(
  {
    q: t.String,
    a: t.String
  }
)

const CardModelOptions = {
  fields: {
    q: {
      label: 'Question',
      error: 'Question you would like to add in quiz, type down here!!!'
    },
    a: {
      label: 'Answer',
      error: 'Provide answer of above question, will help user to know answer.'
    }
  }
}

class AddCard extends Component {

  handleQuestionAddRequest = () => {

    const { dispatchAddCardToDeck } = this.props;
    const { deck } = this.props.navigation.state.params;
    const formData = this._form.getValue();

    if (formData !== null) {

      const questionObj = {
        question: formData.q,
        answer: formData.a
      }

      dispatchAddCardToDeck(deck, questionObj);
      this.props.navigation.navigate('Deck', { deck })
    }

  }

  render() {

    return (
      <View>
        <View style={{ margin: 10 }}>
          <Form ref={formData => this._form = formData}
            options={CardModelOptions}
            type={CardModel}
          />
        </View>
        <View style={{ borderWidth: 1 }}>
          <Button
            title={'Add Question'}
            onPress={this.handleQuestionAddRequest}
          />
        </View>
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
    dispatchAddCardToDeck: (deck, questionObj) => {
      dispatch(addCardToDeck(deck, questionObj))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard)