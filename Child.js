import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import styles from './MyStyles'

class Child extends Component {
  callme = () => {
    this.props.parentCallBack('This data goes to the parent')
  }

  render () {
    return (
      <View>
        <Text style={styles.text} onPress={this.callme}>
          {' '}
          Hello {this.props.name1}{' '}
        </Text>
      </View>
    )
  }
}

export default Child
