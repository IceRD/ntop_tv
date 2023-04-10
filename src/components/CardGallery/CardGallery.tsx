import React from 'react'
import { ScrollView, View } from 'react-native'
import { CardGalleryItem } from '~/components'
import { urlImagePath } from '~/utils/urlImagePath'
import styles from './CardGallery.styles'
import { IProps } from './CardGallery.types'

const CardGallery = ({ items }: IProps) => {
  const { small_frames } = items

  return (
    <View style={styles.wrapper}>
      <ScrollView horizontal>
        {small_frames.map((image, i) => (
          <CardGalleryItem
            key={i}
            image={urlImagePath(image)}
            hasTVPreferredFocus={i === 0}
            blockFocusRight={i === small_frames.length - 1}
            isLast={small_frames.length === i + 1}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default CardGallery
