import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  flatlist: {
    paddingLeft: scale(11),
    paddingRight: scale(7),
    paddingBottom: scale(4)
  },
  card: {
    backgroundColor: Colors.menuBackground,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginRight: scale(4),
    height: moderateScale(80),
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    overflow: 'hidden'
  },
  text: {
    color: Colors.text,
    fontSize: moderateScale(12),
    fontWeight: 'bold'
  },
  hf: {
    marginBottom: scale(11)
  },
  overlay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.overlayCard
  },
  focused: {
    borderColor: Colors.focusBorderColor
  }
})

export default styles
