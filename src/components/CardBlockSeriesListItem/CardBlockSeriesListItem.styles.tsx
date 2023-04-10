import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    marginRight: scale(7),
    overflow: 'hidden'
  },
  wrapperFocused: {
    borderColor: Colors.focusBorderColor
  },
  textContainer: {
    backgroundColor: Colors.textBackground,
    padding: scale(8),
    width: moderateScale(120 / 1.24),
    height: moderateScale(60 / 1.24),
    justifyContent: 'center',
    alignItems: 'center'
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
