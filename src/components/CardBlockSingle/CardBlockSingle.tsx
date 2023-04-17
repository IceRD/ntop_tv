import React, { useState, useMemo, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Chip, CardBlockSinglItem } from '~/components'
import styles from './CardBlockSingle.styles'
import { videoQuality } from '~/data/videoQuality'
import parseFiles from './parseFiles'

function CardBlockSingle({ items }) {
  const [tab, setTab] = useState<string>('')

  const obj = useMemo(() => parseFiles(items), items)

  let keys = Object.keys(obj).reverse()

  useEffect(() => {
    setTab(prev => (prev = keys[0]))
  }, [])

  if (obj[tab] === undefined) {
    return false
  }

  console.log(JSON.stringify(obj, null, 2))

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

      <Text accessible={false} style={styles.title}>
        Фильм
      </Text>

      {obj[tab].items.map((item, index) => {
        return (
          <CardBlockSinglItem
            item={item}
            hasTVPreferredFocus={undefined}
            blockFocusRight={false}
          />
        )
      })}
    </View>
  )
}

export default CardBlockSingle
