import {useCallback, useEffect, useRef, useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
import LottieView from "lottie-react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video from 'react-native-video';
import YoutubeIframe from "react-native-youtube-iframe";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Pdf from 'react-native-pdf';
import ReactNativeBlobUtil from 'react-native-blob-util';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
export default function Instructionss({navigation})
{ 
  const{openDrawer}=navigation;
     const darkMode = useSelector((state) => state?.darkMode?.darkMode);
   const [path, setPath] = useState(null);
    const [path1, setPath1] = useState(null);
     const[chevronDown,setChevronDown]=useState(false);
     const[chevronRight,setChevronRight]=useState(false)
   
      const[playing,setPlaying]=useState(false);
    const [showAnimation, setShowAnimation] = useState(true);
    const [index,setIndex]=useState(1);
    const link="https://cportal.agclinfra.in/assets/pdf/RseInstructions.pdf"
const link1="https://cportal.agclinfra.in/assets/pdf/ValueProcedure.pdf"
  useEffect(() => {
     const downloadAndOpen = async () => {
       const { config, fs } = ReactNativeBlobUtil;//gives the app’s documents directory path — a safe, sandboxed folder where you can store files.
       const pathToWrite = fs.dirs.DocumentDir + '/ValueProcedure.pdf';// saved as value procedure
       try {
        if(index===1){
         const res = await config({ path: pathToWrite }).fetch(
           'GET',
           link)
          
         //fetching the file and storing the response in res
         console.log('PDF saved to:', res.path());
         setPath(res.path());
         //this is the actual path
       } 
        if(index===2){
         const res = await config({ path: pathToWrite }).fetch(
           'GET',
           link1)
          
         console.log('PDF saved to:', res.path());
         setPath1(res.path());
     
       } 
      }catch (e) {
         console.log('Download error:', e);
       }
     };
     downloadAndOpen();
   }, [index]);
  
      
 
  useEffect(() => {
    if (chevronRight) {
     
      setShowAnimation(true);

      setTimeout(() => {
        setShowAnimation(false);
      }, 3000);
    }
  }, [chevronRight]);
 

  
  
    return(
     
          <SafeAreaView style={{flex:1,backgroundColor:darkMode?Colors.black:Colors.bgscreens}}>
        <ScrollView style={[styles.container,{backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:widthValue(20),marginBottom:0,marginTop:5}}>
            <TouchableOpacity onPress={openDrawer}>
              <Icon name="menu" size={heightValue(30)} color="#666" />
            </TouchableOpacity>
              <View style={styles.noti}>
          <Ionicons name="notifications-outline" size={widthValue(14)} color={darkMode?Colors.menubar:Colors.black}  />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
         
       <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Meter<Text style={{color:"#4f7640ff"}}> Instructions</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
      Provides users with detailed instructions and guidelines related to operation and management of meters.
           </Text> 
           
        <View style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:heightValue(17),borderRadius:10,padding:25,paddingVertical:heightValue(35)}}>
      
      <View style={{flexDirection:"row",gap:20}}     >
        <Entypo name="youtube" color="#d41919ff" size={heightValue(35)} />
      <View style={{flexDirection:"row",gap:widthValue(3.4)}}>
        <Text style={{fontSize:heightValue(52),fontWeight:500,width:widthValue(3),color:darkMode?Colors.white:Colors.black}}>
            RSE Procedures
        </Text>
        <TouchableOpacity onPress={()=>setChevronDown(!chevronDown)}>
        <Entypo name="chevron-thin-down" color="#64ad54ff" size={heightValue(40)}/>
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

 <TouchableOpacity onPress={()=>{setChevronRight(!chevronRight),setIndex(1)}}>
        <View style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:25,paddingVertical:heightValue(35)}}>
          
      <View style={{flexDirection:"row",gap:20}}     >
     <AntDesign name="pdffile1" color="#d41919ff" size={heightValue(35)} />
  
        <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:heightValue(52),fontWeight:500,width:widthValue(1.6),color:darkMode?Colors.white:Colors.black}}>
                 Meter Manual Communication
            </Text>
        <MaterialCommunityIcons name="chevron-double-right" color="#64ad54ff" size={heightValue(40)} />
        </View>
     
      </View>
       { chevronRight && index === 1  && 
                <View > 
                <Modal
                         transparent
                                 visible={chevronRight}
                                 animationType='fade'
                                  onRequestClose={()=>setChevronRight(false)}
                                    presentationStyle="overFullScreen"
      statusBarTranslucent={true}
                               >
                     
                         <View style={styles.overlay}>
                          
                          
                              <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
                                <TouchableOpacity onPress={()=>setChevronRight(false)}>
                                 <EvilIcons name="close" color={darkMode?Colors.white:Colors.black} size={24} />
                                </TouchableOpacity>
                                {showAnimation?(<LottieView source={require("../../assets/animations/PDF.json")}autoPlay loop={false} style={styles.imageContainer} />):
                                (
                                <View style={{alignItems:"center",justifyContent:"center"}}><Pdf
        source={{ uri: `file://${path}` }}
        style={{  width: widthValue(1.5),height:heightValue(1.5)}}
        onError={(error) => console.log('PDF error:', error)}
      /></View>)}
                              </View>
                            </View>
                          </Modal>
                    </View>
              }
             
           
      

</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>{setChevronRight(!chevronRight),setIndex(2)}}>
    <View style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:25,paddingVertical:heightValue(35)}}>
          
      <View style={{flexDirection:"row",gap:20}}     >
     <AntDesign name="pdffile1" color="#d41919ff" size={heightValue(35)} />
  
        <View style={{flexDirection:"row"}}>
        <Text style={{fontSize:heightValue(52),fontWeight:500,width:widthValue(1.6),color:darkMode?Colors.white:Colors.black}}>
            Valve Open Communications
        </Text>
     
     
        <MaterialCommunityIcons name="chevron-double-right" color="#64ad54ff" size={heightValue(40)}  />
       </View>
      </View>
      </View>
    { chevronRight && index === 2 && 
                <View > 
                <Modal
                         transparent
                                 visible={chevronRight}
                                 animationType='fade'
                                  onRequestClose={()=>setChevronRight(false)}
                                    presentationStyle="overFullScreen"
      statusBarTranslucent={true}
                               >
                     
                         <View style={styles.overlay}>
                          
                          
                              <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
                                <TouchableOpacity onPress={()=>setChevronRight(false)}>
                                <EvilIcons name="close" color={darkMode?Colors.white:Colors.black}size={24} />
                                </TouchableOpacity>
                                {showAnimation?(<LottieView source={require("../../assets/animations/PDF.json")}autoPlay loop={false} style={styles.imageContainer} />):
                                (
                               <View style={{alignItems:"center"}}> <Pdf
        source={{ uri: `file://${path1}` }}
        style={{  width: widthValue(1.5),height:heightValue(1.5)}}
        onError={(error) => console.log('PDF error:', error)}
      /></View>
      )}
                              </View>
                            </View>
                          </Modal>
                    </View>
              }
     


  </TouchableOpacity>   

          


          </ScrollView>
          </SafeAreaView>
         
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
        width: widthValue(15), 
        height: 30, 
  
      },
      badge: {
        position: 'absolute',
        top: -5, 
        right:widthValue(-60),
        backgroundColor: "#6e9865ff",
        borderRadius: 10,
        paddingHorizontal: widthValue(60),
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: heightValue(80),
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
