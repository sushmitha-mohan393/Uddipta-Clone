
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { View, Text,TextInput, TouchableOpacity,FlatList,ScrollView, StyleSheet } from 'react-native'
import  { useRef, useState } from 'react'
import Box from '../components/Box'
import { fontStyles, heightValue, widthValue } from '../../styles'
import SearchBox from "../components/SearchBox";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react'


const MeterStatus = () => {
  const today = new Date().toISOString().slice(0, 10);
      const [search, setSearch] = useState("");
 const [selected, setSelected] = useState([])
 const toggleSelect = (id) => {

  if (id === "all") {
    if (selected.length === data.length) {
      setSelected([]); 
    } else {
      setSelected(data.map(item => item.id)); 
    }
    return;
  }


  setSelected(prev =>
    prev.includes(id)
      ? prev.filter(item => item !== id)
      : [...prev, id]
  );
};

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

     <Box style={{gap:5,marginVertical:10,width:widthValue(2.45),paddingVertical:7,paddingHorizontal:10}}>
                <View style={{flexDirection:"row",paddingHorizontal:2,justifyContent:"space-between"}}>
                    <View><Text style={[fontStyles.fontSize15,{fontWeight:"500"}]}>Meter No:</Text><Text style={[fontStyles.fontSize15,{fontWeight:"500"}]}>{item.Serial}</Text></View> 
                <TouchableOpacity onPress={() => toggleSelect(item.id)}>
  <MaterialCommunityIcons
    name={selected.includes(item.id) ? "checkbox-marked" : "square-outline"}
    size={24}
    color="#7B80B1"
  />
</TouchableOpacity>


</View>  
      <View style={{marginVertical:7}}>
        <Text style={[fontStyles.small]}>Acknowledge Date :</Text>
       <Text style={[fontStyles.small]}>{today}</Text>
      </View>
      </Box>
                 

)
  return (
    
         <ScrollView style={{paddingBottom:50,padding:25,}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
      <Text style={[fontStyles.fontSize19,{color:"#6A6E9C",fontWeight:500}]}>MeterStatus</Text>
      <View style={{backgroundColor:"#EFF1FF",flexDirection:"row", gap:10,paddingHorizontal:10,padding:10,borderRadius:6,elevation:5,alignItems:"center"}}>
       <TouchableOpacity onPress={() => toggleSelect("all")}>
  <MaterialCommunityIcons
    name={selected.length === data.length ? "checkbox-marked" : "square-outline"}
    size={25}
    color="#7B80B1"
  />
</TouchableOpacity>

   <Text style={[fontStyles.fontSize15,{fontWeight:500}]}>Select all meters</Text>
      </View>
      </View>
<SearchBox  search={search} setSearch={setSearch} placeholder={"Search Meter No"}/>
                   
<FlatList data={filtered} renderItem={renderMeter} keyExtractor={item => item.id.toString()}  numColumns={2} columnWrapperStyle={{ justifyContent:"space-between"}} contentContainerStyle={{paddingBottom:30}} />
            
      </ScrollView>
    
  )
}

export default MeterStatus

 const styles=StyleSheet.create({
     seperator:{
        height:1,marginTop:10,marginHorizontal:5,borderBottomWidth:1,borderStyle:"dashed",borderBottomColor:"#7B80B1"
      }
 })
