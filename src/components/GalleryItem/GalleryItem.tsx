import React, { useState, useCallback, useRef, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  findNodeHandle
} from 'react-native'
import styles from './GalleryItem.styles'
import { IGalleryItem } from './GalleryItem.types'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'

function GalleryItem({
  movie_id,
  title,
  image,
  year,
  hasTVPreferredFocus,
  blockFocusRight
}: IGalleryItem) {
  const [focus, setFocus] = useState(false)

  const { navigationRef } = useNavigationRef()

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

  const touchableHighlightRef = useRef(null)
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
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }
      onPress={() => {
        navigationRef.navigate(StackName.root, {
          params: {
            movie_id
          },
          screen: Routes.card
        })
      }}>
      <View>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default GalleryItem
