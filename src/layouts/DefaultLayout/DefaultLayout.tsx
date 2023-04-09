import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { IProps } from './DefaultLayout.types'
import Menu from '~/components/Menu'

const Layout: FC<IProps> = ({ children }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Menu />
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  )
}

export default Layout
