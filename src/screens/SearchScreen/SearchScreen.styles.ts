import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  flatlist: {
    paddingLeft: scale(11),
    paddingRight: scale(4),
    paddingBottom: scale(11),
    justifyContent: 'flex-start'
  },
  header: {
    paddingHorizontal: scale(11),
    paddingVertical: scale(11)
  },
  card: {
    backgroundColor: Colors.menuBackground,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(7),
    height: scale(105),
    width: scale(69),
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  hf: {
    marginBottom: scale(11)
  },
  focused: {
    borderColor: Colors.focusBorderColor
  },
  textContainer: {
    backgroundColor: Colors.textBackground,
    position: 'absolute',
    bottom: -1,
    left: 0,
    right: 0,
    padding: scale(4),
    height: moderateScale(40),
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: moderateScale(7),
    fontWeight: 'bold',
    marginBottom: moderateScale(1)
  },
  info: {
    color: Colors.focusBorderColor,
    fontSize: moderateScale(5),
    fontWeight: 'bold'
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  centeredText: {
    color: Colors.text,
    fontWeight: 'bold'
  }
})

export default styles
