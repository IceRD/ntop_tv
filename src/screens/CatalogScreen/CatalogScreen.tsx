import React, { useContext } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { IProps } from './CatalogScreen.types'
// import { useNewMoviesQuery } from '~/hooks/useNewMoviesQuery'
// import { Gallery, GalleryItem } from '~/components'
import styles from './CatalogScreen.styles'

function CatalogScreen() {
  return (
    <View style={[styles.wrapper]}>
      <Text style={[styles.text]}>CATALOG </Text>
    </View>
  )
}

export default CatalogScreen
