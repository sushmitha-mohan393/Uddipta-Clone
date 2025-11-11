import {useState} from "react";
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
export default function LiveData({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); // State to track the active button

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
    return(
      <DrawerSceneWrapper>
        <View style={styles.container}>
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
          <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Have a<Text style={{color:"#36512cff"}}> query ?</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(100),lineHeight:30,fontSize:15}}>
           Get your Queries resolved.
           </Text>
           <LottieView source={require("../../assets/animations/contactUs.json")}autoPlay loop  style={styles.imageContainer}/>
        <View  style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(10),margin:20,marginTop:0,borderRadius:10,padding:20,paddingLeft:30}}>
         <Text style={{fontSize:20}}>
            Toll Free Number
         </Text>
         <Text style={{color:"#64ad54ff",fontSize:18,marginTop:7}}>18005471266
         </Text>
         <View style={styles.seperator}></View>
          </View>
          <View style={{flexDirection:"row",justifyContent:"center",alignItems: 'center',marginTop:20 }}>
          <View style={styles.line} />
      <Text style={styles.text}>Send Request</Text>
      <View style={styles.line} />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Request")}>
        <View  style={{width:widthValue(8),backgroundColor:"#fff",height:heightValue(18),margin:15,borderRadius:10,alignSelf:"center",justifyContent:"center",alignItems :"center",padding:10}}>
            <Fontisto name="telegram" color="#64ad54ff" size={27} />
        </View>
        </TouchableOpacity>
         <Text style={{alignSelf:"center",fontSize:12,color:"gray"}}>Send your request to AGCL</Text>
          </View>
          </DrawerSceneWrapper>)
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
   
    fontSize: 18,
    color: "#64ad54ff"
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
        backgroundColor: "#64ad54ff",
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
      },seperator:{
        height:1,marginVertical:1,backgroundColor:"#dfd8d8ff"
      }
    })