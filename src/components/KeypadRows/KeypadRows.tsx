import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { KeypadButton } from '~/components'
import styles from './KeypadRows.styles'

function KeypadRows({ rows }) {
  return (
    <View style={styles.wrapper}>
      {rows.map((row, index) => {
        return (
          <View style={styles.row}>
            {row !== null ? <KeypadButton title={row} /> : null}
          </View>
        )
      })}
    </View>
  )
}

export default KeypadRows
