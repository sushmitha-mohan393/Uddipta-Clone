import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { heightValue, widthValue } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import { Colors } from '../../Colors';


const RequestFeed = ({navigation}) => {
     const [text, setText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
const [dropText, setDropText] = useState("Select Type");
const [selectedId, setSelectedId] = useState(null);
const [charCount,setCharCount]=useState(0)
const charLimit=400;
const isButtonEnabled=(dropText!=="Select Type" && charCount );
const darkMode = useSelector((state) => state?.darkMode?.darkMode);
     const dropdata=[
       
        {id:"1",name:"Connection"},
        {id:"2",name:"Disconnection"},
        {id:"3",name:"Load extension"},
        {id:"4",name:"Meter Check"},
        {id:"5",name:"Others"},
     ]
  return (
     <View style={[styles.container,{ backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
            <View style={{flexDirection:"row"}}>
          <Feather name="chevron-left" color={darkMode?Colors.white:Colors.black} size={heightValue(35)} />
          <Text style={{fontSize:heightValue(50),color:darkMode?Colors.white:Colors.black}}>Back</Text>
          </View>
          </TouchableOpacity>
           <Text style={{marginHorizontal:widthValue(40),marginVertical:heightValue(90),fontSize:heightValue(38),fontWeight:450,color:darkMode?Colors.white:Colors.black}}>Send<Text style={{color:"#4f7640ff"}}> Request</Text></Text>
           <Text style={{marginHorizontal:widthValue(40),fontSize:heightValue(45),fontWeight:450,marginBottom:10,color:darkMode?Colors.white:Colors.black}}>Request Type</Text>
           
       
           <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}>

 
  <TouchableOpacity
    style={{
      paddingVertical: heightValue(60),
      paddingHorizontal:widthValue(20),
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    }}
    onPress={() => setShowDropdown(!showDropdown)}
  >
    <Text style={{ fontSize: heightValue(55),color:darkMode?Colors.white:Colors.black}}>{dropText}</Text>

    <Ionicons
      name={showDropdown ? "chevron-up-outline" : "chevron-down-outline"}
      color={darkMode?Colors.white:Colors.black}
      size={heightValue(38)}
    />
  </TouchableOpacity>

 
  {showDropdown && (
    <View>
    
      

      {dropdata.map((item) => (
        <View key={item.id}>
          
          <View style={[styles.seperator, { marginHorizontal: 20 }]} />

          <TouchableOpacity
            style={{
              paddingVertical: heightValue(60),
      paddingHorizontal:widthValue(20),
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
            <Text style={{ fontSize: heightValue(55) ,color:darkMode?Colors.white:Colors.black}}>{item.name}</Text>

            {selectedId === item.id && (
              <Ionicons name="checkmark-outline" size={heightValue(45)} color="green" />
            )}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )}
</View>
           <Text style={{marginHorizontal:widthValue(40),fontSize:heightValue(42),fontWeight:450,marginVertical:heightValue(90),color:darkMode?Colors.white:Colors.black}}>Reason</Text>
           <View style={{height:heightValue(3),backgroundColor:darkMode?Colors.darkbg:Colors.white}}>
           <TextInput 
            
            value={text}
            
  onChangeText={(value) => {
    setText(value);
    setCharCount(value.length);
  }}
            multiline={true}
            placeholder="Please enter your Reason"
            placeholderTextColor={darkMode?Colors.white:Colors.black}  style={{padding:15,fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}
            
            
                        />
            </View>
           <Text style={{alignSelf:"flex-end",marginTop:10,fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}> {charCount}/{charLimit}</Text>
            <TouchableOpacity disabled={charCount===0 || dropText=="Select Type"}>
          <View style={[styles.submit,isButtonEnabled&& {backgroundColor:"green"}]}>
            <Text style={{margin:"auto",color:"white",fontSize:heightValue(50)}}>Submit</Text>
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
       backgroundColor:"#262E41",borderRadius:30,marginHorizontal:"auto",marginVertical:heightValue(30),paddingHorizontal:widthValue(25),paddingVertical:heightValue(70)
      }
    
    
    
    })