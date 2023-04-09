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
  image: {
    width: moderateScale(118),
    height: moderateScale(167)
  },
  textContainer: {
    backgroundColor: Colors.textBackground,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: scale(4),
    height: moderateScale(34),
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: moderateScale(7),
    fontWeight: 'bold'
  },
  year: {
    color: Colors.focusBorderColor,
    fontSize: moderateScale(5),
    fontWeight: 'bold'
  }
})

export default styles
