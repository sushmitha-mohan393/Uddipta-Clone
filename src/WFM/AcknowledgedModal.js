import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Box from "../components/Box";
import SearchBox from "../components/SearchBox";
import { fontStyles, heightValue } from "../../styles";
const installers = [
  { id: 1, installer: "Installer 1" },
  { id: 2, installer: "Installer 2" },
  { id: 3, installer: "Installer 3" },
  { id: 4, installer: "Installer 4" },
  { id: 5, installer: "Installer 5" },
];
const AcknowledgedModal = ({
  selected,
  installerCheck,
  setInstallerCheck,
  toggleInstaller,
  closeModal,
  step,setStep
}) => {
  const [instalSearch, setInstalSearch] = useState("");
  const installfiltered = installers.filter(item =>
    item.installer.toLowerCase().includes(instalSearch.toLowerCase())
  );
  return (
    <Modal transparent visible animationType="slide">
      <View style={styles.overlay}>
         <TouchableOpacity style={{alignSelf:"center",margin:10}} onPress={closeModal}>
         <AntDesign name="closecircle" color="#FFFFFF" size={heightValue(25)} />
         </TouchableOpacity>
        {step === "allocate" && (
              <Box style={{padding:25,borderRadius:50}}>
                 {selected.length>1 ?<View >
                <Text style={[fontStyles.fontSize17,{textAlign:"center",fontWeight:"500",marginBottom:10}]}>Allocate {selected.length} Meters</Text>
               <Text style={{textAlign:"center"}}>Select one or more installers to distribute {selected.length} meters among them</Text></View>:<Text  style={[fontStyles.fontSize17,{textAlign:"center",fontWeight:"500"}]}> Allocate 1 Meter</Text>}
                 <View style={styles.seperator}></View>
                 <Text  style={[fontStyles.fontSize17,{fontWeight:"500",marginTop:10}]}>Available Installers</Text>
                 <SearchBox search={instalSearch} setSearch={setInstalSearch} placeholder={"Search Installer"} style={{marginVertical:15}}/>
                {installfiltered.map((item)=>(
                 <View  key={item.id}style={{backgroundColor:"#FFFFFF",paddingHorizontal:15,borderWidth:1,borderRadius:7,borderColor:"#7B80B1CC",flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                  <Text>{item.installer}</Text>
                   <TouchableOpacity onPress={() => toggleInstaller(item.id)}>
  <MaterialCommunityIcons
    name={installerCheck.includes(item.id) ? "checkbox-marked" : "square-outline"}
    size={24}
    color="#7B80B1"
  />
</TouchableOpacity>
                 </View>
                ))}
                 <TouchableOpacity disabled={(installerCheck<1)} onPress={()=>{setStep("confirm")}}  style={{flexDirection:"row",backgroundColor:"#7B80B1",padding:10,paddingHorizontal:30,borderRadius:15,gap:10,alignItems:"center",justifyContent:"center",marginTop:30}}>
                <Text style={[fontStyles.fontSize17,{color:"white"}]}>Confirm Allocation</Text>
                 <Feather name="check-circle" color="white" size={24} />
              </TouchableOpacity> 
            </Box>
        )}
        {step === "confirm" && (
          <Box style={{padding:25,borderRadius:50}}>
                  <Text style={[fontStyles.fontSize17,{textAlign:"center",fontWeight:"500",marginBottom:10}]}>Are you sure you want to allocate the meters to the selected installers </Text>
                   <View style={styles.seperator}></View>
                   <View style={{flexDirection:"row",justifyContent:"space-around"}}>
                    <TouchableOpacity onPress={()=>setStep("success")}style={{paddingHorizontal:20,padding:10,backgroundColor:"#7B80B1",marginTop:20,borderRadius:10}}><Text style={{color:"white"}}>Yes</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setStep("allocate"),setInstallerCheck([])}} style={{paddingHorizontal:20,padding:10,backgroundColor:"#7B80B1",marginTop:20,borderRadius:10}}><Text style={{color:"white"}}>No</Text></TouchableOpacity>
                   </View> 
            </Box>
        )}
        {step === "success" && (
           <Box style={{padding:25,borderRadius:50}}>
                  <Text style={[fontStyles.fontSize17,{textAlign:"center",fontWeight:"500",marginBottom:10}]}>{selected.length} Meters Successfully  Allocated to selected installers </Text>
                     <TouchableOpacity onPress={closeModal}style={{paddingHorizontal:40,padding:10,backgroundColor:"#7B80B1",marginTop:20,borderRadius:10,marginHorizontal:"auto"}}><Text style={{color:"white",textAlign:"center"}}>Close</Text></TouchableOpacity>
            </Box>
        )}
      </View>
    </Modal>
  );
};
export default AcknowledgedModal;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    padding: 23,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center"
  }
});
