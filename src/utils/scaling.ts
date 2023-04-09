import { Dimensions } from 'react-native'
const { width, height, scale: s } = Dimensions.get('window')

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350
const guidelineBaseHeight = 680

const scale = function (size: number) {
  return (width / guidelineBaseWidth) * size
}
const verticalScale = function (size: number) {
  return (height / guidelineBaseHeight) * size
}
const moderateScale = function (size: number, factor: number = 0.5) {
  return size + (scale(size) - size) * factor
}

export { scale, verticalScale, moderateScale }
