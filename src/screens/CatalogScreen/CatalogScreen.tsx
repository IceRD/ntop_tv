import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ImageBackground
} from 'react-native'
import { IProps } from './CatalogScreen.types'
import { useCatalogQuery } from '~/hooks/useCatalogQuery'
import styles from './CatalogScreen.styles'
import { urlImagePath } from '~/utils/urlImagePath'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'

function CatalogScreen() {
  const { data, isLoading, isSuccess, isError } = useCatalogQuery({})

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
        data={data}
        renderItem={({ item, index, separators }) => {
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
                source={{ uri: urlImagePath(item.cover_original) }}
                style={styles.image}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.info}>
                    {item.year} | {item.countries.join(' / ')} |{' '}
                    {item.genres.join(' / ')}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          )
        }}
        ListHeaderComponent={() => <View style={styles.hf} />}
        ListFooterComponent={() => <View style={styles.hf} />}
      />
    </>
  )
}

export default CatalogScreen
