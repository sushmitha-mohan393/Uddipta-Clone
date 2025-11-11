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
import Toggleswitch from '../components/Toggleswitch';
import EchartMonth from '../components/EchartMonth';
import EchartWeek from '../components/EchartWeek';
import TableWeek from '../components/TableWeek';
import TableMonth from '../components/TableMonth'
import Trygraph from "../components/Trygraph";


const History = ({navigation}) => {
      const{openDrawer}=navigation;
          const [activeButton, setActiveButton] = useState("button1"); 
     
          const [isVisible,setIsVisible]=useState(false);
             const [isEnabled, setIsEnabled] = useState(false);
              const toggleSwitch = () => setIsEnabled(previousState => !previousState);
              const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    setIsVisible(!isVisible)
    
  };


  return (
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Historic<Text style={{color:"#4f7640ff"}}> Consumption</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:16}}>
     Historic consumption details on your finger tips. </Text>
      <View style={{flexDirection:"row",flex:1,paddingHorizontal:0,margin:10,marginHorizontal:0,backgroundColor:"#fff",width:widthValue(1.1),marginLeft:20,borderRadius:10}}>
<TouchableOpacity style={[
          styles.button,
          activeButton === 'button1' ? styles.activeButton : styles.inactiveButton,{marginLeft:0}
        ]}
        onPress={() => handlePress('button1')}><Text style={[styles.btntext,activeButton=="button1"&&styles.actbtn]}>Week</Text></TouchableOpacity>
<TouchableOpacity  style={[
          styles.button,
          activeButton === 'button2' ? styles.activeButton : styles.inactiveButton,{marginRight:0}
        ]}
        onPress={() => handlePress('button2')
         
        }><Text style={[styles.btntext,activeButton=="button2"&&styles.actbtn]}>Month</Text></TouchableOpacity>
     </View>
     <View style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(2.4),margin:20,marginTop:0,borderRadius:10,}}>
        
    
  <View style={{flex:1,paddingHorizontal:10,margin:"auto",marginTop:20,}}>
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
    
    <Text style={{fontSize:16,margin:"auto",marginBottom:10}}>(Click on chart to see the value)</Text>
    
        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(9),margin:20,marginTop:0,borderRadius:10,padding:16,flexDirection:"row",justifyContent:"space-between"}}>
            <View>
          <Text style={{fontSize:20,fontWeight:500}}>Total <Text style={{color:"green"}}>Consumption</Text></Text>
           <Trygraph/>
          </View>
          <View>
            <Feather name="chevron-up" color="#000" size={18} style={{right:3}}/>
          <Text style={{fontSize:30,color:"#64ad54ff",fontWeight:700,bottom:10}}>0 </Text>
          <Text style={{fontSize:12,bottom:10}}>M3</Text>
          </View>
        </View>
        <View  style={{width:widthValue(1.1),backgroundColor:"#fff",height:heightValue(9),margin:20,marginTop:0,borderRadius:10,padding:16,flexDirection:"row",justifyContent:"space-between"}}>
            
          <View>
            <Feather name="chevron-up" color="#000" size={18} style={{right:3}}/>
          <Text style={{fontSize:30,color:"#64ad54ff",fontWeight:700,bottom:10}}>0 </Text>
          <Text style={{fontSize:12,bottom:10}}>M3</Text>
          </View>
          <View>
          <Text style={{fontSize:20,fontWeight:500,alignSelf:"flex-end"}}>Average <Text style={{color:"green"}}>Consumption</Text></Text>
           <Trygraph/>
          </View>
        </View>
       
        <Text style={{margin:"auto",marginBottom:heightValue(70)}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff"}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
           
          </ScrollView>
          </DrawerSceneWrapper>
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
        width: 30, 
        height: 30, 
  
      },
      badge: {
        position: 'absolute',
        top: -5, 
        right: -5, 
        backgroundColor: '#64ad54ff',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'},
        
     activeButton: {
    backgroundColor: "#64ad54ff", // Active color
   
  },
 button:{
    backgroundColor:"rgba(67, 190, 56, 1)",flex:1,borderRadius:10,alignContent:"center",justifyContent:"center",alignItems:"center",padding:8,flex:1

  },
  actbtn:{
    color:"white"
  },
  inactiveButton: {
    backgroundColor: 'white',
    color:"black", // Inactive color
    borderColor: '#ccc',
  },btntext:{
    color:"black",fontSize:18,fontWeight:500
  },
      })