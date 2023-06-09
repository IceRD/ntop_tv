import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: scale(8),
    paddingVertical: scale(4),
    color: Colors.text,
    flex: 1,
    borderWidth: 3,
    borderRadius: 8
  },
  blur: {
    borderColor: Colors.textBackground
  },
  focus: {
    borderColor: Colors.focusBorderColor
  }
})

export default styles
