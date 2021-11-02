import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import styles from './MyStyles'
import Child from './Child'

class Parent extends Component {
  state = {
    msg: ' ' // empty msg
  }

  handleCallback = childData => {
    this.setState({ msg: childData })
  }

  render () {
    return (
      <View>
        <Text style={styles.text}> Initial Msg: {this.state.msg}</Text>

        <Child parentCallBack={this.handleCallback} />
      </View>
    )
  }
}

export default Parent
