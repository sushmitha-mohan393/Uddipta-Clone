import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { heightValue , widthValue } from "../../styles";
import {Colors} from "../../Colors"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import {changeDarkMode} from "../redux/DarkModeSlice"

const ColorMode = ({navigation}) => {
  const dispatch = useDispatch();
    const darkMode = useSelector((state) => state?.darkMode?.darkMode);
  return (
    <View style={[styles.container,{ backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
      <Feather name="chevron-left" color={darkMode?Colors.white:Colors.black} size={heightValue(35)} />
      <Text style={{fontSize:heightValue(50),color:darkMode?Colors.white:Colors.black}}>Back</Text>
      </View>
      </TouchableOpacity>
      <Text style={{marginHorizontal:widthValue(40),marginTop:heightValue(90),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Change<Text style={{color:"#4f7640ff"}}> Color Mode</Text></Text>
           <Text style={{marginHorizontal:widthValue(40),marginVertical:heightValue(130),fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>
     Change Color Mode between light and dark as per your interest
           </Text>
           <Text style={{color:"#7c7878ff",fontSize:heightValue(38),fontWeight:500,marginHorizontal:"auto",marginVertical:heightValue(25),marginBottom:heightValue(12)}}>Light Mode</Text>
           <View style={[styles.circle,{backgroundColor:darkMode?"#433E3C":Colors.circlecolor}]}>
           <View style={[styles.circle,{width:heightValue(4.4),height:heightValue(4.4),margin:"auto",backgroundColor:darkMode?"#615D5C":Colors.circlecolor}]}>
           <TouchableOpacity  onPress={()=>dispatch(changeDarkMode())}style={[styles.circle,{width:heightValue(5.4),height:heightValue(5.4),margin:"auto",backgroundColor:darkMode?"#7F7373":Colors.circlecolor}]}>
            <Feather name="power" color="#a9a4a4ff" size={heightValue(30)} style={{margin:"auto"}} />
            </TouchableOpacity>
            </View>
           </View>
               <Text style={{color:"#7c7878ff",fontSize:heightValue(39),fontWeight:490,marginHorizontal:"auto",marginTop:heightValue(9)}}>Click the button to enable</Text>
               <Text style={{color:"green",fontSize:heightValue(45),fontWeight:490,marginHorizontal:"auto"}}>Dark Mode</Text>

      </View>)}
      export default ColorMode
      const styles=StyleSheet.create({
     container: {
   
  flex:1,
 
    padding:20,paddingTop:40
  },
  circle:{
    width:heightValue(3.6),height:heightValue(3.6),backgroundColor:"#E4EAE6",borderRadius:heightValue(2),marginHorizontal:"auto",elevation:7
  }




})