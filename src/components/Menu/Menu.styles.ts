import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.menuBackground,
    width: moderateScale(45),
    height: '100%'
  },
  wrapperFocused: {
    width: moderateScale(45),
    backgroundColor: Colors.menuActiveBackground
  },
  circle: {
    width: 50,
    height: 50,
    marginTop: scale(7),
    marginBottom: scale(8)
  },
  menuItem: {
    alignItems: 'center',
    marginBottom: scale(8),
    position: 'relative'
  }
})

export default styles
