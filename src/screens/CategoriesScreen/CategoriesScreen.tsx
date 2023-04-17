import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ImageBackground
} from 'react-native'
import { IProps } from './CategoriesScreen.types'
import genres from '~/data/genres'
import styles from './CategoriesScreen.styles'
import { useNavigationRef } from '~/hooks/useNavigationRef'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'

function CategoriesScreen() {
  const { navigationRef } = useNavigationRef()

  const [focus, setFocus] = useState<number>(0)

  function onFocus(index) {
    setFocus(index)
  }

  return (
    <>
      <FlatList
        columnWrapperStyle={styles.flatlist}
        numColumns={3}
        data={genres}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            onFocus={() => onFocus(index)}
            style={[styles.card, focus === index && styles.focused]}
            key={item.key}
            onPress={() => {
              navigationRef.navigate(StackName.root, {
                params: {
                  genre: item.key
                },
                screen: Routes.catalog
              })
            }}>
            <ImageBackground source={item.uri} style={styles.image}>
              <View style={styles.overlay}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            </ImageBackground>
          </TouchableHighlight>
        )}
        ListHeaderComponent={() => <View style={styles.hf} />}
        ListFooterComponent={() => <View style={styles.hf} />}
      />
    </>
  )
}

export default CategoriesScreen
