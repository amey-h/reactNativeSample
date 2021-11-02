import React, { Component } from 'react'
import {
  Stylesheet,
  Button,
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'

class LoginComponent extends Component {
  state = {
    email: '',
    password: ''
  }

  login = (em, ps) => {
    //alert(em+" and "+ps)
    if (em == ps) alert('You are a valid user')
    else alert('you are an invalid user')
  }

  populateEmail = text => {
    this.setState({ email: text })
  }

  populatePassword = text => {
    this.setState({ password: text })
  }

  render () {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder='Enter your email id here'
          placeholderTextColor='lightblue'
          autoCapitalize='none'
          onChangeText={this.populateEmail}
        />

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder='Enter your password here'
          placeholderTextColor='lightblue'
          autoCapitalize='none'
          onChangeText={this.populatePassword}
        />

        <Button
          title='Login'
          onPress={() => this.login(this.state.email, this.state.password)}
        ></Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    height: 40,
    borderWidth: 1,
    borderColor: 'blue'
  }
})

export default LoginComponent
