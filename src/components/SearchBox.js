import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SearchBox = ({search,setSearch,placeholder,style}) => {
  return (
      <View style={[{backgroundColor:"#FFFFFF",paddingHorizontal:15,borderWidth:1,borderRadius:7,borderColor:"#7B80B1CC",flexDirection:"row",justifyContent:"space-between",paddingVertical:5,marginVertical:20},style]}>
              <TextInput  placeholder={placeholder}  placeholderTextColor={"black"} value={search}
                onChangeText={(text) => setSearch(text)}
               >
                  
              </TextInput>
              <TouchableOpacity style={{alignSelf:"center"}} onPress={()=>{(text) => setSearch(text)}} >
                     <FontAwesome name="search" color="#7B80B1" size={18} />
                  </TouchableOpacity>
                  </View>)
}

export default SearchBox