import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    paddingRight: 14
  },
  microphone: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.menuActiveBackground,
    borderColor: Colors.menuActiveBackground,
    borderRadius: 32,
    borderWidth: 3,
    padding: scale(4),
    marginRight: scale(4)
  },
  microphoneFocused: {
    // borderColor: Colors.focusBorderColor,
    // backgroundColor: Colors.focusBorderColor
    borderColor: Colors.focusBorderColor
  },
  microphoneActive: {
    backgroundColor: Colors.focusBorderColor
  },
  microphoneContainer: {
    // padding: scale(4),
    // borderColor: Colors.focusBorderColor,
    // backgroundColor: Colors.focusBorderColor
  }
})

export default styles
