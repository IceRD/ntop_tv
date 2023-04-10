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

function CatalogScreen() {
  const [focus, setFocus] = useState<number>(0)

  function onFocus(index) {
    console.log(index)
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
            onPress={() => {}}>
            <ImageBackground
              source={item.uri}
              style={{
                aspectRatio: 16 / 9
              }}>
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

export default CatalogScreen
