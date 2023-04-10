import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import Video from 'react-native-video'
import styles from './VideoPlayerScreen.styles'

function VideoPlayerScreen({ route }) {
  const { uri } = route.params

  const playerRef = useRef(null)

  return (
    <Video
      source={{ uri }}
      ref={playerRef}
      style={styles.wrapper}
      autoplay={true}
      controls={true}
      fullscreen={true}
      fullscreenOrientation="landscape"
      repeat={true}
    />
  )
}

export default VideoPlayerScreen
