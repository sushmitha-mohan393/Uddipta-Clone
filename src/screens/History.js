import {useEffect, useState} from "react";
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
import Toggleswitch from '../components/Toggleswitch';
import EchartMonth from '../components/EchartMonth';
import EchartWeek from '../components/EchartWeek';
import TableWeek from '../components/TableWeek';
import TableMonth from '../components/TableMonth'
import Trygraph from "../components/Trygraph";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
import axios from "axios";

const History = ({navigation}) => {
      const{openDrawer}=navigation;
          const [activeButton, setActiveButton] = useState("button1"); 
        const darkMode = useSelector((state) => state?.darkMode?.darkMode);
          const [isVisible,setIsVisible]=useState(false);
             const [isEnabled, setIsEnabled] = useState(false);
             const[history,setHistory]=useState(null)
              const loginResponse = useSelector((state) => state?.auth?.loginResponse)
              const toggleSwitch = () => setIsEnabled(previousState => !previousState);
              const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    setIsVisible(!isVisible)
    
  };
     useEffect(()=>{
  historyapi();
     },[]
    );
      const historyapi = async () => {
    try {
      const hist = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/ConsumptionLogHistorybyAccountId?ConsumerNo=${loginResponse?.consumerId}`,
        { 
       
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );

   console.log("history",hist);
      setHistory(hist.data);
     

    } catch (error) {
      console.log("Balance API error:", error);
    }
  };


  return (

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
           <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Historic<Text style={{color:"#4f7640ff"}}> Consumption</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
     Historic consumption details on your finger tips. </Text>
      <View style={{flexDirection:"row",flex:1,paddingHorizontal:0,margin:10,marginHorizontal:0,backgroundColor:darkMode?Colors.darkbg:Colors.white,width:widthValue(1.1),marginLeft:20,borderRadius:10}}>
<TouchableOpacity style={[
          styles.button,
          activeButton === 'button1' ? styles.activeButton : {marginLeft:0,backgroundColor:darkMode?Colors.darkbg:Colors.white}
        ]}
        onPress={() => handlePress('button1')}><Text style={[styles.btntext,{color:darkMode?Colors.white:Colors.black},activeButton=="button1"&&styles.actbtn]}>Week</Text></TouchableOpacity>
<TouchableOpacity  style={[
          styles.button,
          activeButton === 'button2' ? styles.activeButton : {marginRight:0,backgroundColor:darkMode?Colors.darkbg:Colors.white}
        ]}
        onPress={() => handlePress('button2')
         
        }><Text style={[styles.btntext,{ color:darkMode?Colors.white:Colors.black},activeButton=="button2"&&styles.actbtn]}>Month</Text></TouchableOpacity>
     </View>
     <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,}}>
        
    
  <View style={{flex:1,paddingHorizontal:10,margin:"auto",marginTop:heightValue(100),}}>
      {activeButton && (
        isEnabled ? (
          activeButton === "button1" ? <EchartWeek /> : <EchartMonth />
        ) : (
          activeButton === "button1" ? <TableWeek /> : <TableMonth />
        )
      )}
    </View>
 <View >

    <Toggleswitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
    </View>
    
    <Text style={{fontSize:heightValue(55),margin:"auto",marginBottom:10,color:darkMode?Colors.white:Colors.black}}>(Click on chart to see the value)</Text>
    
        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:16,paddingBottom:0,flexDirection:"row",justifyContent:"space-between"}}>
            <View>
          <Text style={{fontSize:heightValue(40),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>Total <Text style={{color:"green"}}>Consumption</Text></Text>
           <Trygraph/>
          </View>
          <View>
            <Feather name="chevron-up" color={darkMode?Colors.white:Colors.black} size={heightValue(50)} style={{right:1,top:-1}}/>
          <Text style={{fontSize:heightValue(30),color:"#64ad54ff",fontWeight:700,bottom:10,}}>{activeButton === 'button1' ?history?.lastWeekHistory?.consumption?.total:history?.lastMonthHistory?.consumption?.total} </Text>
          <Text style={{fontSize:heightValue(70),bottom:10,color:darkMode?Colors.white:Colors.black}}>M3</Text>
          </View>
        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:16,paddingBottom:0,flexDirection:"row",justifyContent:"space-between"}}>
            
          <View>
            <Feather name="chevron-up" color={darkMode?Colors.white:Colors.black} size={heightValue(50)} style={{right:1,top:-1}}/>
          <Text style={{fontSize:heightValue(30),color:"#64ad54ff",fontWeight:700,bottom:10}}>{activeButton === 'button1' ?history?.lastWeekHistory?.consumption?.average:history?.lastMonthHistory?.consumption?.average} </Text>
          <Text style={{fontSize:heightValue(70),bottom:10,color:darkMode?Colors.white:Colors.black}}>M3</Text>
          </View>
          <View>
          <Text style={{fontSize:heightValue(40),fontWeight:500,alignSelf:"flex-end",color:darkMode?Colors.white:Colors.black}}>Average <Text style={{color:"green"}}>Consumption</Text></Text>
           <Trygraph/>
          </View>
        </View>
       
        <Text style={{margin:"auto",marginBottom:heightValue(70),fontSize:heightValue(58),color:darkMode?Colors.white:Colors.black}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff",fontSize:heightValue(60)}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
           
          </ScrollView>
          </SafeAreaView>
      
  )
}

export default History
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
      },
        
     activeButton: {
    backgroundColor: "#64ad54ff", // Active color
   
  },
 button:{
    backgroundColor:"#64ad54ff",flex:1,borderRadius:10,alignContent:"center",justifyContent:"center",alignItems:"center",padding:8,flex:1

  },
  actbtn:{
    color:"white"
  },
 btntext:{
    color:"black",fontSize:heightValue(50),fontWeight:500
  },
      })