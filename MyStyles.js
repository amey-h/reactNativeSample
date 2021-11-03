import { StyleSheet, Text, View } from 'react-native'

export default StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    padding: 10
  },

  container2: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 23,
    fontWeight: '400',
    padding: 10
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    margin: 2,
    borderColor: 'cyan',
    borderWidth: 1,
    backgroundColor: '#d2f7f1'
  },

  button: {
    alignItems: "center",
    backgroundColor: "#E60000",
    padding: 10,
    width: 300,
    height: 40,
    marginTop: 20,

  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  itemText: {
    color: 'black',
    fontSize: 14,
    marginTop:10,
  },
})
