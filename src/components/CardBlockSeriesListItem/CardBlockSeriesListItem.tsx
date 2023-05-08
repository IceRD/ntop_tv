import React, { useState, useCallback, useRef, useEffect } from 'react'
import { Text, View, TouchableHighlight, findNodeHandle } from 'react-native'
import styles from './CardBlockSeriesListItem.styles'
import { IGalleryItem } from './CardBlockSeriesListItem.types'
import { StackName } from '~/navigations/Navigation.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'

function CardBlockSeriesListItem({
  item,
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
        navigationRef.navigate(StackName.videoplayer, {
          uri: item.links.download,
          id: item.file_id
        })
      }}>
      <View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.time}>{item.metainfo.playtime}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default CardBlockSeriesListItem
