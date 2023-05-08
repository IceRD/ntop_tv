import { StyleSheet } from 'react-native'
import { Colors } from '~/theme'
import { scale, verticalScale, moderateScale } from '~/utils/scaling'

const styles = StyleSheet.create({
  header: {
    marginTop: scale(10),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  titleContainer: {
    marginBottom: moderateScale(3)
  },
  titleContainer_title: {
    color: Colors.text,
    fontWeight: 'bold',
    fontSize: moderateScale(11)
  },
  titleContainer_description: {
    color: Colors.main,
    fontWeight: 'bold',
    fontSize: moderateScale(7)
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rating: {
    fontSize: moderateScale(10),
    alignItems: 'center',
    color: Colors.text,
    marginRight: scale(2)
  }
})

export default styles
