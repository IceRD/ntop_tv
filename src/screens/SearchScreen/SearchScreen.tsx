import React from 'react'
import { View, Text } from 'react-native'
import styles from './SearchScreen.styles'
import { Input } from '~/components'

function SearchScreen() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>SEARCH</Text>
      {/* <Input placeholder="Поиск ..." inputMode="text" selectTextOnFocus /> */}
    </View>
  )
}

export default SearchScreen
