import React from 'react'
import { View, Text } from 'react-native'
import styles from './CardDescription.styles'

function CardDescription({ text }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default CardDescription
