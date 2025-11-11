import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { heightValue , widthValue } from "../../styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ColorMode = ({navigation}) => {
  
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
      <Feather name="chevron-left" color="#000" size={24} />
      <Text style={{fontSize:18}}>Back</Text>
      </View>
      </TouchableOpacity>
      <Text style={{marginHorizontal:widthValue(40),marginTop:heightValue(90),fontSize:25}}>Change<Text style={{color:"#4f7640ff"}}> Color Mode</Text></Text>
           <Text style={{marginHorizontal:widthValue(40),marginVertical:heightValue(130),fontSize:14}}>
     Change Color Mode between light and dark as per your interest
           </Text>
           <Text style={{color:"#7c7878ff",fontSize:22,fontWeight:500,marginHorizontal:"auto",marginVertical:heightValue(25),marginBottom:heightValue(8.5)}}>Light Mode</Text>
           <View style={styles.circle}>
           <View style={[styles.circle,{width:widthValue(2),height:widthValue(2),margin:"auto"}]}>
           <View style={[styles.circle,{width:widthValue(2.8),height:widthValue(2.8),margin:"auto"}]}>
            <Feather name="power" color="#959191ff" size={28} style={{margin:"auto"}} />
            </View>
            </View>
           </View>
               <Text style={{color:"#7c7878ff",fontSize:22,fontWeight:490,marginHorizontal:"auto",marginTop:heightValue(6)}}>Click the button to enable</Text>
               <Text style={{color:"green",fontSize:22,fontWeight:490,marginHorizontal:"auto"}}>Dark Mode</Text>

      </View>)}
      export default ColorMode
      const styles=StyleSheet.create({
     container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
    padding:20,paddingTop:40
  },
  circle:{
    width:widthValue(1.6),height:widthValue(1.6),backgroundColor:"#E4EAE6",borderRadius:widthValue(2),marginHorizontal:"auto",elevation:7
  }




})