import React, { useCallback, useState, useEffect, useRef } from 'react'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import styles from './SearchItem.style'
import { Colors } from '~/theme'
import { Input, VoiceButton } from '~/components'
import { IProps } from './SearchItem.types'

function SearchItem({ value, onPress }: IProps) {
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        onFocus={onFocus}
        onBlur={onBlur}
        style={[styles.item, focus && styles.focusItem]}
        underlayColor={Colors.mainBackground}
        onPress={() => onPress(value)}>
        <Text accessible={false} style={styles.text}>
          {value}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default SearchItem
