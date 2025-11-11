import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { heightValue, widthValue } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


const RequestFeed = ({navigation}) => {
     const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
const [dropText, setDropText] = useState("Select  Type");
const [selectedId, setSelectedId] = useState(null);
const [charCount,setCharCount]=useState(0)
const charLimit=400;
const isButtonEnabled=(dropText&&charCount);

     const dropdata=[
       
        {id:"1",name:"Connection"},
        {id:"2",name:"Disconnection"},
        {id:"3",name:"Load extension"},
        {id:"4",name:"Meter Check"},
        {id:"5",name:"Others"},
     ]
  return (
     <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={{flexDirection:"row"}}>
          <Feather name="chevron-left" color="#000" size={24} />
          <Text style={{fontSize:18}}>Back</Text>
          </View>
          </TouchableOpacity>
           <Text style={{marginHorizontal:widthValue(40),marginVertical:heightValue(90),fontSize:25,fontWeight:450}}>Send<Text style={{color:"#6ba257ff"}}> Request</Text></Text>
           <Text style={{marginHorizontal:widthValue(40),fontSize:20,fontWeight:450,marginBottom:10}}>Request Type</Text>
           
       
           <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}>

 
  <TouchableOpacity
    style={{
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}
    onPress={() => setShowDropdown(!showDropdown)}
  >
    <Text style={{ fontSize: 16 }}>{dropText}</Text>

    <Ionicons
      name={showDropdown ? "chevron-up-outline" : "chevron-down-outline"}
      color="#000"
      size={25}
    />
  </TouchableOpacity>

 
  {showDropdown && (
    <View>
    
      

      {dropdata.map((item) => (
        <View key={item.id}>
          
          <View style={[styles.seperator, { marginHorizontal: 20 }]} />

          <TouchableOpacity
            style={{
              paddingVertical: 10,
              paddingHorizontal: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            //   alignItems: "center"
            }}
            onPress={() => {
              setDropText(item.name);
              setSelectedId(item.id);
              setShowDropdown(false);
            }}
          >
            <Text style={{ fontSize: 16 }}>{item.name}</Text>

            {selectedId === item.id && (
              <Ionicons name="checkmark-outline" size={20} color="green" />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )}
</View>
           <Text style={{marginHorizontal:widthValue(40),fontSize:20,fontWeight:450,marginVertical:heightValue(90)}}>Reason</Text>
           <View style={{height:heightValue(3),backgroundColor:"white"}}>
           <TextInput 
            
            value={text}
            
  onChangeText={(value) => {
    setText(value);
    setCharCount(value.length);
  }}
            multiline={true}
            placeholder="Please enter your Reason"
            placeholderTextColor={"black"}  style={{padding:15}}
            
            
                        />
            </View>
           <Text style={{alignSelf:"flex-end",marginTop:10,fontSize:16}}> {charCount}/{charLimit}</Text>
            <TouchableOpacity >
          <View style={[styles.submit,isButtonEnabled&& {backgroundColor:"green"}]}>
            <Text style={{margin:"auto",color:"white",fontSize:18}}>Submit</Text>
          </View>
          </TouchableOpacity>
          
          
          </View>
  )
}

export default RequestFeed
const styles=StyleSheet.create({
     container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
    padding:20,paddingTop:40
  },
seperator:{
        height:1,marginVertical:1,backgroundColor:"#dfd8d8ff"
      },
      submit:{
        width:widthValue(4),height:heightValue(20),backgroundColor:"#252d42ff",borderRadius:30,marginHorizontal:"auto",marginVertical:heightValue(30)
      }
    
    
    
    })