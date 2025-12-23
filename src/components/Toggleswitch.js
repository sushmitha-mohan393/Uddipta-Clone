import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { heightValue , widthValue } from "../../styles";
export default function Toggleswitch({isEnabled, toggleSwitch}) {
         
    
  return (
    <View>
       <TouchableOpacity onPress={toggleSwitch} activeOpacity={1}>    
    <View style={[styles.toggle,isEnabled ? styles.trackEnabled : styles.trackDisabled]}>
       <View style={[styles.circle, isEnabled ? styles.thumbEnabled : styles.thumbDisabled]}>
        </View>
      <View style={styles.iconholder}>
        <FontAwesome name="table" color="black" size={20} />
    <Feather name="bar-chart" color="black" size={20}  />
      </View>
    </View>
    </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    toggle: {
        
  width: widthValue(6),
  height: heightValue(30),
 backgroundColor:"red",
  borderRadius:50,
  margin:"auto",
    // bottom: 10,
    
    
    
    alignItems: 'center',

},
circle: {
  flexDirection:"row",
 gap:20,
  width: widthValue(12),
  height: heightValue(30),
  backgroundColor:"green",
  borderRadius: 50,
 paddingTop:5,paddingHorizontal:5,
  position:"absolute",
},
iconholder:{
//  position:"relative",
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
},
      trackEnabled: {
        backgroundColor: 'gray',
      },
      trackDisabled: {
        backgroundColor: 'gray',
      },
      thumb: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
      },
      thumbEnabled: {
        alignSelf: 'flex-end',
      },
      thumbDisabled: {
        alignSelf: 'flex-start',
      },})
