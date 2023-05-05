import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './KeypadButton.styles'

function KeypadButton({ title }) {
  return (
    <TouchableHighlight>
      <View style={styles.key}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default KeypadButton
