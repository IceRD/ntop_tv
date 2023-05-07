import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 16
  },
  item: {
    borderWidth: 3,
    borderColor: Colors.menuActiveBackground,
    backgroundColor: Colors.overlayCard,
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    borderRadius: 8
  },
  focusItem: {
    borderColor: Colors.focusBorderColor
  },
  text: {
    color: Colors.text,
    fontSize: moderateScale(7)
  }
})

export default styles
