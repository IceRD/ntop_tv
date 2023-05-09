import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

// cardSize: {
//   width: moderateScale(130),
//   height: moderateScale(190)
// },
// cardSizeTV: {
//   width: moderateScale(117),
//   height: moderateScale(171)
// },

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
    // width: moderateScale(124),
    // height: moderateScale(188)
    width: '100%',
    height: '100%'
  },
  cardSize: {
    width: scale(110 / 1.19),
    height: scale(165 / 1.19)
  },
  cardSizeTV: {
    width: scale(110 / 1.36),
    height: scale(165 / 1.36)
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
