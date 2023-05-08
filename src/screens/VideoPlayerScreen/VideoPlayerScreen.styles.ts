import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#000000'
  },
  wrapperError: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(20)
  },
  error: {
    color: '#ffffff'
  },
  mediaControls: {
    height: '100%',
    flex: 1,
    alignSelf: 'center'
  }
})

export default styles
