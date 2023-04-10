import React, { useState, useCallback, useRef, useEffect } from 'react'
import { View, Image, TouchableHighlight, findNodeHandle } from 'react-native'
import styles from './CardGalleryItem.styles'
import { IGalleryItem } from './CardGalleryItem.types'

function GalleryItem({
  image,
  hasTVPreferredFocus,
  blockFocusRight,
  isLast
}: IGalleryItem) {
  const [focus, setFocus] = useState(false)

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  useEffect(() => {
    if (hasTVPreferredFocus) {
      setFocus(true)
    }
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
      style={[
        styles.wrapper,
        focus ? styles.wrapperFocused : null,
        isLast && styles.itemLast
      ]}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }>
      <View style={[styles.imageWrapper]}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
    </TouchableHighlight>
  )
}

export default GalleryItem
