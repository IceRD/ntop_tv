import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useNewMoviesQuery } from '~/hooks/useNewMoviesQuery'
import { Gallery, GalleryItem } from '~/components'
import styles from './NewMovieScreen.styles'

function NewMovieScreen() {
  const { data, isLoading, isSuccess, isError } = useNewMoviesQuery()

  if (isLoading)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Loading ...</Text>
      </View>
    )

  if (isError || data === undefined)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Oops, something went wrong ...</Text>
      </View>
    )

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.wrapper}>
        {isSuccess &&
          data.map((items, index) => (
            <View key={items.category_id}>
              <Text accessible={false} style={styles.header}>
                {items.name}
              </Text>
              <Gallery
                rowNumber={index === 0 ? 0 : null}
                items={items.movies}
              />
            </View>
          ))}
      </View>
    </ScrollView>
  )
}

export default NewMovieScreen
