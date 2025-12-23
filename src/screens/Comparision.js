import {useCallback, useEffect, useState} from "react";
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
import Toggleswitch from "../components/Toggleswitch";
import GraphComparision from "../components/GraphComparision"
import TableComparision from "../components/TableComparision"
import * as Progress from 'react-native-progress';
import Animated from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
import axios from "axios";
export default function Comparision({navigation})
{ 
  const{openDrawer}=navigation;
    const [currentProgress, setCurrentProgress] = useState(0);
const [lastProgress, setLastProgress] = useState(0);

     const [activeButton, setActiveButton] = useState(null);
          const [isEnabled, setIsEnabled] = useState(false);
          const [progress, setProgress] = useState(0);
   const darkMode = useSelector((state) => state?.darkMode?.darkMode);
     const loginResponse = useSelector((state) => state?.auth?.loginResponse);
     const [currentValue, setCurrentValue] = useState(0);
const [lastValue, setLastValue] = useState(0);
const [currentMonthLabel, setCurrentMonthLabel] = useState("");
const [lastMonthLabel, setLastMonthLabel] = useState("");
const formatValue = v => (v === -1 ? 0 : v);

   useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value+=0.01
      if (value >=1) {
        value = 0; 
        
      }
      setProgress(value);
    }, 50); 

    return () => clearInterval(interval);
  }, []);
    useFocusEffect(
    useCallback(() => {
    
      setCurrentProgress(0);
      setLastProgress(0);
   
     
      const timer = setTimeout(() => {
        progressBar();
      }, 100);
  
      return () => clearTimeout(timer);
    }, [])
  );
  const progressBar = async () => {
  try {
    const res = await axios.get(
      `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/ConsumptionLogComparison-byAccountId?ConsumerNo=${loginResponse?.consumerId}`,
      {
        headers: { Authorization: `Bearer ${loginResponse?.jwtToken}` },
      }
    );
 console.log("consumption",res.data);
    const monthlycomparison = res.data.monthlycomparison;
 
  

    const p1 = monthlycomparison.current.percent;
    const p2 = monthlycomparison.last.percent;
  

    const maxValue = Math.max(p1, p2) || 1;

    setCurrentProgress(p1 / maxValue);
    setLastProgress(p2 / maxValue);
       setCurrentValue(monthlycomparison?.current?.value ?? 0);
    setLastValue(monthlycomparison?.last?.value ?? 0);
    setCurrentMonthLabel(monthlycomparison?.current?.month ?? "");
    setLastMonthLabel(monthlycomparison?.last?.month ?? "");
  } catch (e) {
    console.log("Error", e);
  }
};
              const toggleSwitch = () => setIsEnabled(previousState => !previousState)
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
          <Ionicons name="notifications-outline" size={widthValue(14)} color={darkMode?Colors.menubar:Colors.black} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
         
       <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>Unit<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
          Compare your daily,weekly & monthly consumption to keep a tab on gas usage
           </Text> 
           <View style={{flexDirection:"row",gap:20}}>
        <View style={{flex:1,backgroundColor:darkMode?Colors.darkbg:Colors.white,marginLeft:widthValue(15),marginTop:10,borderRadius:5,padding:15,elevation:5}}>
            <Text style={{fontSize:heightValue(44),fontWeight:500,textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Today<Text style={{fontSize:heightValue(70) ,color:darkMode?Colors.white:Colors.black }}>[In Progress]</Text></Text>
           <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:heightValue(120)}}><Text style={{fontSize:heightValue(70),color:darkMode?Colors.white:Colors.black}}>Consumption:</Text>
            <Text style={{fontSize:heightValue(70),color:darkMode?Colors.white:Colors.black}}>M3</Text>
           
            </View> 
             {/* <View style={styles.progress}/> */}
             <Progress.Bar progress={progress} width={widthValue(3)}useNativeDriver={true} animated={true} color={"#d2d6dbff"} height={heightValue(70)} borderRadius={20}/>
         </View>
        <View style={{flex:1,backgroundColor:darkMode?Colors.darkbg:Colors.white,marginRight:widthValue(15),marginTop:10,borderRadius:5,padding:15,elevation:5}}>
         <Text style={{fontSize:heightValue(44),fontWeight:500,textAlign:"center",color:"#64ad54ff"}}>Yesterday</Text>
           <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:heightValue(120)}}><Text style={{fontSize:heightValue(70),color:darkMode?Colors.white:Colors.black}}>Consumption:</Text>
            <Text style={{fontSize:heightValue(70),color:darkMode?Colors.white:Colors.black}}>M3</Text>
           
            </View> 
             {/* <View style={styles.progress}/> */}
         <Progress.Bar progress={progress/2} width={widthValue(3)} useNativeDriver={true} animated={true} color={"#d2d6dbff"} height={heightValue(70)} borderRadius={20}/>
         
         </View>
         </View>
        <View style={{flex:1,backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:widthValue(15),marginTop:20,borderRadius:15,padding:15,elevation:5,}}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}><Text style={{fontSize:heightValue(40),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>Weekly<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
       <Toggleswitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} style={{marginTop:10,}}/>
</View>
<View>

{isEnabled? <GraphComparision/> :<TableComparision/>}
</View>






</View>
  <View style={{flex:1,backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:widthValue(15),marginTop:0,borderRadius:10,padding:15,elevation:5}}>
           <Text style={{fontSize:heightValue(40),fontWeight:500,color:darkMode?Colors.white:Colors.black}}>Monthly<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
            <Text style={{marginTop:10,fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}} >{currentMonthLabel}:</Text>
            <View style={{flexDirection:"row"}}>
      <Progress.Bar progress={currentProgress} width={widthValue(1.5)}useNativeDriver={true} animated={true}  animationType="timing"
       animationConfig={{ duration: 1500 }} backgroundColor={Colors.bgscreens} color={Colors.dashgreen} height={heightValue(70)} borderRadius={20} marginHorizontal={0} marginBottom={10}/>
            <Text style={{color:"#64ad54ff",top:-5,fontSize:heightValue(60)}}>  {formatValue(currentValue)}M3</Text>
            </View>
            <Text style={{marginTop:10,fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}>{lastMonthLabel}:</Text>
          <View style={{flexDirection:"row"}}>
               <Progress.Bar progress={lastProgress} width={widthValue(1.5)}useNativeDriver={true} animated={true} animationType="timing"
             animationConfig={{ duration: 1500 }}  backgroundColor={Colors.bgscreens} color={Colors.dashgreen} height={heightValue(70)} borderRadius={20} marginHorizontal={0} marginBottom={10}/> 
            <Text style={{top:-5,fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}>  {formatValue(lastValue)}M3</Text>
            </View>
        </View>
 <Text style={{margin:"auto",marginBottom:heightValue(70),fontSize:heightValue(58),color:darkMode?Colors.white:Colors.black}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff",fontSize:heightValue(60)}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
        


            


          </ScrollView>
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
      },
    progress:{height:heightValue(70),borderRadius:20,backgroundColor:"#d2d6dbff",width:widthValue(3)}
    
    })
