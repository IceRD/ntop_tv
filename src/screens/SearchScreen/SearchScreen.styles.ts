import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: scale(11),
    paddingHorizontal: scale(11)
  },
  text: {
    color: Colors.text
  }
})

export default styles
