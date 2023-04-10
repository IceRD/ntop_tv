import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    marginTop: scale(4)
  },
  text: {
    marginTop: scale(2),
    color: Colors.text,
    fontSize: moderateScale(8)
  }
})

export default styles
