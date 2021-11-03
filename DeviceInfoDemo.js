import React, { Component } from "react";
import {
  Text,
  View,
  Button
} from "react-native";
import DeviceInfo from 'react-native-device-info'

class DeviceInfoDemo extends React.Component {

 showInfo()
    {
        alert("My phone's brand name is "+DeviceInfo.getBrand());
        alert("Current Battery level is "+DeviceInfo.getBatteryLevelSync())
        alert("is my phone is charging? "+DeviceInfo.isBatteryCharging())
        alert("is location enabled?"+DeviceInfo.isLocationEnabledSync())
    }

    render()
    {

        return(
           
                <View>
                    <Text> Hello Device Info</Text>
                    <Button 
                        title="Show Device Information"
                        onPress={this.showInfo}>

                        </Button>
                </View>

           
        );
    }
}

export default DeviceInfoDemo
