import React from 'react'
import { ScrollView, Text } from 'react-native'
import { CardBlockSeriesListItem } from '~/components'
import styles from './CardBlockSeriesList.styles'

const CardBlockSeriesList = ({ rowNumber, items }) => {
  return (
    <ScrollView horizontal style={styles.wrapper}>
      {items.map((item, i) => (
        <CardBlockSeriesListItem
          key={item.file_id}
          item={item}
          hasTVPreferredFocus={rowNumber === 0 && i === 0}
          blockFocusRight={i === items.length - 1}
        />
      ))}
    </ScrollView>
  )
}

export default CardBlockSeriesList
