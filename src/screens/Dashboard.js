import {useCallback, useEffect, useRef, useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,Animated} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
 import DrawerSceneWrapper from "../../DrawerSceneWrapper"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Echart from '../components/EchartWeek';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Toggleswitch from '../components/Toggleswitch';
import EchartMonth from '../components/EchartMonth';
import EchartWeek from '../components/EchartWeek';
import TableWeek from '../components/TableWeek';
import TableMonth from '../components/TableMonth'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import Logout from "./Logout";
import { login } from "../redux/authSlice";
import axios from "axios";
import { Colors } from "../../Colors";
import * as Progress from 'react-native-progress';
import SwitchAccount from "../components/SwitchAccount";


export default function Dashboard({navigation,openLogout, setOpenLogout})

{    
//   const animatedCurrent = useRef(new Animated.Value(0)).current;
// const animatedLast = useRef(new Animated.Value(0)).current;
// const animatedNext = useRef(new Animated.Value(0)).current;
  const [currentProgress, setCurrentProgress] = useState(0);
const [lastProgress, setLastProgress] = useState(0);
const [nextProgress, setNextProgress] = useState(0)

  const [balance, setBalance] = useState(null); 
    const [currentMonth, setCurrentMonth] = useState(null); 
    const [lastMonth, setLastMonth] = useState(null); 
   const [monthly, setMonthly] = useState(null)
     const [progress, setProgress] = useState(0);
  const[readValues,setReadValues]=useState([]);
  const [i,setI]=useState(0);


   const darkMode = useSelector((state) => state?.darkMode?.darkMode);
const route=useRoute();
console.log("Logout Param:", route?.params?.openLogout);
   const loginResponse = useSelector((state) => state?.auth?.loginResponse);
      console.log("loginres",loginResponse);
   useEffect(()=>{
balanceapi();
// progressBar();
   },[]
  );
  useFocusEffect(
  useCallback(() => {
  
    setCurrentProgress(0);
    setLastProgress(0);
    setNextProgress(0);

   
    const timer = setTimeout(() => {
      progressBar();
    }, 100);

    return () => clearTimeout(timer);
  }, [])
);

  //  useEffect(() => {
  //   let value = 0;
  //   const interval = setInterval(() => {
  //     value+=0.01
  //     if (value >=1) {
  //       value = 0; 
        
  //     }
  //     setProgress(value);
  //   }, 50); 

  //   return () => clearInterval(interval);
  // }, []);


 
//   const progressBar = async () => {
//   try {
//     const res = await axios.get(
//       `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/DashBoardByAccountId?ConsumerNo=${loginResponse?.consumerId}`,
//       {
//         headers: { Authorization: `Bearer ${loginResponse?.jwtToken}` },
//       }
//     );

//     const { currentMonth, lastMonth, nextMonth } = res.data.consumption;

//     const p1 = currentMonth.percent;
//     const p2 = lastMonth.percent;
//     const p3 = nextMonth.percent;

//     const maxValue = Math.max(p1, p2, p3); 
   
//     const scaledCurrent = p1 / maxValue;
//     const scaledLast = p2 / maxValue;
//     const scaledNext = p3 / maxValue;

  
//     Animated.timing(animatedCurrent, {
//       toValue: scaledCurrent,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(animatedLast, {
//       toValue: scaledLast,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();

//     Animated.timing(animatedNext, {
//       toValue: scaledNext,
//       duration: 1500,
//       useNativeDriver: false,
//     }).start();
//   } catch (e) {
//     console.log("Error", e);
//   }
// };
const progressBar = async () => {
  try {
    const res = await axios.get(
      `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/DashBoardByAccountId?ConsumerNo=${loginResponse?.consumerId}`,
      {
        headers: { Authorization: `Bearer ${loginResponse?.jwtToken}` },
      }
    );

    const { currentMonth, lastMonth, nextMonth } = res.data.consumption;

    const p1 = currentMonth.percent;
    const p2 = lastMonth.percent;
    const p3 = nextMonth.percent;

    const maxValue = Math.max(p1, p2, p3) || 1;

    setCurrentProgress(p1 / maxValue);
    setLastProgress(p2 / maxValue);
    setNextProgress(p3 / maxValue);
  } catch (e) {
    console.log("Error", e);
  }
};


  const balanceapi = async () => {
    try {
      const bal = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Dashboard/mobile/RechargeDetailsByAccountId?ConsumerNo=${loginResponse?.consumerId}`,
        { 
       
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );

    console.log("auth",bal)
      setBalance(bal.data.rechargeDetails);
      setReadValues(bal.data.readingValues);

    } catch (error) {
      console.log("Balance API error:", error);
    }
  };
// const navigation = useNavigation();
     const [activeButton, setActiveButton] = useState("button1"); 
     const [activeIcon,setActiveIcon]=useState("caretdown");
     console.log("act",activeIcon);
     const[chevronUp,setChevronUp]=useState(true);
          const [isVisible,setIsVisible]=useState(false)
  const [showLogoutModal, setShowLogoutModal] = useState(false);
     const [isEnabled, setIsEnabled] = useState(false);
              const toggleSwitch = () => setIsEnabled(previousState => !previousState);

     useEffect(() => {
  if (route.params?.openLogout) {
    setShowLogoutModal(true);
    
     navigation.setParams({ openLogout: false });
    
  } 
}, [route.params?.openLogout]);
   

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    setIsVisible(!isVisible)
    
  };

    
    return(
       
     
       <SafeAreaView style={{flex:1, backgroundColor:darkMode?Colors.black:Colors.bgscreens}}>
        <ScrollView style={[styles.container,{ backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:widthValue(20),marginBottom:0,marginTop:5}}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Icon name="menu" size={heightValue(30)} color="#666" />
            </TouchableOpacity>
              <View style={styles.noti}>
          <Ionicons name="notifications-outline" size={widthValue(14)} color={darkMode?Colors.menubar:Colors.black} />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
            <Text style={{marginVertical:heightValue(60),marginHorizontal:widthValue(18),marginTop:0,fontSize:heightValue(45),fontWeight:300,color:darkMode?Colors.white:Colors.black}}>Welcome to AGCL Smartgas</Text>
        <Text style={{fontSize:heightValue(50),marginHorizontal:widthValue(18),color:darkMode?Colors.white:Colors.black}}>{loginResponse?.name}        </Text> 
        <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:heightValue(100),marginHorizontal:widthValue(18),marginBottom:5}}>
           
            <Text style={{fontSize:heightValue(42),color:darkMode?Colors.white:Colors.black}}><Text>{loginResponse?.consumerId}  </Text> 
            <TouchableOpacity onPress={()=>setChevronUp(!chevronUp)}>
            <AntDesign  name={chevronUp? "up" : "down"} color={darkMode?Colors.white:Colors.black} size={heightValue(55)} style={{marginLeft:40}}/>
            </TouchableOpacity>
   </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SwitchAccount")}style={{backgroundColor:"#477742ff",paddingHorizontal:widthValue(30),paddingVertical:heightValue(80),borderRadius:10,alignContent:"center",justifyContent:"center",alignItems:"center",top:-5}}><Text style={{color:"white",fontSize:heightValue(55)}}>Switch account</Text></TouchableOpacity>
        </View >
        
     { chevronUp &&  <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10}}>
<View style={{flexDirection:"row",justifyContent:"space-around",margin:20,marginHorizontal:-20,marginBottom:0}}>
<Text style={{fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Current Balance</Text>
<Text style={{fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Meter {balance?.connectionStatus}</Text>
</View>
<Text style={{marginHorizontal:30,fontSize:heightValue(22),color:"#ef5b5bff"}}>{balance?.balanceAmount}</Text>
<TouchableOpacity style={{backgroundColor:"#64ad54ff",width:widthValue(3),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center",margin:"auto",marginTop:25}}><Text style={{color:"white",fontSize:heightValue(58)}}>Tap to Recharge</Text></TouchableOpacity>
<Text style={{margin:"auto",marginVertical:heightValue(100),fontSize:heightValue(56),color:darkMode?Colors.white:Colors.black}}>Last Recharge of {balance?.lastRechargeAmount} on {balance?.lastRechargeDate}</Text>

        </View>}
        <View style={{width:widthValue(1.1),backgroundColor:"#B2BFC8",margin:20,marginTop:0,borderRadius:10,padding:15,paddingTop:25}}>
             <TouchableOpacity 
        onPress={() => {setActiveIcon("caretdown"),setI(1)}}>
           <AntDesign name="caretup" color={activeIcon=="caretup"?"black":"gray"}  size={heightValue(40)} />
           </TouchableOpacity>
<TouchableOpacity  
        onPress={() => {setActiveIcon("caretup"),setI(0)}
         
        }> 
        <AntDesign name="caretdown" color={activeIcon=="caretdown"?"black":"gray"} size={heightValue(40)} />
        </TouchableOpacity>
          
            
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:heightValue(-20)}}> 
                <Text style={[ styles.seven,{marginHorizontal:widthValue(3.5),fontSize:heightValue(20),marginTop:-5}]}>{readValues[i]?.value}</Text>
               <Text style={{fontSize:heightValue(62),left:-10}}> {readValues[i]?.header}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:10,marginLeft:widthValue(6)}}>
            <Text  style={{fontSize:heightValue(62),}}>Updated on 2025-08-06</Text>
            <Ionicons name="refresh-circle" color="#64ad54ff" size={heightValue(35)} style={{bottom:7}}/>
  </View>
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:10}}>
            <Text style={{marginHorizontal:20,marginBottom:widthValue(80),fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Monthly Consumption:</Text>
             <Progress.Bar progress={currentProgress} width={widthValue(1.3)}useNativeDriver={true} animated={true}  animationType="timing"
  animationConfig={{ duration: 1500 }} backgroundColor={Colors.bgscreens} color={Colors.dashgreen} height={heightValue(70)} borderRadius={20} marginHorizontal={20} marginBottom={10}/>
            {/* <View style={styles.progress}/> */}
            <Text style={{marginHorizontal:20,marginBottom:widthValue(80),fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Last Month Consumption:</Text>
             <Progress.Bar progress={lastProgress} width={widthValue(1.3)}useNativeDriver={true} animated={true} animationType="timing"
  animationConfig={{ duration: 1500 }}  backgroundColor={Colors.bgscreens} color={Colors.dashgreen} height={heightValue(70)} borderRadius={20} marginHorizontal={20} marginBottom={10}/>           
            {/* <View style={styles.progress}/> */}
            <Text style={{marginHorizontal:20,marginBottom:widthValue(80),fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Monthly Forecast:</Text>
             <Progress.Bar progress={nextProgress} width={widthValue(1.3)}useNativeDriver={true}   animated={true} animationType="timing"
  animationConfig={{ duration: 1500 }}  backgroundColor={Colors.bgscreens} color={Colors.dashgreen} height={heightValue(70)} borderRadius={20} marginHorizontal={20} marginBottom={10}/>
            {/* <View style={styles.progress}/> */}
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,}}>
        <View style={{padding:15,paddingBottom:5,flexDirection:"row",justifyContent:"space-evenly"}}>
<TouchableOpacity style={[
          styles.button,
          activeButton === 'button1' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button1')}><Text style={[styles.btntext,{ color:darkMode?Colors.white:Colors.black},activeButton=="button1"&&styles.actbtn]}>Week</Text></TouchableOpacity>
<TouchableOpacity  style={[
          styles.button,
          activeButton === 'button2' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button2')
         
        }><Text style={[styles.btntext,{ color:darkMode?Colors.white:Colors.black},activeButton=="button2"&&styles.actbtn]}>Month</Text></TouchableOpacity>
     </View>
    
  <View style={{flex:1,paddingHorizontal:10,marginHorizontal:"auto"}}>
      {activeButton && (
        isEnabled ? (
          activeButton === "button1" ? <EchartWeek /> : <EchartMonth />
        ) : (
          activeButton === "button1" ? <TableWeek /> : <TableMonth />
        )
      )}
    </View>
 
<View style={{bottom:10}}>
    <Toggleswitch isEnabled={isEnabled} toggleSwitch={toggleSwitch}/>
    </View>
        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:20,marginTop:0,borderRadius:10,padding:20,alignItems:"center"}}>
          <Text style={{fontSize:heightValue(62),color:darkMode?Colors.white:Colors.black}}>Last Consumption 2025-05-24</Text>
          <Text style={{fontSize:heightValue(40),color:"#64ad54ff"}}>0 M3</Text>
        </View>
        <Text style={{margin:"auto",marginBottom:heightValue(70),fontSize:heightValue(58),color:darkMode?Colors.white:Colors.black}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff",fontSize:heightValue(60)}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
     
 <Logout showLogoutModal={showLogoutModal} setShowLogoutModal={setShowLogoutModal} />

        
        </ScrollView>
        </SafeAreaView>

       

    )

}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  button:{
width:widthValue(5),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center"

  },
     activeButton: {
    backgroundColor: "#64ad54ff", 
    borderRadius:30,
    elevation:5
   ,width:widthValue(5)
  },
btntext:{
    fontSize:heightValue(46)
  },
  actbtn:{
    color:"white",fontSize:heightValue(40),fontWeight:"bold"
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
      toggle: {
       
  width: widthValue(6),
  height: heightValue(30),
 backgroundColor:"red",
  borderRadius:50,
  margin:"auto",

},
circle: {
  flexDirection:"row",
 gap:20,
  width: widthValue(12),
  height: heightValue(30),
  backgroundColor:"green",
  borderRadius: 50,
 paddingTop:5,paddingHorizontal:5,
  position:"absolute",
},
iconholder:{
//  position:"relative",
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
},
      trackEnabled: {
        backgroundColor: 'gray',
      },
      trackDisabled: {
        backgroundColor: 'gray',
      },
      thumb: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
      },
      thumbEnabled: {
        alignSelf: 'flex-end',
      },
      thumbDisabled: {
        alignSelf: 'flex-start',
      },
  legendContainer: {
  flex:1,margin:"auto"
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },

      seven:{
        fontFamily:"Seven Segment"
      },
progress:{marginHorizontal:20,height:heightValue(50),borderRadius:20,backgroundColor:"#d2d6dbff",marginBottom:10},})