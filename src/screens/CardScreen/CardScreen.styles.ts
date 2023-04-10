import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    padding: scale(11)
  },
  topContainer: {
    flexDirection: 'row',
    marginBottom: scale(11)
  },
  imageWrapper: {
    flex: 1,
    borderColor: 'transparent',
    borderWidth: 3,
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    // height: moderateScale(180),
    aspectRatio: 4 / 6
  },
  info: {
    flex: 2,
    paddingLeft: scale(11)
  },
  similar: {
    marginBottom: scale(22)
  }
})

export default styles
