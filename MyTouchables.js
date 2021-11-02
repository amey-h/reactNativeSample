import React, { Component } from 'react'
import {
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform
} from 'react-native'

class MyTouchables extends Component {
  f1 () {
    alert('You have tapped the button')
  }

  f2 () {
    alert('You have long-pressed the button')
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.f1} underlayColor='white'>
          <View style={styles.buttonVar}>
            <Text style={styles.buttonText}> TouchableHighlight </Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this.f1}>
          <View style={styles.buttonVar}>
            <Text style={styles.buttonText}> TouchableOpacity </Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={this.f1}
          background={
            Platform.OS === 'android'
              ? TouchableNativeFeedback.SelectableBackground()
              : ''
          }
        >
          <View style={styles.buttonVar}>
            <Text style={styles.buttonText}>
              TouchableNativeFeedback{' '}
              {Platform.OS != 'android' ? '(Android only)' : ''}
            </Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={this.f1}
          onLongPress={this.f2}
          underlayColor='white'
        >
          <View style={styles.buttonVar}>
            <Text style={styles.buttonText}> Touchable without feedback </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default MyTouchables

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center'
  },

  buttonVar: {
    marginBottom: 20,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },

  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  }
})
