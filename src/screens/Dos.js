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
import { BottomTabBarHeightCallbackContext } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
export default function Dos({navigation})
{ 
   const [activeIndex, setActiveIndex] = useState(0);
   const darkMode = useSelector((state) => state?.darkMode?.darkMode);

  const icons = [
     <MaterialCommunityIcons name="check-circle" color="#446c40ff"size={heightValue(18)} />,
           <MaterialCommunityIcons name="close-circle" color="#d13e3eff" size={heightValue(18)}  />
  
  ];

  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null); 

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
   
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Do's &<Text style={{color:"#4f7640ff"}}>  Dont's</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(80),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
            The following guidelines outline best practices and common pitfalls to avoid in the development and use of a UDDIPTA-AGCL consumer app.
           </Text>
 <View style={styles.iconContainer}>
        {icons[activeIndex]}
      </View>
           <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:heightValue(30),borderRadius:10,position:"static",height:heightValue(1.9)}}>
<Swiper   loop ={false} activeDotColor="green" dotColor={darkMode?Colors.white:Colors.black} onIndexChanged={(index) => setActiveIndex(index)}  style={{padding:10}}  >
   <View  style={{width:widthValue(1.2)}}>
    {/* <MaterialCommunityIcons name="check-circle" color="green" size={50} /> */}
              <Text  style={{color:"#446c40ff",fontSize:heightValue(35),margin:widthValue(30),marginTop:heightValue(30)}}>Do's:</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✔️Open all doors and windows.</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✔️ Shut off your natural gas supply, if possible.</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✔️ Immediately call our Emergency Helpline Number.</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✔️ Do not Smoke.</Text>
            </View> 

  {/* <MaterialCommunityIcons name="close-circle" color="red" size={50}  style={{top:-10}}/> */}
  <View  style={{width:widthValue(1.2)}}>
              <Text style={{color:"#d13e3eff",fontSize:heightValue(35),margin:widthValue(30),marginTop:heightValue(30)}}>Dont's:</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✖️ Don’t operate any electrical switches.</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✖️ Don’t use mobile phones near gas leaks.</Text>
              <Text style={[styles.text,{color:darkMode?Colors.white:Colors.black}]}>✖️ Don’t light matches or lighters.</Text>
          </View>  
</Swiper>

 

 
           </View>
          </ScrollView>
          </SafeAreaView>
        )
}
const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  iconContainer: {top:heightValue(15),position:"relative",margin:"auto"},

 

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
      text:{
        fontSize:heightValue(47),
        marginVertical:20,
        left:15
      },
     
  
 

    })
