import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    marginRight: scale(7),
    overflow: 'hidden',
    width: moderateScale(124 / 1.24)
  },
  wrapperFocused: {
    borderColor: Colors.focusBorderColor
  },
  textContainer: {
    backgroundColor: Colors.textBackground,
    padding: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    height: moderateScale(64 / 1.24)
  },
  text: {
    color: Colors.text,
    fontSize: moderateScale(8),
    fontWeight: 'bold'
  },
  time: {
    color: Colors.menuBackground,
    fontSize: moderateScale(7),
    fontWeight: 'bold',
    marginTop: scale(4)
  }
})

export default styles
