import React, { useRef, useState, useEffect } from 'react'
import { View, Text, useTVEventHandler } from 'react-native'
import Video from 'react-native-video'
import styles from './VideoPlayerScreen.styles'
import { IProps } from './VideoPlayerScreen.types'
import { SyntheticEvent } from '~/types/event'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import throttle from '~/utils/throttle'

function VideoPlayerScreen({ route }: IProps) {
  let { uri, id } = route.params

  const [error, setError] = useState<null | string>(null)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [paused, setPaused] = useState(false)

  const playerRef = useRef(null)

  function tvEventListener(event: any): void {
    console.log(event.eventType)
    switch (event.eventType) {
      case 'right':
        onSeek(30)
        break
      case 'left':
        onSeek(-30)
        break
      case 'longRight':
        onSeek(60)
        break
      case 'longLeft':
        onSeek(-60)
        break
    }
  }

  // async function saveCurrentTime() {
  //   let key = '@storage_movie_' + id
  //   let value = currentTime.toString()
  //   try {
  //     await AsyncStorage.setItem(key, value)
  //   } catch (e) {
  //     // saving error
  //   }
  // }

  // function onPaused() {
  //   setPaused(nextValue => (nextValue = !nextValue))
  // }

  function onError(e: SyntheticEvent) {
    if (e.hasOwnProperty('error')) {
      const err = JSON.stringify(e.error)
      setError(err)
    }
  }

  function onProgress(data) {
    setCurrentTime(data.currentTime)
  }

  function onSeek(seek) {
    let nextValue = currentTime + seek
    let updateTime = Math.max(0, Math.min(nextValue, duration))
    console.log(updateTime)

    setCurrentTime(updateTime)
    playerRef.current.seek(updateTime)
  }

  function onLoad(data: { duration: number }) {
    setDuration(Math.round(data.duration))
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
      ref={(ref: any) => (playerRef.current = ref)}
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
      onProgress={onProgress}
      onLoad={onLoad}
      paused={paused}
    />
  )
}

export default VideoPlayerScreen
