import React, { useState } from 'react'
import { ScrollView, View, TouchableOpacity, Image, Text } from 'react-native'
import styles from './Menu.styles'
import { useSelector } from 'react-redux'
import FocusType from '~/store/focusSlice/focusSlice.types'
import { MENU } from '~/router/menu'
import { StackName } from '~/navigations/Navigation.types'
import Icon from '~/components/Icons'
import MenuItem from '~/components/MenuItem'
import { useNavigationRef } from '~/hooks/useNavigationRef'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const Menu = ({}) => {
  // const [focus, setFocus] = useState<boolean>(false)
  const focus = useSelector(state => state.focus.currentFocus)
  const isFocusMenu = focus === FocusType.menu

  const { navigationRef } = useNavigationRef()

  return (
    <View style={[styles.wrapper, isFocusMenu ? styles.wrapperFocused : null]}>
      <ScrollView>
        <View style={styles.menuItem}>
          <Image
            style={styles.circle}
            source={require('assets/images/logo.png')}
          />
        </View>
        {MENU.map((item, key) => {
          return (
            <View style={styles.menuItem} key={key}>
              <MenuItem
                onPress={() =>
                  navigationRef.navigate(StackName.root, {
                    screen: item.link
                  })
                }>
                <Icon
                  name={item.link}
                  width={verticalScale(35)}
                  height={verticalScale(35)}
                  fill={'#fff'}
                />
              </MenuItem>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default Menu
