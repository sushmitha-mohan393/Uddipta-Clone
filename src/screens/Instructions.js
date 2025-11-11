import {useRef, useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
import LottieView from "lottie-react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';

import YoutubeIframe from "react-native-youtube-iframe";
export default function Instructionss({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null);
     const[chevronDown,setChevronDown]=useState(false);
     const[chevronRight,setChevronRight]=useState(false);
     const[closeModal,setCloseModal]=useState(false);
      const[playing,setPlaying]=useState(false)
  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
  
    return(
      <DrawerSceneWrapper>
        <ScrollView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:0,marginTop:25}}>
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu" size={25} color="#666" />
            </TouchableOpacity>
              <View style={styles.noti}>
          <Ionicons name="notifications-outline" size={30} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
         
       <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Meter<Text style={{color:"#4f7640ff"}}> Instructions</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:16}}>
      Provides users with detailed instructions and guidelines related to operation and management of meters.
           </Text> 
           
        <View style={{backgroundColor:"#fff",margin:20,marginTop:heightValue(17),borderRadius:10,padding:25,}}>
      
      <View style={{flexDirection:"row",gap:20}}     >
        <Entypo name="youtube" color="#d41919ff" size={25} />
      <View style={{flexDirection:"row",gap:widthValue(3)}}>
        <Text style={{fontSize:17,fontWeight:500}}>
            RSE Procedures
        </Text>
        <TouchableOpacity onPress={()=>setChevronDown(!chevronDown)}>
        <Entypo name="chevron-thin-down" color="#358945ff" size={24} />
        </TouchableOpacity>
      </View>
</View>
 { chevronDown && ( <View style={{paddingTop:30}}> <YoutubeIframe
        play={playing}
        height={200}
      

      
        videoId={'WJWeME_HK-U'}
      /></View>

 )}
</View>

 <TouchableOpacity onPress={()=>setChevronRight(!chevronRight)}>
        <View style={{backgroundColor:"#fff",margin:20,marginTop:0,borderRadius:10,flexDirection:"row",padding:25,gap:20}}>
     <AntDesign name="pdffile1" color="#d41919ff" size={24} />
      <View style={{flexDirection:"row",gap:widthValue(20)}}>
        <Text style={{fontSize:17,fontWeight:500}}>
            Meter Manual Communications
        </Text>
       
        <MaterialCommunityIcons name="chevron-double-right" color="#358945ff" size={24} />
       
       { chevronRight && 
                <View > 
                <Modal
                         transparent
                                 visible={chevronRight}
                                 animationType='fade'
                                  onRequestClose={()=>setChevronRight(false)}
                               >
                     
                         <View style={styles.overlay}>
                          
                          
                              <View style={styles.alertBox}>
                                <TouchableOpacity onPress={()=>setChevronRight(false)}>
                                <Feather name="x" color="#000" size={24} />
                                </TouchableOpacity>
                                <LottieView source={require("../../assets/animations/PDF.json")}autoPlay loop style={styles.imageContainer} />
                                
                              </View>
                            </View>
                          </Modal>
                    </View>
              }
             
           
      </View>

</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>setChevronRight(!chevronRight)}>
        <View style={{backgroundColor:"#fff",margin:20,marginTop:0,borderRadius:10,flexDirection:"row",padding:25,gap:20}}>
       <AntDesign name="pdffile1" color="#d41919ff" size={24} />
      <View style={{flexDirection:"row",gap:widthValue(5.5)}}>
        <Text style={{fontSize:17,fontWeight:500}}>
            Value Open Instructions
        </Text>
        
        <MaterialCommunityIcons name="chevron-double-right" color="#358945ff" size={24} />
  
      </View>

</View>
  </TouchableOpacity>      

          


          </ScrollView>
          </DrawerSceneWrapper>
          )
          }
          const styles = StyleSheet.create({
  container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
  },imageContainer: {
    width:widthValue(2),
   height:heightValue(2),
    alignSelf:"center",margin:"auto"
  },
  

 
     noti: {
        position: 'relative',
        width: 30, 
        height: 30, 
  
      },
      badge: {
        position: 'absolute',
        top: -5, 
        right: -5, 
        backgroundColor: '#64ad54ff',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
      },
       overlay: {
   
    justifyContent:"center",
   flex:1,
    backgroundColor:"rgba(0,0,0,0.5)",paddingHorizontal:20,paddingVertical:heightValue(3)
  },
  alertBox: {
    backgroundColor: 'white',
    
 padding:20,
   width:widthValue(1.2),
   height:heightValue(1.2),
   marginHorizontal:"auto",
    
    elevation:5
  },
 
    })
