import { Dimensions,PixelRatio,Platform } from "react-native";
const {height, width} = Dimensions.get('window');

export function heightValue(size){
    return height/size
}

 
export function widthValue(size){
    return width/size
}
