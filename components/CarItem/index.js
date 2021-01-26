import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import styles from './styles'
import StyleButton from '../Buttons'

const index = (props) => {

  const {name, tagline, image, taglineCTA} = props.car

  return (
    <View style={styles.carContainer}>
      {/* <ImageBackground source={require('../../assets/images/ModelS.jpeg')} style={styles.image} /> */}
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagline}{' '}
        <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
      <StyleButton type="primary" content="Custom Order" onPress={() => {
        console.log("Custom Order Pressed")
      }} />
      <StyleButton type="secondary" content="Existing Inventory" onPress={() => {
        console.log("Existing Inventory Pressed")
      }} />
      </View>
    </View>
  )
}

export default index

