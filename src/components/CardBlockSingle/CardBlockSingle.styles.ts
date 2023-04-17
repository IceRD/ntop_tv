import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(9),
    marginBottom: scale(6),
    color: Colors.text,
    fontWeight: 'bold'
  }
})

export default styles
