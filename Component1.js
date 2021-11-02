import React, { Component } from 'react'
import { Text, View} from 'react-native'
import styles from './MyStyles'

class Component1 extends Component
{
    render() {
        return(
            <View>
                <Text style={styles.text}>First Component</Text>
            </View>
        );
    }
}

export default Component1;
