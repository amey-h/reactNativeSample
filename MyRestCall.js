import * as React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import styles from "./MyStyles";

class MyRestCall extends React.Component {
  url = "https://jsonplaceholder.typicode.com/users";

  state = {
    data: [],
  };

  getData = () => {
    fetch(this.url)
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json));
        this.setState({ data: json }); // JS object
      })
      .catch((error) => {
        console.log("Something went wrong...." + error);
      });
  };
  render() {
    return (
      <View style={styles.container1}>
        <Text>Employees Details</Text>
        <TouchableHighlight onPress={this.getData} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}> Get Data </Text>
          </View>
        </TouchableHighlight>

        {this.state.data.map((employee, index) => (
          <View>
            <Text style={styles.itemText}>
              {index + 1}. {employee.username} -- and -- {employee.email}
            </Text>
          </View>
        ))}
      </View>
    );
  }
}

export default MyRestCall;
