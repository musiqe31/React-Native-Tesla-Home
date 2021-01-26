import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import styles from './styles'

const index = (props) => {
    const type = props.type;
    const backgroundColor = type === "primary" ? "black" : "white"
    const color = type === "primary" ? "white" : "black"

    return (
        <View style={styles.container}>
            <Pressable style={[styles.button, { backgroundColor: backgroundColor }]} onPress={() => props.onPress()}>
                <Text style={[styles.text, { color: color }]}>{props.content}</Text>
            </Pressable>
        </View>
    )
}

export default index


