import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class MyEmployeeList extends Component {
  state = {
    employees: [
      {
        id: 0,
        name: 'Guru',
        salary: 12345.6
      },

      {
        id: 1,
        name: 'Sandip',
        salary: 88888.2
      },
      {
        id: 3,
        name: 'Kamal',
        salary: 56789.2
      },
      {
        id: 4,
        name: 'Darshana',
        salary: 73282.2
      },
      {
        id: 5,
        name: 'Sweta',
        salary: 28282.3
      },
      {
        id: 6,
        name: 'Rohit',
        salary: 28282.3
      }
    ]
  }

  alertEmployeeSalary = (empObj) => {
        
        if(empObj.salary < 50000) {
            alert("Time to get hike")
        } else {
            alert("Salary is good: "+empObj.salary)
        }
    }

    maxSalaryHolder = () => {
        
        var max=this.state.employees[0].salary
        var maxSalaryHolder=this.state.employees[0].name

        for (var i=1;i<this.state.employees.length;i++)
        {
            if (this.state.employees[i].salary > max)
            {
                max=this.state.employees[i].salary;
                maxSalaryHolder=this.state.employees[i].name
            }
        }
        alert(maxSalaryHolder+' get a highest salary of '+max)


    }



  render () {
    return (
      <View>
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
        {this.state.employees.map((empObj, index) => (
          <Text onPress={ () => this.alertEmployeeSalary(empObj)}>
            {index + 1} {empObj.name}
          </Text>
        ))}

        <View>
            <Button title="Max Salary" onPress={()=>this.maxSalaryHolder()}></Button>
        </View>

      </View>
    )
  }
}
export default MyEmployeeList
