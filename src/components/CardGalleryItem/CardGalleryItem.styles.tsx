import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    marginRight: scale(5),
    overflow: 'hidden'
  },
  itemLast: {
    marginRight: 0
  },
  wrapperFocused: {
    borderColor: Colors.focusBorderColor
  },
  imageWrapper: {
    width: moderateScale(130),
    height: moderateScale(72)
  },
  image: {
    aspectRatio: 9 / 5,
    // height: '100%',
    // width: '100%',
    borderWidth: 3,
    borderRadius: 8
  }
})

export default styles
