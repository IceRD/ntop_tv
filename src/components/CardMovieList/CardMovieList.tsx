import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, TouchableHighlight } from 'react-native'
import { CardBlockSeries, CardBlockSingle } from '~/components'
import styles from './CardMovieList.styles'
import { IProps } from './CardMovieList.types'

const CardMovieList = ({ items, statusId }: IProps) => {
  return (
    <View style={styles.wrapper}>
      {Number(statusId) > 0 ? (
        <CardBlockSeries items={items} />
      ) : (
        <CardBlockSingle items={items} />
      )}
    </View>
  )
}

export default CardMovieList
