import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableHighlight
} from 'react-native'
import styles from './Keypad.styles'
import { Input, KeypadRows, KeypadButton } from '~/components'
import { KEYS_DIGIT, KEYS_EN, KEYS_RU } from './keylist'

// function KeypadRows({ rows }) {
//   return (
//     <View style={styles.rows}>
//       {rows.map((row, index) => {
//         return <View>{row !== null ? <KeypadRows rows={row} /> : null}</View>
//       })}
//     </View>
//   )
// }

function Keypad() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.keyGroup}>
        <View>
          {KEYS_RU.map((rows, index) => {
            return <KeypadRows key={index} rows={rows} />
          })}
        </View>
        <View>
          {KEYS_DIGIT.map((rows, index) => {
            return <KeypadRows key={index} rows={rows} />
          })}
        </View>
        <View>
          <Text>{'O'}</Text>
          <Text>{'<'}</Text>
          <Text>{'>'}</Text>
          <Text>{'<<'}</Text>
          <Text>{'_'}</Text>
          <Text>{'<.'}</Text>
        </View>
      </View>
    </View>
  )
}

export default Keypad
