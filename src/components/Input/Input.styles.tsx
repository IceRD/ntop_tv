import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.main,
    borderWidth: 3,
    borderRadius: 8,
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    color: Colors.text,
    width: '100%'
    // marginRight: scale(7),
    // overflow: 'hidden',
    // width: moderateScale(124 / 1.24)
  }
})

export default styles
