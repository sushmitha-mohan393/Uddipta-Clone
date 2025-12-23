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
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { BarChart } from "react-native-gifted-charts";
import Trygraph from '../components/Trygraph'
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors";
export default function Prepaid({navigation})
{ 

  const{openDrawer}=navigation;
     const darkMode = useSelector((state) => state?.darkMode?.darkMode);
    const today = new Date().toISOString().slice(0, 10);
    const dateObject = new Date(today);
dateObject.setDate(dateObject.getDate() - 10);
const tenDaysAgo = dateObject.toISOString().slice(0, 10);
     const [activeButton, setActiveButton] = useState(null); 
   const data=[
    {id:"1",name:"MSN",value:"FIOI031125005213"},
    {id:"2",name:"Consumer No",value:"5005213"},
    {id:"3",name:"Consumer Name",value:"Test Meter"},
    {id:"4",name:"Reading Date",value:"2025-11-08"},
    {id:"5",name:"Bill Month",value:"Nov-2025"},
    {id:"6",name:"Monthly Consumption",value:"0"},
    {id:"7",name:"Gas Cost",value:"13.84"},
    {id:"8",name:"Mkt Cost",value:"0.2"},
    {id:"9",name:"Distribution Cost",value:"17.42"},
    {id:"10",name:"Total Charge excluding VAT",value:"34.07"},
    {id:"11",name:"Connection EMI for security Deposit",value:"2.42"},
    {id:"12",name:"Connection EMI for AMC",value:"2.42"},
    {id:"13",name:"Consumption",value:"0"},
    {id:"14",name:"Previous Reading",value:""},
    {id:"15",name:"Current Reading",value:""},
    {id:"16",name:"Gas Charge excluding VAT",value:"0"},
    {id:"17",name:"VAT(in Rs)",value:"0"},
    {id:"18",name:"Opening Balance",value:"-556.26"},
    {id:"19",name:"Available Amt",value:"-561.1"},
    {id:"20",name:"Day Debit",value:"4.84"},
    {id:"21",name:"Day Credit",value:"0"},
  
   ];
  


    const [showCalendar, setShowCalendar] = useState(false);
  const [fromDate, setFromDate] = useState( tenDaysAgo);
  const [toDate, setToDate] = useState(today);
  const [markedDates, setMarkedDates] = useState({});
  const [hasData, setHasData] = useState(false);
 const [error,setError]=useState(false)
 const[modalOpen,setModalOpen]=useState(false)
  const handlePress = (buttonId) => {
    setActiveButton(buttonId);
  };
 
  const onDayPress = (day) => {
    if (!fromDate || (fromDate && toDate)) {
     
      setFromDate(day.dateString);
      setToDate(null);
      setMarkedDates({
        [day.dateString]: { startingDay: true, color: "#4CAF50", textColor: "white" },
      });
    } else {
    
      let range = getRange(fromDate, day.dateString);
      setToDate(day.dateString);
      setMarkedDates(range);
    }
  };
 
 
  const getRange = (start, end) => {
    let range = {};
    let startDate = new Date(start);
    let endDate = new Date(end);
    let currentDate = new Date(start);
 
    while (currentDate <= endDate) {
      const dateStr = currentDate.toISOString().split("T")[0];
      range[dateStr] = { color: "#85bb87ff", textColor: "white" };
      currentDate.setDate(currentDate.getDate() + 1);
    }
 
    range[start] = { startingDay: true, color: "#4CAF50", textColor: "white" };
    range[end] = { endingDay: true, color: "#4CAF50", textColor: "white" };
   
  const rangeLength = Object.keys(range).length;
    if(rangeLength>31)
    { 
      setError(true);

    }
    return range;
  };
  

  const handleContinue = () => {
    setShowCalendar(false);
  
    if (fromDate && toDate) {setHasData(false);

     }
  };
 

  const handleCancel = () => {
    setShowCalendar(false);
    setFromDate(tenDaysAgo);
    setToDate(today);
    // setMarkedDates(null);
    setError(false);
  };
   useEffect(() => {
    if (fromDate && toDate) {
      const newRange = getRange(fromDate, toDate);
      setMarkedDates(newRange);
    }
  }, [fromDate, toDate]);
    return(
     
          <SafeAreaView style={{flex:1,backgroundColor:darkMode?Colors.black:Colors.bgscreens}}>
        <View style={[styles.container,{backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Prepaid<Text style={{color:"#4f7640ff"}}> Consumption</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(160),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>
        This section covers prepaid gas management , recharging , usage monitoring and balance deductions.
           </Text>
           <View style={{flexDirection:"row",justifyContent:"space-around"}}>
             <TouchableOpacity onPress={() => setShowCalendar(true)}>
        <View style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:10,borderRadius:10,paddingHorizontal:widthValue(25),paddingVertical:heightValue(60),flexDirection:"row",gap:10,marginHorizontal:widthValue(20)}}>
           <AntDesign name="calendar" color={darkMode?Colors.white:Colors.black} size={heightValue(38)} style={{alignSelf:"center"}}/>
           <View>
          <Text style={{fontSize:heightValue(56),color:darkMode?Colors.white:Colors.gray}}> From Date</Text>
          <Text style={{fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>  {fromDate }</Text>
          </View>
          </View>
          </TouchableOpacity>
           <TouchableOpacity  onPress={() => setShowCalendar(true)}>
        <View style={{backgroundColor:darkMode?Colors.darkbg:Colors.white,margin:10,borderRadius:10,paddingHorizontal:widthValue(25),paddingVertical:heightValue(60),flexDirection:"row",gap:10,marginHorizontal:widthValue(20)}}>
  
           <AntDesign name="calendar" color={darkMode?Colors.white:Colors.black} size={heightValue(38)} style={{alignSelf:"center"}} />
           <View >
           <Text style={{fontSize:heightValue(56),color:darkMode?Colors.white:Colors.gray}}>  To Date</Text>
           <Text style={{fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black}}>  {toDate }</Text>
           </View>
           </View>
 </TouchableOpacity>

           
           </View>
         <Modal visible={showCalendar} transparent   presentationStyle="overFullScreen"
      statusBarTranslucent={true} >
        <View style={styles.modalContainer}>
          <View style={[styles.calendarCard,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
            
            <Calendar
              markingType="period"
              markedDates={markedDates}
              onDayPress={onDayPress}
              theme={{arrowColor:darkMode?Colors.white:Colors.black,calendarBackground:darkMode?Colors.darkbg:Colors.white,textSectionTitleColor:darkMode?Colors.white:Colors.black,monthTextColor:darkMode?Colors.white:Colors.black, dayTextColor:darkMode?Colors.white:Colors.black,textDisabledColor:darkMode?"#3e3d3dff":"#eae6e6ff"
}}
               maxDate={today}
                 disableAllTouchEventsForDisabledDays={true}
               hideExtraDays={false}
            />
            {error&&<Text style={{color:"red",textAlign:"center",marginHorizontal:30,marginVertical:20}}>Invalid Selection,Please select a data range within 31 days</Text>}
 
            <View style={styles.btnRow}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: darkMode?"#523b3bff":"#faf0edff" }]}
                onPress={handleCancel}
              >
                <Text style={{ color: "#c63b2f", fontWeight: "400",fontSize:heightValue(54) }}>Cancel</Text>
              </TouchableOpacity>
 
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#64ad54ff" }]}
                onPress={handleContinue}
                disabled={error}
              >
                <Text style={{ color: "white", fontWeight: "400",fontSize:heightValue(54) }}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
<ScrollView showsVerticalScrollIndicator={false}>
      {
  Object.keys(markedDates).map((date) => (
    <View
      key={date}
      style={{
        width: widthValue(1.1),
        backgroundColor:darkMode?Colors.darkbg:Colors.white,
       
        marginHorizontal: "auto",
        borderRadius: 15,
        elevation: 5,
        paddingHorizontal:widthValue(20) ,
   
    paddingVertical:heightValue(50),
        marginVertical: heightValue(80),
      }}
    >
      <View style={{ flexDirection: "row", gap: 5 }}>
        <View
          style={{
            height: heightValue(30),
            width: widthValue(100),
            backgroundColor: "green",
          }}
        />
        <View style={{ gap: 7 }}>
          <Text style={{ fontSize: heightValue(43), fontWeight: 450,color:darkMode?Colors.white:Colors.black }}>
            Reading Date: {date}
          </Text>
          <Text style={{ fontSize: heightValue(58),color:darkMode?Colors.white:Colors.black}}>Consumption(M3): 0</Text>
          <Text style={{ fontSize: heightValue(58),color:darkMode?Colors.white:Colors.black}}>Available Amount(Rs.): -561</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setModalOpen(date)} 
        style={{
          backgroundColor: "#477742ff",
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          marginVertical:10,marginBottom:0,
          height: heightValue(20),
        }}
      >
        <Text style={{ color: "white", fontSize: heightValue(50) }}>View Details</Text>
      </TouchableOpacity>

      {modalOpen === date && (
        <Modal
          transparent
          visible={modalOpen === date}
          animationType="fade"
          onRequestClose={() => setModalOpen(null)}
            presentationStyle="overFullScreen"
      statusBarTranslucent={true}
        >
          <View style={styles.overlay}>
            <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <View
                  style={{
                    height: heightValue(30),
                    width: widthValue(100),
                    backgroundColor: "green",
                  }}
                />
                <Text style={{ fontSize: heightValue(43), fontWeight: 450,color:darkMode?Colors.white:Colors.black }}>
                  Reading Date: <Text style={{ color: "green" }}>{date}</Text>
                </Text>
              </View>
<ScrollView showsVerticalScrollIndicator={false}>
              {data.map((item) => (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <Text style={{ width: widthValue(3), fontWeight: 500,fontSize:heightValue(65),color:darkMode?Colors.white:Colors.black }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontWeight: 500,fontSize:heightValue(65),color:darkMode?Colors.white:Colors.black }}>{item.value}</Text>
                </View>
              ))}

              <TouchableOpacity
                onPress={() => setModalOpen(null)}
                style={{
                  backgroundColor: "#477742ff",
                  borderRadius: 10,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  marginBottom:0,
                  height: heightValue(20),
                }}
              >
                <Text style={{ color: "white", fontSize: heightValue(50)}}>Close</Text>
              </TouchableOpacity>
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}
    </View>
  ))
}</ScrollView>

         
          </View>
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
    
  },overlay: {
   padding:0,
    justifyContent:"center",
   flex:1,
    backgroundColor:"rgba(0,0,0,0.5)",
  },
  alertBox: {
    backgroundColor: 'white',
    alignSelf:"center",
    borderRadius:20,
    width:widthValue(1.2),
    height:heightValue(1.1),
   marginHorizontal:"auto",
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation:5
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

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  calendarCard: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    paddingHorizontal:widthValue(20) ,
   
    paddingVertical:heightValue(50)
  },
  monthTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    marginBottom: 10,
  },
  btnRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  btn: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    
  },
    })
    