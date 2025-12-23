import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Modal, StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Box from "../components/Box";
import SearchBox from "../components/SearchBox";
import { fontStyles, heightValue } from "../../styles";
import AcknowledgedModal from "./AcknowledgedModal";
const Acknowledged = () => {
  const installers = [
    { id: 1, installer: "Installer 1" },
    { id: 2, installer: "Installer 2" },
    { id: 3, installer: "Installer 3" },
    { id: 4, installer: "Installer 4" },
    { id: 5, installer: "Installer 5" },
  ];
 const [step, setStep] = useState("allocate")
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);
  const [installerCheck, setInstallerCheck] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [allocateModal, setAllocateModal] = useState(false);
  const generateSerials = (start, count) => {
    return Array.from({ length: count }, (_, i) => start + i);
  };
  const serials = generateSerials(110008008, 14);
  const data = serials.map((num, index) => ({
    id: index + 1,
    Serial: num
  }));
  const filtered = data.filter(item =>
    item.Serial.toString().includes(search)
  );
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
const toggleInstaller = (id) => {
  const maxSelectableInstallers = Math.min(selected.length, installers.length);
  if (installerCheck.includes(id)) {
    setInstallerCheck(prev => prev.filter(item => item !== id));
    return;
  }
  if (installerCheck.length >= maxSelectableInstallers) {
    return; 
  }
  setInstallerCheck(prev => [...prev, id]);
}
  useEffect(() => {
    if (selected.length > 1) setModalVisible(true);
    else setModalVisible(false);
  }, [selected]);
  const renderMeter=({item})=>(
     <Box style={{gap:5,marginVertical:10,paddingHorizontal:17,paddingVertical:7}}>
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
         <View style={styles.seperator}></View>
        <View style={{flexDirection:"row",gap:20,marginVertical:5}}>
           <TouchableOpacity style={{backgroundColor:"#E7BFC5",borderWidth:1,borderColor:"#e0909cff",borderRadius:6,elevation:10,shadowColor:"#591109",paddingHorizontal:7,paddingVertical:5,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 4,}}><Text style={[fontStyles.fontSize13]}>Faulty</Text></TouchableOpacity>
           <TouchableOpacity onPress={()=>{if (filtered.length > 0) {
      setSelected([filtered[item.id-1].id]);
    }setAllocateModal(true)}} style={{backgroundColor:"#D3DCCE",borderWidth:1,borderColor:"#a8c29aff",borderRadius:6,elevation:10,shadowColor:"#2e5f13ff",paddingHorizontal:7,paddingVertical:5,
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 4,}}><Text style={[fontStyles.fontSize13]}>Allocate</Text></TouchableOpacity>
        </View>
      </Box>
)
  return (
    <ScrollView style={{ paddingBottom: 50, padding: 25 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <Text style={[fontStyles.fontSize19, { color: "#6A6E9C", fontWeight: 500 }]}>
          Acknowledged
        </Text>
        <View style={{ flexDirection: "row", gap: 10, backgroundColor: "#EFF1FF", padding: 10, borderRadius: 6 }}>
          <TouchableOpacity onPress={() => toggleSelect("all")}>
            <MaterialCommunityIcons
              name={selected.length === data.length ? "checkbox-marked" : "square-outline"}
              size={25}
              color="#7B80B1"
            />
          </TouchableOpacity>
          <Text style={[fontStyles.fontSize15, { fontWeight: 500 }]}>Select all meters</Text>
        </View>
      </View>
      <SearchBox search={search} setSearch={setSearch} placeholder="Search Meter No" />
     <FlatList data={filtered} renderItem={renderMeter} keyExtractor={item => item.id.toString()}  numColumns={2} columnWrapperStyle={{ justifyContent:"space-between"}} contentContainerStyle={{paddingBottom:30}} />
            <Modal  visible={modalVisible}
  transparent
  animationType="slide" presentationStyle="overFullScreen"
      statusBarTranslucent={true}>
                 <View style={[styles.overlay,{justifyContent:"flex-end"}]}>
            <TouchableOpacity style={{alignSelf:"center",margin:10}} onPress={() => setModalVisible(false)}>
         <AntDesign name="closecircle" color="#FFFFFF" size={heightValue(25)} />
         </TouchableOpacity>
             <Box style={{padding:25,flexDirection:"row",justifyContent:"space-between",borderRadius:50}}>
                <View style={{justifyContent:"center",gap:7}}>
              <Text style={[fontStyles.fontSize17,{fontWeight:"500"}]}>{selected.length} Meters selected</Text>
              <Text style={[fontStyles.fontSize15]}>Ready to allocate</Text>
              </View>
              <TouchableOpacity  onPress ={()=>{setAllocateModal(true),setModalVisible(false)}} style={{flexDirection:"row",backgroundColor:"#7B80B1",padding:10,paddingHorizontal:30,borderRadius:15,gap:10,alignItems:"center"}}>
                <Text style={[fontStyles.fontSize17,{color:"white"}]}>Allocate</Text>
                 <Feather name="check-circle" color="white" size={24} />
              </TouchableOpacity>
            </Box>
            </View>
            </Modal>
      {allocateModal && (
        <AcknowledgedModal
          selected={selected}
          installerCheck={installerCheck}
          setInstallerCheck={setInstallerCheck}
          toggleInstaller={toggleInstaller}
          step={step}
          setStep={setStep}
          closeModal={() => {setAllocateModal(false),setSelected([],setStep("allocate"),setInstallerCheck([]))}}
        />
      )}
    </ScrollView>
  );
};
export default Acknowledged;
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center"
  },
});
