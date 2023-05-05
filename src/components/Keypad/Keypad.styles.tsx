import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: 20
  },
  keyGroup: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})

export default styles
