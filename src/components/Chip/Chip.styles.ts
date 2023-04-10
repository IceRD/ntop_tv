import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.menuBackground,
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8
  },
  wrapperFocused: {
    borderColor: Colors.focusBorderColor
  },
  active: {
    backgroundColor: Colors.menuActiveBackground
  },
  chip: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    color: Colors.text,
    fontSize: moderateScale(7)
  }
})

export default styles
