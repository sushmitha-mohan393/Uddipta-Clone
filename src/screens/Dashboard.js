import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,StatusBar,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
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

export default function Dashboard({navigation})
{ 
// const navigation = useNavigation();
     const [activeButton, setActiveButton] = useState("button1"); 
     const [activeIcon,setActiveIcon]=useState("caretdown");
     console.log("act",activeIcon);
     const[chevronUp,setChevronUp]=useState(true);
          const [isVisible,setIsVisible]=useState(false);
        
     const [isEnabled, setIsEnabled] = useState(false);
              const toggleSwitch = () => setIsEnabled(previousState => !previousState);
// const handleIcon=(icon)=>
// {
//   setActiveIcon(icon);
// }
     
   

  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    setIsVisible(!isVisible)
    
  };

    
    return(
      <DrawerSceneWrapper>
        <ScrollView style={styles.container}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:5,marginTop:25}}>
            <TouchableOpacity onPress={()=>navigation.openDrawer()}>
              <Icon name="menu" size={25} color="#666" />
            </TouchableOpacity>
              <View style={styles.iconContainer}>
          <Ionicons name="notifications-outline" size={30} color="black" />
          <View style={styles.badge}>
            <Text style={styles.badgeText}>8</Text>
          </View>
        </View>
          </View>
            <Text style={{margin:20,marginTop:0,fontSize:18,fontWeight:300}}>Welcome to AGCL Smartgas</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",margin:20,marginBottom:5}}>
            <Text style={{fontSize:20,}}><Text>4999806          </Text> 
            <TouchableOpacity onPress={()=>setChevronUp(!chevronUp)}>
            <AntDesign  name={chevronUp? "up" : "down"} color="#000" size={15} style={{marginLeft:40}}/>
            </TouchableOpacity>
   </Text>
            <TouchableOpacity style={{backgroundColor:"#436b3bff",width:widthValue(3),height:heightValue(25),borderRadius:10,alignContent:"center",justifyContent:"center",alignItems:"center",top:-5}}><Text style={{color:"white",fontSize:15}}>Switch account</Text></TouchableOpacity>
        </View >
        
     { chevronUp &&  <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(4.5),margin:20,marginTop:0,borderRadius:10}}>
<View style={{flexDirection:"row",justifyContent:"space-around",margin:20,marginHorizontal:-20,marginBottom:0}}>
<Text>Current Balance</Text>
<Text>Meter Connected</Text>
</View>
<Text style={{marginHorizontal:30,fontSize:40,color:"#e7c03fff"}}>₹ 3526.08</Text>
<TouchableOpacity style={{backgroundColor:"#64ad54ff",width:widthValue(3),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center",margin:"auto",marginTop:25}}><Text style={{color:"white",fontSize:15}}>Tap to Recharge</Text></TouchableOpacity>
<Text style={{margin:"auto",marginTop:1,fontSize:16}}>Last Recharge of ₹1.00 on 2025-09-08</Text>

        </View>}
        <View style={{width:widthValue(1.1),backgroundColor:"#B2BFC8",height:heightValue(8),margin:20,marginTop:0,borderRadius:10,padding:15,paddingTop:25}}>
             <TouchableOpacity 
        onPress={() => setActiveIcon("caretdown")}>
           <AntDesign name="caretup" color={activeIcon=="caretup"?"black":"gray"}  size={23} />
           </TouchableOpacity>
<TouchableOpacity  
        onPress={() => setActiveIcon("caretup")
         
        }> 
        <AntDesign name="caretdown" color={activeIcon=="caretdown"?"black":"gray"} size={23} />
        </TouchableOpacity>
          
            
            <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,marginTop:-30}}> 
                <Text style={[ styles.seven,{marginHorizontal:100,fontSize:40,marginTop:-20}]}>0</Text>
               <Text> Total Vb M3</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:10}}>
            <Text>Updated on 2025-08-06</Text>
            <Ionicons name="refresh-circle" color="#64ad54ff" size={24} />
  </View>
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(4.5),margin:20,marginTop:0,borderRadius:10,padding:10}}>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Monthly Consumption:</Text>
            <View style={styles.progress}/>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Last Month Consumption:</Text>
            <View style={styles.progress}/>
            <Text style={{marginHorizontal:20,marginBottom:10}}>Monthly Forecast:</Text>
            <View style={styles.progress}/>
        </View>
        <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(2.3),margin:20,marginTop:0,borderRadius:10,}}>
        <View style={{padding:15,flexDirection:"row",justifyContent:"space-evenly"}}>
<TouchableOpacity style={[
          styles.button,
          activeButton === 'button1' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button1')}><Text style={[styles.btntext,activeButton=="button1"&&styles.actbtn]}>Week</Text></TouchableOpacity>
<TouchableOpacity  style={[
          styles.button,
          activeButton === 'button2' ? styles.activeButton : styles.inactiveButton,
        ]}
        onPress={() => handlePress('button2')
         
        }><Text style={[styles.btntext,activeButton=="button2"&&styles.actbtn]}>Month</Text></TouchableOpacity>
     </View>
    
  <View style={{flex:1,paddingHorizontal:10,margin:"auto",}}>
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
        <View  style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(9),margin:20,marginTop:0,borderRadius:10,padding:30,alignItems:"center"}}>
          <Text>Last Consumption 2025-05-24</Text>
          <Text style={{fontSize:20,color:"#64ad54ff"}}>0 M3</Text>
        </View>
        <Text style={{margin:"auto",marginBottom:heightValue(70)}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff"}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
        
        
        </ScrollView>
         </DrawerSceneWrapper>
    )

}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor:"#F2ECEC",
  },
  button:{
    backgroundColor:"rgba(67, 190, 56, 1)",width:widthValue(5),height:heightValue(25),borderRadius:20,alignContent:"center",justifyContent:"center",alignItems:"center"

  },
     activeButton: {
    backgroundColor: "#64ad54ff", // Active color
   
  },
  inactiveButton: {
    backgroundColor: 'white',
    color:"black", // Inactive color
    borderColor: '#ccc',
  },btntext:{
    color:"black",fontSize:15
  },
  actbtn:{
    color:"white"
  },
     iconContainer: {
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
  legendText: {
    color: '#ccc',
    fontSize: 12,
  },
      seven:{
        fontFamily:"Seven Segment"
      },
progress:{marginHorizontal:20,height:heightValue(50),borderRadius:20,backgroundColor:"#d2d6dbff",marginBottom:10},
actIcon:{color:"black"},
inactIcon:{color:"#999797ff"}
})