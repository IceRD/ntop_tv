import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native'
import Video from 'react-native-video'
import styles from './VideoPlayerScreen.styles'
import { IProps } from './VideoPlayerScreen.types'
import { SyntheticEvent } from '~/types/event'

function VideoPlayerScreen({ route }: IProps) {
  const { uri } = route.params

  const [error, setError] = useState<null | string>(null)
  const playerRef = useRef(null)

  function onError(e: SyntheticEvent) {
    if (e.hasOwnProperty('error')) {
      const err = JSON.stringify(e.error)
      setError(err)
    }
  }

  if (error) {
    return (
      <View style={[styles.wrapper, styles.wrapperError]}>
        <Text style={styles.error}>{error}</Text>
      </View>
    )
  }

  return (
    <Video
      source={{
        uri
      }}
      ref={playerRef}
      style={styles.wrapper}
      autoplay={true}
      controls={true}
      fullscreen={true}
      fullscreenOrientation="landscape"
      repeat={false}
      selectedAudioTrack={{
        type: 'index',
        value: 0
      }}
      selectedVideoTrack={{
        type: 'index',
        value: 0
      }}
      bufferConfig={{
        minBufferMs: 15000,
        maxBufferMs: 100000,
        bufferForPlaybackMs: 5000,
        bufferForPlaybackAfterRebufferMs: 10000
      }}
      onError={onError}
    />
  )
}

export default VideoPlayerScreen
