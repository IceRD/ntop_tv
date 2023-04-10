import React, { useState, useCallback, useRef } from 'react'
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  findNodeHandle
} from 'react-native'
import styles from './CardSimilarMovies.styles'
import { IGalleryItem } from './CardSimilarMovies.types'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'

function CardSimilarMovies({
  movie_id,
  title,
  image,
  year,
  blockFocusRight,
  isLast
}: IGalleryItem) {
  const [focus, setFocus] = useState(false)

  const { navigationRef } = useNavigationRef()

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
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
      style={[
        styles.wrapper,
        focus ? styles.wrapperFocused : null,
        isLast && styles.itemLast
      ]}
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
      <View style={[styles.imageContainer]}>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default CardSimilarMovies
