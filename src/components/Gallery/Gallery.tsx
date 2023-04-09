import React from 'react'
import { ScrollView } from 'react-native'
import { GalleryItem } from '~/components'
import { urlImagePath } from '~/utils/urlImagePath'
import styles from './Gallery.styles'

const Gallery = ({ rowNumber, items }) => {
  return (
    <ScrollView horizontal style={styles.wrapper}>
      {items.map((item, i) => (
        <GalleryItem
          key={i}
          title={item.name}
          image={urlImagePath(item.cover)}
          year={item.year}
          hasTVPreferredFocus={rowNumber === 0 && i === 0}
          blockFocusRight={i === items.length - 1}
        />
      ))}
    </ScrollView>
  )
}

export default Gallery
