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
export default function LiveData({navigation})
{ 
  const{openDrawer}=navigation;
     const [activeButton, setActiveButton] = useState(null);
  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
    
  };
  const data=[
    {id:'1',title:'Total Vb:0.23',subtitle:'Reading Time:2025-05-20 06:00:00'},
    {id:'2',title:'Total Vb:0.23',subtitle:'Reading Time:2025-05-19 06:00:00'},
    {id:'3',title:'Total Vb:0.23',subtitle:'Reading Time:2025-05-18 06:00:00'},
    {id:'4',title:'Total Vb:0.23',subtitle:'Reading Time:2025-05-17 06:00:00'},
    {id:'5',title:'Total Vb:0.23',subtitle:'Reading Time:2025-05-16 06:00:00'},
    {id:'6',title:'Total Vb:0',subtitle:'Reading Time:2025-05-15 06:00:00'},
    {id:'7',title:'Total Vb:0',subtitle:'Reading Time:2025-05-14 06:00:00'},
  ]
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
         
       <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Live<Text style={{color:"#4f7640ff"}}> Data</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:16}}>
      Get your live gas Consumptionto keep a tab on gas usage
           </Text> 
          <View>
            {data.map((item) => (
            <View key={item.id} style={{width:widthValue(1.1),backgroundColor:"#fefeffff",height:heightValue(12),margin:15,borderRadius:10,padding:25,paddingTop:15,elevation:2 }}
    >
              <Text style={{fontSize:20,fontWeight:500}}>{item.title}</Text>
              <Text style={{fontSize:18,fontWeight:400}}>{item.subtitle}</Text>
            </View>
            
          ))}
          </View>

          


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
      }})
