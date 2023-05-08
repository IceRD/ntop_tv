import React, { useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableHighlight,
  ImageBackground,
  SectionList
} from 'react-native'
import { IProps } from './SearchScreen.types'
import styles from './SearchScreen.styles'
import { urlImagePath } from '~/utils/urlImagePath'
import { StackName } from '~/navigations/Navigation.types'
import { Routes } from '~/router/routes.types'
import { useNavigationRef } from '~/hooks/useNavigationRef'
import { SearchHeader } from '~/components'
import showInfo from '~/utils/showInfo'

import { useSelector, useDispatch } from 'react-redux'
import { fetchSearch } from '~/store/search/searchReducers'
import { searchData } from '~/store/search/searchSelectors'

function SearchScreen() {
  const { navigationRef } = useNavigationRef()
  const dispatch = useDispatch()

  const { isLoading, isSuccess, errors, query, variantList } = useSelector(
    state => state.search
  )
  const data = useSelector(searchData)

  const [focus, setFocus] = useState<number | null>(null)
  // const [searchVarianList, setSearchVariantList] = useState([])
  // const [value, setValue] = useState('')

  useEffect(() => {
    console.log('rerender')

    if (query === '') return

    console.log({ query })

    dispatch(fetchSearch({ query }))
  }, [query])

  function onFocus(index: number) {
    setFocus(index)
  }

  function onBlur() {
    setFocus(null)
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
              onBlur={onBlur}
              style={[styles.card, focus === index && styles.focused]}
              key={item.movie_id}
              onPress={() => {
                navigationRef.navigate(StackName.root, {
                  params: {
                    movie_id: item.movie_id
                  },
                  screen: Routes.card
                })
              }}>
              <ImageBackground
                source={{ uri: urlImagePath(item.cover) }}
                style={styles.image}>
                <View style={styles.textContainer}>
                  <Text style={styles.text}>{item.name}</Text>
                  <Text style={styles.info}>{showInfo(item)}</Text>
                </View>
              </ImageBackground>
            </TouchableHighlight>
          )
        }}
        ListEmptyComponent={() => {
          if (isLoading) {
            return (
              <View style={styles.centered}>
                <Text style={styles.centeredText}> Загружается ...</Text>
              </View>
            )
          }

          if (errors) {
            return (
              <View style={styles.centered}>
                <Text style={styles.centeredText}>Упс. Произошла ошибка.</Text>
              </View>
            )
          }

          if (isLoading) {
            return (
              <View style={styles.centered}>
                <Text style={styles.centeredText}>Ничего не найдено.</Text>
              </View>
            )
          }

          return null
        }}
        ListFooterComponent={() => {
          return <View style={styles.hf} />
        }}
        ListHeaderComponent={() => {
          return <SearchHeader style={styles.header} />
        }}
      />
    </>
  )
}

export default SearchScreen
