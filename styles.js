import { Dimensions,PixelRatio,Platform } from "react-native";
const {height, width} = Dimensions.get('window');
const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
 
const scale = SCREEN_WIDTH  / 360;
export function heightValue(size){
    return height/size
}
function normalize(size) {
    const newSize = size * scale
    if (Platform.OS === 'ios') {
      return Math.round(PixelRatio.roundToNearestPixel(newSize))
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    }
}
 
export function widthValue(size){
    return width/size
}
export const fontStyles = {
     fontSize8: {
        fontSize: normalize(8)
    },
 
    extraSmallAdvance: {
        fontSize: normalize(9)
    },
 
    extraSmall: {
        fontSize: normalize(10)
    },
    fontSize11:{
        fontSize: normalize(11)
    },
    small: {
        fontSize: normalize(12)
    },
    fontSize13: {
        fontSize: normalize(13)
    },
    normal: {
        fontSize: normalize(14)
    },
    fontSize15: {
        fontSize: normalize(15)
    },
    regular: {
        fontSize: normalize(16)
    },
    fontSize17: {
        fontSize: normalize(17)
    },
 
    regularPlus: {
        fontSize: normalize(18)
    },
    fontSize19: {
        fontSize: normalize(19)
 
    },
    medium: {
        fontSize: normalize(20)
    },
    medium22: {
        fontSize: normalize(22)
    },
    medium24: {
        fontSize: normalize(24)
    },
    fontSize23: {
        fontSize: normalize(23)
    },
    fontSize25: {
        fontSize: normalize(25)
    },
    mediumPlus: {
        fontSize: normalize(27)
    },
    fontSize28: {
        fontSize: normalize(28)
    },
    mediumLarge: {
        fontSize: normalize(30)
    },
    fontSize32: {
        fontSize: normalize(32)
    },
    large: {
        fontSize: normalize(33)
    },
    fontSize36: {
        fontSize: normalize(36)
    },
    extraLarge: {
        fontSize: normalize(40)
    },
    fontSize80: {
        fontSize: normalize(80)
 
    },
}