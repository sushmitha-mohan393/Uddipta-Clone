import {useEffect, useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
import LottieView from "lottie-react-native";
import Request from "../components/Request"
import { SafeAreaView } from "react-native-safe-area-context";
 import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
import axios from "axios";
export default function LiveData({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); 
     const[contact,setContact]=useState(null);
   const darkMode = useSelector((state) => state?.darkMode?.darkMode);
    const loginResponse = useSelector((state) => state?.auth?.loginResponse);
  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
       useEffect(()=>{
 contactapi();
     },[]
    );
      const contactapi = async () => {
    try {
      const cont = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/ContactUs?name=${loginResponse?.name}`,
        { 
       
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );

   
      setContact(cont.data);
     

    } catch (error) {
      console.log("Balance API error:", error);
    }
  };
    return(
    
         <SafeAreaView style={{flex:1,backgroundColor:darkMode?Colors.black:Colors.bgscreens}}>
        <View style={[styles.container,{backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
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
          <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Have a<Text style={{color:"#4f7640ff"}}> query ?</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(100),lineHeight:30,fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
           Get your Queries resolved.
           </Text>
           <LottieView source={require("../../assets/animations/contactUs.json")}autoPlay loop  style={styles.imageContainer}/>
        <View  style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,paddingVertical:heightValue(60),paddingLeft:30,paddingRight:20}}>
         <Text style={{fontSize:heightValue(40),color:darkMode?Colors.white:Colors.black}}>
            Toll Free Number
         </Text>
         <Text style={{color:"#64ad54ff",fontSize:heightValue(50),marginTop:7}}>{contact?.tollFreeNumber}
         </Text>
         <View style={styles.seperator}></View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems: 'center',marginTop:heightValue(60) }}>
          <View style={styles.line} />
      <Text style={styles.text}>Send Request</Text>
      <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Request")}>
        <View  style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:15,borderRadius:10,alignSelf:"center",justifyContent:"center",alignItems :"center",padding:12}}>
           <FontAwesome name="telegram" color="#64ad54ff" size={24} />
        </View>
        </TouchableOpacity>
         <Text style={{alignSelf:"center",fontSize:heightValue(62),color:"gray"}}>Send your request to AGCL</Text>
          </View></SafeAreaView>
      )
}
      const styles = StyleSheet.create({
  container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
  },imageContainer: {
    width:widthValue(1),
   height:heightValue(6),
   left:20
//    backgroundColor:'green',

   
  }, line: {
    
    height: 1, 
    backgroundColor: 'gray', 
    marginHorizontal:20,width:widthValue(7)
    
  },
  text: {
   
    fontSize: heightValue(40),
    color: "#64ad54ff"
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
      },seperator:{
        height:1,marginVertical:1,backgroundColor:"#dfd8d8ff"
      }
    })