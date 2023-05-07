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

import { useSelector, useDispatch } from 'react-redux'
import { fetchSearch } from '~/store/search/searchReducers'
import { searchData } from '~/store/search/searchSelectors'

function showInfo(item: any) {
  const arr = []
  if (item.year !== undefined) {
    arr.push(item.year)
  }

  if (Array.isArray(item.countries) && item.countries.length > 0) {
    arr.push(item.countries.join(','))
  }

  if (item.quality !== undefined) {
    arr.push(item.quality)
  }

  return arr.join(' | ')
}

function SearchScreen() {
  const { navigationRef } = useNavigationRef()
  const dispatch = useDispatch()

  const { isLoading, isSuccess, errors } = useSelector(state => state.search)
  const data = useSelector(searchData)

  const [focus, setFocus] = useState<number | null>(null)
  const [searchVarianList, setSearchVariantList] = useState([])
  const [value, setValue] = useState('')

  useEffect(() => {
    console.log('rerender')

    if (value === '') return

    dispatch(fetchSearch({ query: value }))
  }, [value])

  function onFocus(index: number) {
    setFocus(index)
  }

  function onBlur() {
    setFocus(null)
  }

  function onUpdateValue(str: string) {
    setValue(prev => (prev = str))
  }

  function onSearch(arr: string[]): void {
    setSearchVariantList(prev => (prev = arr))
    setValue(prev => (prev = arr.length === 0 ? '' : arr[0]))
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
                <Text>Loading ...</Text>
              </View>
            )
          }

          if (errors) {
            return (
              <View style={styles.centered}>
                <Text>Oops, something went wrong ...</Text>
              </View>
            )
          }

          if (isSuccess) {
            return (
              <View style={styles.centered}>
                <Text>Ничего не найдено. ...</Text>
              </View>
            )
          }

          return <View />
        }}
        ListFooterComponent={() => {
          return <View style={styles.hf} />
        }}
        ListHeaderComponent={() => {
          return (
            <SearchHeader
              style={styles.header}
              inputValue={value}
              onUpdateValue={onUpdateValue}
              searchVarianList={searchVarianList}
              onSearch={onSearch}
            />
          )
        }}
      />
    </>
  )
}

export default SearchScreen
