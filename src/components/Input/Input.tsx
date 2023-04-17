import React, { useRef, useCallback } from 'react'
import { TextInput, TouchableWithoutFeedback } from 'react-native'
import styles from './Input.styles'
import { Colors } from '~/theme'

function Input(props) {
  function onFocus() {
    touchableHighlightRef.current?.focus()
  }

  const touchableHighlightRef = useRef(null)
  const inputRef = useCallback(ref => {
    if (ref) {
      touchableHighlightRef.current = ref
    }
  }, [])

  return (
    <TouchableWithoutFeedback onFocus={onFocus} accessible={true}>
      <TextInput
        {...props}
        ref={inputRef}
        style={styles.input}
        placeholderTextColor={Colors.text}
        cursorColor={Colors.main}
        autoFocus={false}
      />
    </TouchableWithoutFeedback>
  )
}

export default Input
