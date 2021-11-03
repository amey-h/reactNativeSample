import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MyRestCall from './MyRestCall'
import styles from './MyStyles'


class App extends Component {
  render() {
    return(
      <MyRestCall/>
    );
  }
}


export default App;
