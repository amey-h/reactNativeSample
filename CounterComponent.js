import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styles from './MyStyles'

class CounterComponent extends Component {
  state = { counter: 0 }

  increment = () => this.setState({ counter: this.state.counter + 1 })

  reset = () => this.setState({ counter: 0 })

  render () {
    return (
      <View>
        <Text> Hello Counter</Text>
        <Text> Counter: {this.state.counter}</Text>
        <Button title='Increment' color='red' onPress={this.increment} />

        <Button title='Reset' color='blue' onPress={this.reset} />
      </View>
    )
  }
}
export default CounterComponent
