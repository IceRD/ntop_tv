import React, { useState, useRef, useCallback } from 'react'
import { TextInput, TouchableHighlight } from 'react-native'
import styles from './Input.styles'
import { Colors } from '~/theme'

function Input(props) {
  const [focus, setFocus] = useState<boolean>(false)

  function onFocus() {
    setFocus(true)
  }

  function onBlur() {
    setFocus(false)
  }

  return (
    <TextInput
      {...props}
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.input, focus ? styles.focus : styles.blur]}
      placeholderTextColor={Colors.text}
      cursorColor={Colors.main}
      autoFocus={false}
    />
  )
}

export default Input
