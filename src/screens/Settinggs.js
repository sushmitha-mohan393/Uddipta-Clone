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
import LiveData from "./LiveData";
import Nav from '../../Nav'
import DeleteAccount from "../components/DeleteAccount";
import Rate, { AndroidMarket } from "react-native-rate"
import Box from "../components/Box";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "../../Colors";
import { useSelector } from "react-redux";


export default function Settinggs({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null);
const [showAlert, setShowAlert] = useState(false);
   const darkMode = useSelector((state) => state?.darkMode?.darkMode);
  const handlePress = (item) => {
   
    if (item.route==="DeleteAccount"){
    setShowAlert(true);
    }
    else if (item.route==="Rate")
    {
                    const options = {
                      AppleAppID: '6506144845',
                      GooglePackageName:
                        'com.esyasoft.agcl.smartgasconsumerap&hl=en_IN&gl=US',
                      preferInApp: false,
                      preferredAndroidMarket: AndroidMarket.Google,
                      openAppStoreIfInAppFails: true,
                    };
                    Rate.rate(options, success => {
                      if (success) {
                        console.log("Success");
                      }
                    });
                  }
    else{
       navigation.navigate(item.route);
    }
    }
   
    

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
          <Text style={{marginHorizontal:widthValue(18),fontSize:heightValue(32),color:darkMode?Colors.white:Colors.black}}>Settings</Text>
          <SectionList
          sections={groupedData}
           keyExtractor={(item, index) => item.id + index}
          renderItem={({item})=>{
            return(
              <TouchableOpacity onPress={()=>handlePress(item)}>
            <View style={[styles.card,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
             <View>
              <View style={{backgroundColor:"#31ac68ff",paddingVertical:heightValue(60),paddingHorizontal:heightValue(60),borderRadius:50,flexWrap:"column"}}>
         {
    item.iconFamily === "Feather" ? (
      <Feather name={item.iconName} size={heightValue(50)} color="white" />
    ) : (
  <MaterialCommunityIcons name={item.iconName} color="white" size={24} />
    )
  }
               </View>
               </View>
<View style={{flexDirection:"row",justifyContent:"space-between",flex:1}}>
               <View>
            <Text style={{fontSize:heightValue(50),color:darkMode?Colors.white:Colors.black}}> {item.name1}<Text style={{color:"green"}}>{item.name2}</Text></Text>
            <Text style={{color:"#979292ff",fontSize:heightValue(58),top:5 ,width:widthValue(1.7)
            }}> {item.des}</Text>
            </View>
            <View>
            <Feather name="chevron-right" color="#979292ff" size={heightValue(35)}   />
            </View>
            </View>
              
           </View>
           </TouchableOpacity>
         
            
            );

          }}
          renderSectionHeader={({section:{title1,title2}})=>{
            return(
          <View style={{flexDirection:"row" }}>
           
             <Text style={[styles.section,{marginLeft:20,color:darkMode?Colors.white:Colors.black}]}>{title1}</Text>
             <Text style={[styles.section,{color:"green"}]}>{title2}</Text>
            </View>
          )
        
           
          }} 
       
          />
{showAlert&&<DeleteAccount showAlert={showAlert} setShowAlert={setShowAlert} />}
          </ScrollView>
          </SafeAreaView>
           
          )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
 section:{
  fontSize:heightValue(40),marginVertical:heightValue(100),fontWeight:400
 },
    card:{
      
      flexDirection:"row",borderColor:"transparent",gap:10,borderWidth:2,width:widthValue(1.1),backgroundColor:"white",margin:20,marginTop:0,borderRadius:10,padding:10

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
    })