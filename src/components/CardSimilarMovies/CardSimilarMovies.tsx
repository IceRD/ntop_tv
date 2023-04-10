import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { CardSimilarMoviesItem } from '~/components'
import { urlImagePath } from '~/utils/urlImagePath'
import styles from './CardSimilarMovies.styles'

const CardSimilarMovies = ({ items }) => {
  return (
    <View style={styles.wrapper}>
      <Text accessible={false} style={styles.title}>
        Смотреть также
      </Text>
      <View>
        <ScrollView horizontal>
          {items.map((item, i) => (
            <CardSimilarMoviesItem
              key={i}
              title={item.name}
              image={urlImagePath(item.cover_original)}
              year={item.year}
              movie_id={item.movie_id}
              blockFocusRight={i === items.length - 1}
              isLast={items.length === i + 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default CardSimilarMovies
