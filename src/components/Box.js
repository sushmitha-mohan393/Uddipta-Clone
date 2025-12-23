import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { heightValue } from "../../styles";

const Box=({children,style}) =>{
  return (
   
    
      <TouchableOpacity style={[style,{borderRadius:8,borderTopColor:"#7B80B1",borderTopWidth:10,backgroundColor:"#EFF1FF",elevation:5,shadowRadius:12,margin:2}]}>
        {children}
      </TouchableOpacity>
     
     
   
  );
}

export default Box

