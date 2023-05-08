import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableHighlight,
  ImageBackground
} from 'react-native'
import { IProps } from './ViewedScreen.types'
import styles from './ViewedScreen.styles'
import { urlImagePath } from '~/utils/urlImagePath'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'
import showInfo from '~/utils/showInfo'
import { useSelector } from 'react-redux'
import { viewedData } from '~/store/viewed/viewedSelectors'

function ViewedScreen({ route }: any) {
  const { navigationRef } = useNavigationRef()

  const [focus, setFocus] = useState<number>(0)
  const data = useSelector(viewedData)

  function onFocus(index: number) {
    setFocus(index)
  }

  if (data.length === 0) {
    return (
      <View style={styles.centered}>
        <Text style={styles.centeredText}> Список пуст ...</Text>
      </View>
    )
  }

  return (
    <>
      <FlatList
        columnWrapperStyle={styles.flatlist}
        numColumns={4}
        data={data}
        keyExtractor={item => item.movie_id}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight
              onFocus={() => onFocus(index)}
              style={[styles.card, focus === index && styles.focused]}
              key={item.key}
              onPress={() => {
                navigationRef.navigate(StackName.root, {
                  params: {
                    movie_id: item.movie_id
                  },
                  screen: Routes.card
                })
              }}>
              <ImageBackground
                source={{ uri: urlImagePath(item.covers[0].original) }}
                style={styles.image}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.info}>{showInfo(item)}</Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          )
        }}
        ListHeaderComponent={() => <View style={styles.hf} />}
        ListFooterComponent={() => {
          return <View style={styles.hf} />
        }}
      />
    </>
  )
}

export default ViewedScreen
