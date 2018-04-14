import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class Card extends Component {

  _correctOptionLabel = 'Correct';

  _incorrectOptionLabel = 'Incorrect';

  renderQuestion = () => {

    return (
      <View>
        <Text>
          Hello from Card
        </Text>
      </View>
    )
  }

  renderCorrectOptions = () => {

    return (
      <TouchableOpacity>
        <Text>
          {this._correctOptionLabel}
        </Text>
      </TouchableOpacity>
    )

  }

  renderIncorrectOptions = () => {

    return (
      <TouchableOpacity>
        <Text>
          {this._incorrectOptionLabel}
        </Text>
      </TouchableOpacity>
    )
  }

  render() {

    return (
      <View>
        {this.renderQuestion()}
        {this.renderCorrectOptions()}
        {this.renderIncorrectOptions()}
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  const { index } = ownProps.navigation.state.params;
  console.log(index);
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {

  return {}
}

export default connect()(Card)