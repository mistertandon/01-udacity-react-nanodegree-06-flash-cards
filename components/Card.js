import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { AliceBlue, Red, Lime } from './../utils/colors'

class Card extends Component {

  _correctOptionLabel = 'Correct';

  _incorrectOptionLabel = 'Incorrect';

  componentDidMount() {

    console.log(this.props);
    console.log('called: componentDidMount');
  }

  renderQuestion = () => {

    const { cards } = this.props;
    const { index } = this.props.navigation.state.params;

    return (

      <View style={{ margin: 10, height: 100, backgroundColor: AliceBlue, alignSelf:'stretch' }}>
        <Text>
          {cards[index].question}
        </Text>
      </View>

    )
  }

  renderCorrectOptions = () => {

    const { index, deck } = this.props.navigation.state.params;

    return (
      <TouchableOpacity style={{ marginTop: 10, backgroundColor: Lime }}
        onPress={() => {

          this.props.navigation.navigate('Card', {
            index: index + 1,
            deck
          })
        }}
      >
        <Text>
          {this._correctOptionLabel}
        </Text>
      </TouchableOpacity>
    )

  }

  renderIncorrectOptions = () => {

    const { index, deck } = this.props.navigation.state.params;

    return (

      <TouchableOpacity style={{ marginTop: 10, backgroundColor: Red }}
        onPress={() => {

          this.props.navigation.navigate('Card', {
            index: index + 1,
            deck
          })
        }}
      >
        <Text>
          {this._incorrectOptionLabel}
        </Text>
      </TouchableOpacity>

    )
  }

  render() {

    const { cards } = this.props;
    const { index, deck } = this.props.navigation.state.params;

    if (cards.length && (index <= cards.length - 1)) {

      return (

        <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
          {this.renderQuestion()}
          <View>
            {this.renderCorrectOptions()}
            {this.renderIncorrectOptions()}
          </View>
        </View>

      )
    } else {

      return (

        <View>
          {this.renderQuestion()}
          {this.renderCorrectOptions()}
          {this.renderIncorrectOptions()}
        </View>

      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {

  // console.log(state);
  // console.log(ownProps);

  const { deck } = ownProps.navigation.state.params;
  const { fc } = state.fc;

  if (fc && JSON.parse(fc).hasOwnProperty(deck)) {

    return {
      cards: JSON.parse(fc)[deck].questions
    }
  }

  return {
    cards: []
  }
}

const mapDispatchToProps = (dispatch) => {

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)