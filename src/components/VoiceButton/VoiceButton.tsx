import React, { useCallback, useState, useEffect, useRef } from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  FlatList
} from 'react-native'
import styles from './VoiceButton.style'
import { IProps } from './VoiceButton.types'
import { Colors } from '~/theme'
import Icon from '~/components/Icons'
import { verticalScale } from '~/utils/scaling'
import { useDispatch } from 'react-redux'
import { setQuery, setVariantListy } from '~/store/search/searchSlice'

import Voice, {
  SpeechRecognizedEvent,
  SpeechResultsEvent,
  SpeechErrorEvent
} from '@react-native-voice/voice'

function VoiceButton() {
  const [focus, setFocus] = useState(false)
  const [isVoice, setIsVoice] = useState(false)

  const dispatch = useDispatch()

  useEffect((): any => {
    Voice.onSpeechStart = onSpeechStart
    Voice.onSpeechEnd = onSpeechEnd
    Voice.onSpeechResults = onSpeechResults
    Voice.onSpeechRecognized = onSpeechRecognized
    Voice.onSpeechError = onSpeechError
    Voice.onSpeechPartialResults = onSpeechPartialResults

    return () => Voice.destroy().then(Voice.removeAllListeners)
  }, [])

  const onFocus = useCallback(() => {
    setFocus(true)
  }, [])

  const onBlur = useCallback(() => {
    setFocus(false)
  }, [])

  async function onStartButtonPress() {
    try {
      await Voice.start('ru-RU')
      setIsVoice(true)
    } catch (e) {
      // console.log(e)
    }
  }

  function onSpeechStart(e: any) {
    // console.log('onSpeechStart: ', e)
  }

  function onSpeechEnd(e: any) {
    // console.log('onSpeechEnd: ', e)
    setIsVoice(false)
  }

  function onSpeechResults(e: SpeechResultsEvent) {
    // console.log('onSpeechResults: ', e)
    const arr = e?.value

    if (arr?.length !== 0) {
      dispatch(setVariantListy({ variantList: arr }))
      dispatch(setQuery({ query: arr[0] }))
    }
  }

  function onSpeechRecognized(e: SpeechRecognizedEvent) {
    // console.log('onSpeechRecognized: ', e)
  }

  function onSpeechError(e: SpeechErrorEvent) {
    // console.log('onSpeechError: ', e)
    setIsVoice(false)
  }

  function onSpeechPartialResults(e: SpeechResultsEvent) {
    // console.log('onSpeechPartialResults: ', e)
  }

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        onFocus={onFocus}
        onBlur={onBlur}
        style={[
          styles.microphone,
          focus ? styles.microphoneFocused : null,
          isVoice ? styles.microphoneActive : null
        ]}
        underlayColor={'transparent'}
        onPress={onStartButtonPress}>
        <View style={styles.microphoneContainer}>
          <Icon
            name={'Microphone'}
            width={verticalScale(35)}
            height={verticalScale(35)}
            fill={'#fff'}
          />
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default VoiceButton
