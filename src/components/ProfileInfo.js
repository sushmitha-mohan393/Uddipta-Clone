import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { heightValue , widthValue } from "../../styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';


const ProfileInfo = ({navigation}) => {
  
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
      <Feather name="chevron-left" color="#000" size={24} />
      <Text style={{fontSize:18}}>Back</Text>
      </View>
      </TouchableOpacity>
       <View style={styles.avatarContainer}>
                            <FontAwesome name="user-circle" color="#1fb1e2ff" size={120} />
                      </View>
                 <View style={{width:widthValue(1.1),backgroundColor:"#fefeffff",height:heightValue(6),marginHorizontal:"auto",borderRadius:20,padding:25,paddingTop:15,elevation:2,position:"static",marginTop:-40,marginBottom:30}}
          >
            <Text style={{marginHorizontal:"auto",fontSize:22,fontWeight:500,marginTop:heightValue(15)}}>Test Meter Kumar</Text>
            <Text  style={{marginHorizontal:"auto",color:"green"}}>Consumer ID :5005213</Text>
          </View>
                 <View style={{width:widthValue(1.1),backgroundColor:"#fefeffff",height:heightValue(3.1),marginHorizontal:"auto",borderRadius:20,padding:25,paddingTop:25,elevation:2,}}
                
>
    <Text style={{fontSize:20,fontWeight:500}}>
        Service Date 
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:16}}>03/11/25</Text>
    <View style={styles.seperator}></View>
    <Text style={{fontSize:20,fontWeight:500}}>
        Meter Serial Number
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:16}}>03/11/25</Text>
    <View style={styles.seperator}></View>
    <Text style={{fontSize:20,fontWeight:500}}>
        Email Id
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:16}}>03/11/25</Text>
    <View style={styles.seperator}></View>
</View>
    </View>
  )
}

export default ProfileInfo
const styles=StyleSheet.create({
     container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
    padding:20,paddingTop:40
  },
   avatarContainer: {
    borderRadius: 60,
   
    backgroundColor:"white",width:widthValue(3.3),alignItems:"center",top:20,position:"relative",marginHorizontal:"auto"
  },
  seperator:{
        height:1,marginVertical:heightValue(70),backgroundColor:"#dfd8d8ff"
      }
})