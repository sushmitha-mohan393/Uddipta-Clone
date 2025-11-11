import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,SectionList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import groupedData from "../components/groupeddata.json";
import Onboarding from "react-native-onboarding-swiper";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from "react-native-swiper";
export default function Dos({navigation})
{ 
   const [activeIndex, setActiveIndex] = useState(0);


  const icons = [
     <MaterialCommunityIcons name="check-circle" color="#446c40ff"size={60} />,
           <MaterialCommunityIcons name="close-circle" color="#d13e3eff" size={60}  />
  
  ];

  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); // State to track the active button

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
           <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Do's &<Text style={{color:"green"}}>  Dont's</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(80),lineHeight:30,fontSize:15}}>
            The following guidelines outline best practices and common pitfalls to avoid in the development and use of a UDDIPTA-AGCL consumer app.
           </Text>
 <View style={styles.iconContainer}>
        {icons[activeIndex]}
      </View>
           <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(2),margin:20,marginTop:heightValue(30),borderRadius:10,position:"static"}}>
<Swiper   loop ={false} activeDotColor="green" onIndexChanged={(index) => setActiveIndex(index)} >
   <View >
    {/* <MaterialCommunityIcons name="check-circle" color="green" size={50} /> */}
              <Text  style={{color:"#446c40ff",fontSize:25,margin:widthValue(30),marginTop:heightValue(30)}}>Do's:</Text>
              <Text style={styles.text}>✔️Open all doors and windows.</Text>
              <Text style={styles.text}>✔️ Shut off your natural gas supply, if possible.</Text>
              <Text style={styles.text}>✔️ Immediately call our Emergency Helpline Number.</Text>
              <Text style={styles.text}>✔️ Do not Smoke.</Text>
            </View> 
<View >
  {/* <MaterialCommunityIcons name="close-circle" color="red" size={50}  style={{top:-10}}/> */}
  <View>
              <Text style={{color:"#d13e3eff",fontSize:25,margin:widthValue(30),marginTop:heightValue(30)}}>Dont's:</Text></View>
              <Text style={styles.text}>✖️ Don’t operate any electrical switches.</Text>
              <Text style={styles.text}>✖️ Don’t use mobile phones near gas leaks.</Text>
              <Text style={styles.text}>✖️ Don’t light matches or lighters.</Text>
            </View>
</Swiper>

 

 
           </View>
          </ScrollView>
          </DrawerSceneWrapper>)
}
const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  iconContainer: {top:60,position:"relative",margin:"auto"},

 
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
      },
      text:{
        fontSize:18,
        marginVertical:20,
        left:15
      },
     
  
 

    })