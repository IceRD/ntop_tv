import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from './KeypadRows.styles'

function KeypadRows({ rows }) {
  return (
    <View style={styles.wrapper}>
      {rows.map((row, index) => {
        return (
          <View style={styles.row}>
            {row !== null ? (
              <TouchableHighlight>
                <View style={styles.key}>
                  <Text style={styles.text}>{row}</Text>
                </View>
              </TouchableHighlight>
            ) : null}
          </View>
        )
      })}
    </View>
  )
}

export default KeypadRows
