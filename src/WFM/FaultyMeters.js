import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text,TextInput, TouchableOpacity,FlatList,ScrollView, StyleSheet } from 'react-native'
import  { useRef, useState } from 'react'
import Box from '../components/Box'
import { fontStyles, heightValue, widthValue } from '../../styles'
import SearchBox from "../components/SearchBox";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react'


const FaultyMeters = () => {

      const [search, setSearch] = useState("");



const generateSerials = (start, count) => {
let arr = [];
for (let i = 0; i < count; i++) {
  arr.push(start + i);
}return arr;
};

const serials = generateSerials(110008008, 14);
const data = serials.map((num, index) => ({
  id: index + 1,
  Serial: num
}));

const filtered = data.filter(item =>
    item.Serial.toString().includes(search)
  );
const renderMeter=({item})=>(

     <Box style={{gap:5,marginVertical:10,paddingVertical:10,paddingHorizontal:10}}>
               
                    <View style={{paddingHorizontal:25,alignItems:"center"}} ><Text style={[fontStyles.fontSize15,{fontWeight:"500"}]}>Meter Number</Text><Text style={[fontStyles.fontSize15,{fontWeight:"500"}]}>{item.Serial}</Text></View> 
         <View style={styles.seperator}></View>
         <View style={{flexDirection:"row",paddingHorizontal:7,justifyContent:"flex-end",marginTop:5,gap:7,alignItems:"center"}}><Text style={{fontWeight:500}} >View Details</Text><AntDesign name="arrowright" color="#000" size={18} /></View>
     
      </Box>
                 

)
  return (
    
         <ScrollView style={{paddingBottom:50,padding:25,}}>
            <View style={{flexDirection:"row",alignItems:"center"}}>
      <Text style={[fontStyles.fontSize19,{color:"#6A6E9C",fontWeight:500,flex:1}]}>Faulty Meters</Text>
   <View style={{flex:2}}>
   <SearchBox  search={search} setSearch={setSearch}/>
      </View>             
      </View>
       

<FlatList data={filtered} renderItem={renderMeter} keyExtractor={item => item.id.toString()}  numColumns={2} columnWrapperStyle={{ justifyContent:"space-between"}} contentContainerStyle={{paddingBottom:30}} />
            
      </ScrollView>
    
  )
}

export default FaultyMeters

 const styles=StyleSheet.create({
     seperator:{
        height:1,marginTop:10,marginHorizontal:10,borderBottomWidth:1,borderStyle:"dashed",borderBottomColor:"#7B80B1"
      }
 })
