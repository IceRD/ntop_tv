import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#808080',
    height: moderateScale(19),
    width: moderateScale(19),
    borderRadius: Size.borderRadius
  },
  itemFocused: {
    backgroundColor: Colors.main
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    height: moderateScale(19),
    width: moderateScale(19)
  }
})

export default styles
