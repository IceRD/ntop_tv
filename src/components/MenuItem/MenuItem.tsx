import React, { FC, useState, useCallback } from 'react'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setFocusMenu, setFocusContent } from '~/store/focusSlice/focusSlice'
import { IProps } from './MenuItem.types'
import styles from './MenuItem.style'
import { Colors, Size } from '~/theme'

const MenuItem = ({ children, onPress }: IProps) => {
  const [focus, setFocus] = useState(false)
  const currentFocus = useSelector(state => state.focus.currentFocus)
  const dispatch = useDispatch()

  const _setFocusMenu = () => dispatch(setFocusMenu())
  const _setFocusContent = () => dispatch(setFocusContent())

  const onFocus = useCallback(() => {
    setFocus(true)
    _setFocusMenu()
  }, [currentFocus])

  const onBlur = useCallback(() => {
    setFocus(false)
    _setFocusContent()
  }, [currentFocus])

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={onPress}
      style={[styles.item, focus ? styles.itemFocused : null]}
      underlayColor={Colors.main}>
      <View style={[styles.icon]}>{children}</View>
    </TouchableHighlight>
  )
}

export default MenuItem
