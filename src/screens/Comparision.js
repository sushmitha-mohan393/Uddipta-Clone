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
import Toggleswitch from "../components/Toggleswitch";
import GraphComparision from "../components/GraphComparision"
import TableComparision from "../components/TableComparision"
export default function Comparision({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null);
          const [isEnabled, setIsEnabled] = useState(false);
              const toggleSwitch = () => setIsEnabled(previousState => !previousState)
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
         
       <Text style={{marginHorizontal:widthValue(20),fontSize:25,fontWeight:500}}>Unit<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:16}}>
          Compare your daily,weekly & monthly consumption to keep a tab on gas usage
           </Text> 
           <View style={{flexDirection:"row",gap:20}}>
        <View style={{flex:1,backgroundColor:"#fff",height:heightValue(9),marginLeft:30,marginTop:10,borderRadius:5,padding:15,elevation:5}}>
            <Text style={{fontSize:20,fontWeight:500,textAlign:"center"}}>Today<Text style={{fontSize:12   }}>  [In Progress]</Text></Text>
           <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:heightValue(120)}}><Text style={{fontSize:12}}>Consumption:</Text>
            <Text style={{fontSize:12}}>M3</Text>
           
            </View> 
             <View style={styles.progress}/>
         </View>
        <View style={{flex:1,backgroundColor:"#fff",height:heightValue(9),marginRight:30,marginTop:10,borderRadius:5,padding:15,elevation:5}}>
         <Text style={{fontSize:20,fontWeight:500,textAlign:"center",color:"#64ad54ff"}}>Yesterday</Text>
           <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:heightValue(120)}}><Text style={{fontSize:12}}>Consumption:</Text>
            <Text style={{fontSize:12}}>M3</Text>
           
            </View> 
             <View style={styles.progress}/>
         
         
         </View>
         </View>
        <View style={{flex:1,backgroundColor:"#fff",margin:30,marginTop:20,borderRadius:15,padding:15,elevation:5,}}>
       <View style={{flexDirection:"row",justifyContent:"space-between",alignContent:"center"}}><Text style={{fontSize:22,fontWeight:500}}>Weekly<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
       <Toggleswitch isEnabled={isEnabled} toggleSwitch={toggleSwitch} style={{marginTop:10,}}/>
</View>
<View>

{isEnabled? <GraphComparision/> :<TableComparision/>}
</View>






</View>
  <View style={{flex:1,backgroundColor:"#fff",height:heightValue(6),margin:30,marginTop:0,borderRadius:10,padding:15,elevation:5}}>
           <Text style={{fontSize:22,fontWeight:500}}>Monthly<Text style={{color:"#4f7640ff"}}> Comparision</Text></Text>
            <Text style={{marginTop:10}} >Nov:</Text>
            <View style={{flexDirection:"row"}}>
            <View style={[styles.progress,{width:widthValue(2)}]}/>
            <Text style={{color:"#64ad54ff",top:-5}}>   =0M3</Text>
            </View>
            <Text style={{marginTop:10}}>Oct:</Text>
          <View style={{flexDirection:"row"}}>
            <View style={[styles.progress,{width:widthValue(2)}]}/>
            <Text style={{top:-5}}>   0M3</Text>
            </View>
        </View>
 <Text style={{margin:"auto",marginBottom:heightValue(70)}}>Disclaimer:</Text>
        <Text style={{marginHorizontal:widthValue(20),marginBottom:heightValue(15),color:"#64ad54ff"}}>The displayed consumption is only for information purposes and might be estimated in some cases,so please do not infer this as the exact billing for consumption</Text>
        


            


          </ScrollView>
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
        fontWeight: 'bold',
      },
    progress:{height:heightValue(70),borderRadius:20,backgroundColor:"#d2d6dbff",width:widthValue(3)}
    
    })
