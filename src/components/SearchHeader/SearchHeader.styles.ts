import { StyleSheet } from 'react-native'
import { Colors, Size } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  findContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  wrapper: {
    paddingVertical: scale(11),
    paddingHorizontal: scale(11)
  },
  text: {
    color: Colors.text
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
    borderColor: Colors.focusBorderColor
  },
  microphoneContainer: {},
  search: {
    flex: 1,
    borderColor: Colors.mainBackground,
    backgroundColor: Colors.mainBackground
  }
})

export default styles
