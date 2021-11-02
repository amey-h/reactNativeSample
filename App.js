import { StatusBar } from 'expo-status-bar'
import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styles from './MyStyles'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// stateless component - we can go for function based component

function HomeScreen({navigation}) {
  return (
    <View>

      <Text> Home Screen </Text>
      <Button
        title="Go to Details1"
        onPress={() => navigation.navigate('Details1',
          {
            empId: 14,
            empName:"Amey",
        }
        )}
        />
    </View>

  )
}


function DetailsScreen1({ route, navigation }) {
  
  const { empId, empName } = route.params;

  return (
    <View>

      <Text> Details Screen 1 </Text>

      <Text> Data Manipulation: {empId+200} </Text>
      <Text> empId: {empId} and empName: {empName}</Text>

      <Button
        title="Go to 2nd screen - Details 2"
        onPress={() => navigation.navigate('Details2')}
        />

    </View>

  )
}

function DetailsScreen2({navigation}) {
  return (
    <View>

      <Text> Details Screen 2 </Text>

      <Button
        title="Go Home"
        onPress={()=>navigation.navigate('Home')}/>

      <Button
        title="Go Back"
        onPress={()=>navigation.goBack()}/>
        
    </View>

  )
}

const Stack = createNativeStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details1" component={DetailsScreen1}/>
        <Stack.Screen name="Details2" component={DetailsScreen2}/>
      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;
