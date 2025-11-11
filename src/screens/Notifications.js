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
export default function Notifications({navigation})
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Be<Text style={{color:"#4f7640ff"}}> Notified</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),lineHeight:30,fontSize:15}}>
         Engage with the Utility via notifications
           </Text>
          
          <View style={{flex:1}}>
 <Text style={{textAlign:"center",color:"#d35656ff",fontSize:23}}>Data Not Found</Text>
              <LottieView source={require("../../assets/animations/APIError.json") }autoPlay loop  style={styles.imageContainer}/>
 
 
          </View>
         
          </View>
          </DrawerSceneWrapper>
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
        width: 30, 
        height: 30, 
  
      },
      badge: {
        position: 'absolute',
        top: -5, 
        right: -5, 
        backgroundColor: "#6e9865ff",
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
      }})
