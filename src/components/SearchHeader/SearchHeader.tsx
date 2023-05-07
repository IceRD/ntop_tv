import React, { useCallback, useState, useEffect, useRef } from 'react'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import styles from './SearchHeader.styles'
import { Colors } from '~/theme'
import { Input, VoiceButton, SearchItem } from '~/components'
import { IProps } from './SearchHeader.types'

function SearchHeader({
  style,
  inputValue,
  onUpdateValue,
  onSearch,
  searchVarianList
}: IProps) {
  return (
    <View style={style}>
      <View style={styles.findContainer}>
        <VoiceButton onSearch={onSearch} />

        <Input
          style={styles.search}
          placeholder="Поиск ..."
          inputMode="text"
          selectTextOnFocus={false}
          editable={false}
          value={inputValue}
        />
      </View>

      <View style={{ marginTop: 24 }}>
        <ScrollView contentInsetAdjustmentBehavior="automatic" horizontal>
          {searchVarianList.map((value, index) => (
            <View key={index}>
              <SearchItem value={value} onPress={onUpdateValue} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default SearchHeader
