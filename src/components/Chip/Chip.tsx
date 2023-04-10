import React, { useState, useCallback, useRef } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  findNodeHandle
} from 'react-native'
import { IProps } from './Chip.types'
import styles from './Chip.styles'
import Colors from '~/theme/Colors'

function Chip({
  text,
  hasTVPreferredFocus,
  blockFocusRight,
  active,
  style,
  onPress
}: IProps) {
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  const touchableHighlightRef = useRef<HTMLDivElement>(null)

  const onRef = useCallback(ref => {
    if (ref) {
      touchableHighlightRef.current = ref
    }
  }, [])

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      hasTVPreferredFocus={hasTVPreferredFocus}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }
      style={[
        styles.wrapper,
        focus ? styles.wrapperFocused : null,
        active && styles.active,
        style
      ]}
      underlayColor={Colors.main}
      onPress={onPress}>
      <Text style={styles.chip}>{text} </Text>
    </TouchableHighlight>
  )
}

export default Chip
