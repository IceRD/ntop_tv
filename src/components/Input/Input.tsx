import React, { useState, useRef, useCallback } from 'react'
import { TextInput, TextInputProps, TouchableHighlight } from 'react-native'
import styles from './Input.styles'
import { Colors } from '~/theme'

function Input(props: any) {
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
      style={[styles.input, focus ? styles.focus : styles.blur]}
      onFocus={onFocus}
      onBlur={onBlur}
      placeholderTextColor={Colors.text}
      cursorColor={Colors.main}
      autoFocus={false}
    />
  )
}

export default Input
