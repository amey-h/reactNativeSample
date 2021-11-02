import React, {
	Component
}
from 'react'
import {
	Button, Text, View, StyleSheet
}
from 'react-native'
class MyEmployee extends Component {
	static company = "Vodafone" // static
	justName = "Rose" // non-static
	state = {
		myLocation: "Bangalore"
	}
	render() {
		constructor() {
			alert("constructor is called")
			this.empIad = 1;
			this.empName = "Guru";
			this.empSalary = 2222;
			this.justName = 'Ms. ' + this.justName;
		}
		return( < View > < Text > {
			"Welcome " + this.empName + " You are working for " + MyEmployee.company
		} < /Text> < Text > Welcome {
			this.justName
		} < /Text> < /View>);
	}
}
export default MyEmployee