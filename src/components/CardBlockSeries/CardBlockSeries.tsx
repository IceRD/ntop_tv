import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { Chip, CardBlockSeriesList } from '~/components'
import styles from './CardBlockSeries.styles'
import { videoQuality } from '~/data/videoQuality'
import parseFiles from './parseFiles'

const CardBlockSeries = ({ items }) => {
  const [tab, setTab] = useState<string>('')

  const obj = useMemo(() => parseFiles(items), items)

  let keys = Object.keys(obj).reverse()

  useEffect(() => {
    setTab(prev => (prev = keys[0]))
  }, [])

  if (obj[tab] === undefined) {
    return false
  }

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        {keys.map(key => (
          <Chip
            key={key}
            text={videoQuality[key]}
            active={tab === key}
            style={{ marginRight: 10, marginBottom: 20 }}
            onPress={() => setTab(prev => (prev = key))}
          />
        ))}
      </View>

      <View>
        {obj[tab].items.map(({ title, value }, index) => {
          return (
            <View key={index}>
              <Text accessible={false} style={styles.title}>
                {title}
              </Text>
              <CardBlockSeriesList
                items={value}
                rowNumber={index === 0 ? 0 : null}
              />
            </View>
          )
        })}
      </View>
    </View>
  )
}

export default CardBlockSeries
