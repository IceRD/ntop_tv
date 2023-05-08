import React from 'react'
import { View, Text } from 'react-native'
import styles from './CardHeader.styles'
import toDecimal from '~/utils/toDecimal'
import Icons from '~/components/Icons'
import Colors from '~/theme/Colors'
import { IProps } from './CardHeader.types'
import showInfo from '~/utils/showInfo'

function CardHeader({ name, year, rating, countries, quality }: IProps) {
  const description = showInfo({ year, countries, quality })

  return (
    <View style={styles.header}>
      <View>
        <View style={styles.titleContainer}>
          <Text accessible={false} style={styles.titleContainer_title}>
            {name}
          </Text>
        </View>
        <View>
          <Text accessible={false} style={styles.titleContainer_description}>
            {description}
          </Text>
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <Text accessible={false} style={styles.rating}>
          {toDecimal(rating)}
        </Text>
        <Icons name={'Rating'} width={18} height={18} fill={Colors.rating} />
      </View>
    </View>
  )
}

export default CardHeader
