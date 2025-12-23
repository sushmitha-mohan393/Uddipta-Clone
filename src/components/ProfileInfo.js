import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { heightValue , widthValue } from "../../styles";

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Colors } from "../../Colors";
import axios from 'axios';

const ProfileInfo = ({navigation}) => {
  const[profile,setProfile]=useState(null);
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
       const loginResponse = useSelector((state) => state?.auth?.loginResponse)
       useEffect(()=>{
  profileapi();
     },[]
    );
      const profileapi = async () => {
    try {
      const bal = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/ConsumerProfile?ConsumerNo=${loginResponse?.consumerId}`,
        { 
       
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );

   
      setProfile(bal.data);
     

    } catch (error) {
      console.log("Balance API error:", error);
    }
  };
  return (
    <View style={[styles.container,{ backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
      <Feather name="chevron-left" color={darkMode?Colors.white:Colors.black} size={heightValue(35)} />
      <Text style={{fontSize:heightValue(50),color:darkMode?Colors.white:Colors.black}}>Back</Text>
      </View>
      </TouchableOpacity>
       <View style={[styles.avatarContainer,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
                            <FontAwesome name="user-circle" color="#1fb1e2ff" size={heightValue(5.8)} />
                      </View>
                 <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,marginHorizontal:"auto",borderRadius:20,paddingVertical:25,paddingTop:15,elevation:2,position:"static",marginTop:-40,marginBottom:30}}
          >
            <Text style={{marginHorizontal:"auto",fontSize:heightValue(40),fontWeight:500,marginTop:heightValue(15),color:darkMode?Colors.white:Colors.black}}>{profile?.consumerName}</Text>
            <Text  style={{marginHorizontal:"auto",color:"green",fontSize:heightValue(62)}}>Consumer ID :{profile?.consumerNo}</Text>
          </View>
                 <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,marginHorizontal:"auto",borderRadius:20,padding:20,elevation:2,}}
                
>
    <Text style={{fontSize:heightValue(42),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>
        Service Date 
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:heightValue(55)}}>{profile?.serviceDate}</Text>
    <View style={styles.seperator}></View>
    <Text style={{fontSize:heightValue(42),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>
        Meter Serial Number
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:heightValue(55)}}>{profile?.meterSerialNo}</Text>
    <View style={styles.seperator}></View>
    <Text style={{fontSize:heightValue(42),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>
        Email Id
    </Text>
    <Text style={{fontFamily:"sans-serif",color:"green",marginTop:5,fontWeight:600,fontSize:heightValue(55)}}>{profile?.email}</Text>
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
    borderRadius: 80,
   
    backgroundColor:"white",alignItems:"center",top:heightValue(50),position:"relative",marginHorizontal:"auto"
  },
  seperator:{
        height:1,marginVertical:heightValue(70),backgroundColor:"#dfd8d8ff"
      }
})