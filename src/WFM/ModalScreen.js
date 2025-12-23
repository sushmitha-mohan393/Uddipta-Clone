import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,TextInput,
  Alert
  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { fontStyles, heightValue, widthValue } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ModalScreen = ({navigation}) => {
const data=[
  {id:1,title:"Camera",subtitle:"Scan with your device",icon:"camera",route:"ColorMode",onPress:()=>navigation.navigate('ColorMode')},
  {id:1,title:"Add Manually",subtitle:"Enter Details Manually",icon:"plus-square",route:"ModalScreen",onPress:()=>setManuallyModal(true)},

]
    const [showAlert, setShowAlert] = useState(false);
    const [manuallyModal,setManuallyModal] = useState(false);
        const [modelText, setModelText] = useState(''); 
     const [boxNo, setBoxNo] = useState('');
      const [meterNo, setMeterNo] = useState('');
           useEffect(() => {
            setShowAlert(true);
          }, []);
    const handleSubmit=()=>
    { if(meterNo==="")
      Alert.alert("Please enter meter serial no.")
      else if(boxNo==="")
        Alert.alert("Please enter box no.")
      else if(modelText==="")
         Alert.alert("Please enter model.")

    }
  return (
   <SafeAreaView>
    
       
        <View style={styles.container}>
     
         
               <Modal
              transparent
                 visible={showAlert}
                 animationType='fade'
                 onRequestClose={() => setShowAlert(false)}
                   presentationStyle="overFullScreen"
          statusBarTranslucent={true}
               >
     
         {!manuallyModal ?
         
          <View style={styles.overlay}>
            <TouchableOpacity style={{alignSelf:"center",margin:10}} onPress={()=>setShowAlert(false)}>
         <AntDesign name="closecircle" color="#FFFFFF" size={heightValue(25)} />
         </TouchableOpacity>
              <View style={styles.alertBox}>
                <Text style={[styles.alertTitle,fontStyles.fontSize19]}>Open With</Text>
                <Text style={[fontStyles.fontSize15,{textAlign:"center"}]}>Select how would you like to proceed</Text>
                
               {data.map((item)=>
                <View style={styles.buttonRow} key={item.id}>
                 <TouchableOpacity style={styles.button} onPress={item.onPress}>
                    <Feather name={item.icon} color="#7B80B1" size={35} style={{alignSelf:"center"}}/>
                    <View style={{width:widthValue(2.3)}}>
                        <Text style={[fontStyles.fontSize17,{fontWeight:"bold"}]}>{item.title}</Text>
                        <Text style={[fontStyles.fontSize15]}>{item.subtitle}</Text>
                      
                    </View>
                    <View style={{alignSelf:"center"}}>
                      <Feather name="chevrons-right" color="#7B80B1" size={40} style={{fontWeight:"bold"}}/></View>
                 </TouchableOpacity>
                
                 
     
             
                </View>
                )}
              </View> 
            </View>
            : <View style={[styles.overlay,]}>
            <TouchableOpacity style={{alignSelf:"center",margin:10}} onPress={()=>{setManuallyModal(false),setShowAlert(true)}}>
         <AntDesign name="closecircle" color="#FFFFFF" size={heightValue(25)} />
         </TouchableOpacity>
              <View style={[styles.alertBox,{flex:0.5,padding:35}]}>
                <Text style={[styles.alertTitle,fontStyles.fontSize19]}>Add Meters Details </Text>
              <View style={{paddingTop:12}}>
                <Text style={[fontStyles.fontSize17,{marginVertical:7}]}>Meter Serial Number*</Text>
                <TextInput  value={meterNo}     
  onChangeText={(value) => {
    setMeterNo(value); }}  placeholder="Enter meter number" placeholderTextColor={"black"} style={{width:widthValue(1.2),backgroundColor:"#FFFFFF",marginHorizontal:"auto",paddingHorizontal:15,borderWidth:0.9,borderColor:"#00000040"}}/>
                 </View> 
                 <View style={{paddingTop:12}}>
                <Text style={[fontStyles.fontSize17,{marginVertical:7}]}>Box Number*</Text>
                <TextInput  value={boxNo}     
  onChangeText={(value) => {
    setBoxNo(value); }} placeholder="Enter box number" placeholderTextColor={"black"} style={{width:widthValue(1.2),backgroundColor:"#FFFFFF",marginHorizontal:"auto",paddingHorizontal:15,borderWidth:0.9,borderColor:"#00000040"}}/>
                 </View>
                 <View  style={{paddingTop:12}}>
                <Text style={[fontStyles.fontSize17,{marginVertical:7}]}>Model*</Text>
                <TextInput  value={modelText}     
  onChangeText={(value) => {
    setModelText(value);

  }}   placeholder="Enter model"  placeholderTextColor={"black"} style={{width:widthValue(1.2),backgroundColor:"#FFFFFF",marginHorizontal:"auto",paddingHorizontal:15,borderWidth:0.9,borderColor:"#00000040"}}/>
                </View>
                <TouchableOpacity  onPress={handleSubmit} style={{paddingVertical:10,width:widthValue(2.5),margin:"auto",backgroundColor:"#7B80B1",borderRadius:10}}><Text style={[fontStyles.fontSize17,{color:"white",textAlign:"center",fontWeight:"bold"}]}>Submit</Text></TouchableOpacity>
              </View>
            </View>
}

        </Modal>
        </View>
           
        
         
        
     
      

   
   </SafeAreaView>
  )
}

export default ModalScreen
 const styles = StyleSheet.create({
      container: {
        flex: 1,
      
      },
      
    
     
      overlay: {
       
        justifyContent:"flex-end",
       flex:1,
        backgroundColor:"rgba(0,0,0,0.5)"
      },
      alertBox: {
        backgroundColor: 'white',
        borderRadius:20,
        flex:.35,
       backgroundColor:"#EFF1FF",
padding:20,
     
        elevation:5
      },
      alertTitle: {
        fontSize: heightValue(48),
        fontWeight: '600',
        marginBottom:heightValue(120),textAlign:"center"
      },
      buttonRow: {
       marginVertical:"auto",
    gap:30
      },
      button: {
  width: widthValue(1.2),
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingVertical:15,
  gap: 20,
  margin: "auto",
  borderRadius: 10,
  backgroundColor: "#EFF1FF", 
  borderWidth: 2,
  borderColor: "#7B80B1",
  elevation: 5,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
},
    
    });