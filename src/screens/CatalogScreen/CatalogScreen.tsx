import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  SectionList,
  Platform
} from 'react-native'
import { IProps } from './CatalogScreen.types'
import { useCatalogQuery } from '~/hooks/useCatalogQuery'
import styles from './CatalogScreen.styles'
import { urlImagePath } from '~/utils/urlImagePath'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'
import showInfo from '~/utils/showInfo'

function CatalogScreen({ route }: any) {
  const { navigationRef } = useNavigationRef()

  const columns = Platform.isTV ? 4 : 3

  const [focus, setFocus] = useState<number>(0)
  const [pageParam, setPage] = useState<number>(0)

  const genre = route?.params?.genre || 0

  const query = {
    genre,
    pageParam
  }

  const { catalog, isLoading, isError, fetchNextPage, hasNextPage } =
    useCatalogQuery(query)

  function onFocus(index: number) {
    setFocus(index)
  }

  function handleFetchNextPage() {
    if (hasNextPage) {
      setPage(prev => prev + 1)
      fetchNextPage({ pageParam: pageParam + 1 })
    }
  }

  if (isLoading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading ...</Text>
      </View>
    )

  if (isError)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Oops, something went wrong ...</Text>
      </View>
    )

  return (
    <>
      <FlatList
        columnWrapperStyle={styles.flatlist}
        numColumns={columns}
        data={catalog}
        keyExtractor={item => item.movie_id}
        onEndReached={handleFetchNextPage}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          return (
            <TouchableHighlight
              onFocus={() => onFocus(index)}
              style={[
                styles.card,
                Platform.isTV ? styles.cardSizeTV : styles.cardSize,
                focus === index && styles.focused
              ]}
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

export default CatalogScreen
