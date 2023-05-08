import React from 'react'
import { ScrollView, View } from 'react-native'
import styles from './SearchHeader.styles'
import { Input, VoiceButton, SearchItem } from '~/components'
import { IProps } from './SearchHeader.types'
import { useSelector, useDispatch } from 'react-redux'
import { setQuery } from '~/store/search/searchSlice'

function SearchHeader({ style }: IProps) {
  const dispatch = useDispatch()
  const { query, variantList } = useSelector(state => state.search)

  function SearchItems({ list }) {
    if (!Array.isArray(list) || list.length === 0) {
      return null
    }

    return (
      <View style={{ marginTop: 24 }}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal>
          {list.map((value, index) => (
            <View key={index}>
              <SearchItem
                value={value}
                onPress={() => dispatch(setQuery({ query: value }))}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  return (
    <View style={style}>
      <View style={styles.findContainer}>
        <VoiceButton />

        <Input
          style={styles.search}
          placeholder="Поиск ..."
          inputMode="text"
          selectTextOnFocus={false}
          editable={false}
          value={query}
        />
      </View>

      <SearchItems list={variantList} />
    </View>
  )
}

export default SearchHeader
