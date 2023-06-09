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
  itemLast: {
    marginRight: 0
  },
  wrapperFocused: {
    borderColor: Colors.focusBorderColor
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    width: moderateScale(120 / 1.24),
    height: moderateScale(178 / 1.24)
  },
  textContainer: {
    backgroundColor: Colors.textBackground,
    position: 'absolute',
    bottom: -1,
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
