import { View, Text } from 'react-native'
import React from 'react'

const DataNotFound = () => {
  return (
     <View style={{flex:1,top:heightValue(5)}}>
 <Text style={{textAlign:"center",color:"#d35656ff",fontSize:23}}>Data Not Found</Text>
              <LottieView source={require("../../assets/animations/APIError.json") }autoPlay loop  style={styles.imageContainer}/>
 
 
          </View>
  )
}

export default DataNotFound