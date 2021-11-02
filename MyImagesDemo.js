import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './MyStyles'

const MyImagesDemo = () => (
    <Image
        source = {require('../SampleApp/resources/images/vdf_image.jpg')}
        style = {{height: 200, widht: 300}}
    />

)

export default MyImagesDemo