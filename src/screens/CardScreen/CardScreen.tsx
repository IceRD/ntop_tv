import React, { useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { IProps } from './CardScreen.types'
import styles from './CardScreen.styles'
import { useMovieQuery } from '~/hooks/useMovieQuery'
import { urlImagePath } from '~/utils/urlImagePath'
import { useDispatch } from 'react-redux'
import rating from '~/utils/rating'
import { setViewedData } from '~/store/viewed/viewedSlice'

import {
  CardHeader,
  CardDescription,
  CardGallery,
  CardSimilarMovies,
  CardMovieList
} from '~/components'

function CardScreen({ route }: any) {
  const dispatch = useDispatch()

  const { movie_id } = route.params

  const { data, isLoading, isSuccess, isError } = useMovieQuery({ movie_id })

  useEffect(() => {
    if (data) {
      console.log('rerender')
      dispatch(setViewedData({ movie: data }))
    }
  }, [data])

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

  const isOtherMovies =
    Array.isArray(data.other_movies) && data.other_movies.length > 0

  return (
    isSuccess && (
      <ScrollView style={[styles.wrapper]}>
        <View style={[styles.topContainer]}>
          <View style={[styles.imageWrapper]}>
            <Image
              style={styles.image}
              source={{ uri: urlImagePath(data.covers[0].original) }}
            />
          </View>

          <View style={styles.info}>
            <CardHeader
              name={data.name}
              year={data.year}
              countries={data.countries}
              rating={rating(data)}
              quality={data.quality}
            />
            <CardDescription text={data.description} />
            <CardGallery items={data.files[data.files.length - 1]} />
          </View>
        </View>

        <View style={[!isOtherMovies && styles.similar]}>
          <CardMovieList items={data.files} statusId={data.StatusSeries} />
        </View>

        {isOtherMovies && (
          <View style={styles.similar}>
            <CardSimilarMovies items={data.other_movies} />
          </View>
        )}
      </ScrollView>
    )
  )
}

export default CardScreen
