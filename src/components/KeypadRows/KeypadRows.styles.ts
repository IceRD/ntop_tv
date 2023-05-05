import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  row: {
    backgroundColor: Colors.button,
    width: moderateScale(20),
    height: moderateScale(20),
    marginHorizontal: moderateScale(3),
    marginVertical: moderateScale(3),
    borderRadius: Size.borderRadius
  },
  key: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Colors.text,
    fontSize: moderateScale(10)
  }
})

export default styles
