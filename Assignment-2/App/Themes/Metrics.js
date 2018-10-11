import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 44 : 56,
  borderWidth: 2,
  icons: {
    tiny: 15,
    small: 25,
    medium: 35,
    large: 45,
    settings: 40,
  },
  images: {
    logoHeight: 32,
    logoWidth: 85,
  }
}

export default metrics
