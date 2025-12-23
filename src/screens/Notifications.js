import {useState} from "react";
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
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
export default function Notifications({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); 
   const darkMode = useSelector((state) => state?.darkMode?.darkMode);
  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Be<Text style={{color:"#4f7640ff"}}> Notified</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),lineHeight:30,fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
         Engage with the Utility via notifications
           </Text>
          
          <View style={{flex:1}}>
 <Text style={{textAlign:"center",color:"#c63b2f",fontSize:23}}>Data Not Found</Text>
              <LottieView source={require("../../assets/animations/APIError.json") }autoPlay loop  style={styles.imageContainer}/>
 
 
          </View>
         
          </View>
          </SafeAreaView>
         
          )
          }
          const styles = StyleSheet.create({
  container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
  },imageContainer: {
    width:widthValue(1),
   height:heightValue(2),left :10,top:-50
    
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
      },})
