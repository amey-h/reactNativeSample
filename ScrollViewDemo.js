import React, { Component } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
import styles from './MyStyles'

class ScrollViewDemo extends Component {
  state = {
    employees: [
      {
        id: 0,
        name: 'Guru',
        salary: 2345.6
      },

      {
        id: 1,
        name: 'Sandip',
        salary: 88888888.2
      },
      {
        id: 3,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 4,
        name: 'Darshana',
        salary: 732828.2
      },
      {
        id: 5,
        name: 'Sweta',
        salary: 282822.3
      },
      {
        id: 6,
        name: 'Rohit',
        salary: 282822.3
      },
      {
        id: 7,
        name: 'Guru',
        salary: 2345.6
      },

      {
        id: 8,
        name: 'Sandip',
        salary: 88888888.2
      },
      {
        id: 9,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 10,
        name: 'Darshana',
        salary: 732828.2
      },
      {
        id: 11,
        name: 'Sweta',
        salary: 282822.3
      },
      {
        id: 12,
        name: 'Rohit',
        salary: 282822.3
      },
      {
        id: 13,
        name: 'Guru',
        salary: 2345.6
      },

      {
        id: 14,
        name: 'Sandip',
        salary: 88888888.2
      },
      {
        id: 15,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 16,
        name: 'Darshana',
        salary: 732828.2
      },
      {
        id: 17,
        name: 'Sweta',
        salary: 282822.3
      },
      {
        id: 18,
        name: 'Rohit',
        salary: 282822.3
      },
      {
        id: 19,
        name: 'Guru',
        salary: 23459.6
      },

      {
        id: 20,
        name: 'Sandip',
        salary: 88888888.2
      },
      {
        id: 21,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 22,
        name: 'Darshana',
        salary: 732828.2
      },
      {
        id: 23,
        name: 'Sweta',
        salary: 282822.3
      },
      {
        id: 24,
        name: 'Rohit',
        salary: 282822.3
      },
      {
        id: 25,
        name: 'Guru',
        salary: 2345.6
      },

      {
        id: 26,
        name: 'Sandip',
        salary: 88888888.2
      },
      {
        id: 27,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 28,
        name: 'Darshana',
        salary: 732828.2
      },
      {
        id: 29,
        name: 'Sweta',
        salary: 282822.3
      },
      {
        id: 30,
        name: 'Rohit',
        salary: 282822.3
      }
    ]
  }

  calculateSalary = (empObj) => {
      if(empObj.salary <= 50000) {
        bonus = (empObj.salary*10)/100
        console.log("Bonus: "+bonus);
      }
  }

  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <ScrollView>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold'
            }}
          >
            Employee Details
          </Text>
          
          {this.state.employees.map((empObj, idx) => (
            <View key = {empObj.id} style={styles.item}>
            <Text onPress={() => this.calculateSalary(empObj)}>
              {idx + 1} {empObj.name}
            </Text>
            </View>
          ))}
          
        </ScrollView>
      </View>
    )
  }
}

export default ScrollViewDemo
