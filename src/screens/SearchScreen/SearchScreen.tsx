import React from 'react'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import styles from './SearchScreen.styles'
import { Input, Keypad } from '~/components'

function SearchScreen() {
  return (
    <ScrollView style={styles.wrapper}>
      <Input
        placeholder="Поиск ..."
        inputMode="text"
        selectTextOnFocus={false}
        editable={false}
      />

      {/* <Keypad /> */}
    </ScrollView>
  )
}

export default SearchScreen
