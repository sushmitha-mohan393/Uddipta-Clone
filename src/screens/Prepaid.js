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
export default function Prepaid({navigation})
{ 

  const{openDrawer}=navigation;
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
      <DrawerSceneWrapper>
        <View style={styles.container}>
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
           <Text style={{marginHorizontal:widthValue(20),fontSize:25}}>Prepaid<Text style={{color:"#4f7640ff"}}> Consumption</Text></Text>
           <Text style={{marginHorizontal:widthValue(20),marginVertical:heightValue(130),fontSize:14}}>
        This section covers prepaid gas management , recharging , usage monitoring and balance deductions.
           </Text>
           <View style={{flexDirection:"row",gap:10,}}>
             <TouchableOpacity onPress={() => setShowCalendar(true)}>
        <View style={{width:widthValue(2.6),backgroundColor:"#f7fcffff",height:heightValue(13),margin:20,borderRadius:10,padding:15,paddingTop:25,flexDirection:"row",gap:10}}>
           <AntDesign name="calendar" color="#000" size={24} />
           <View>
          <Text style={{bottom:12,fontSize:17,color:"gray"}}> From Date</Text>
          <Text style={{bottom:10,fontSize:16,}}>  {fromDate }</Text>
          </View>
          </View>
          </TouchableOpacity>
           <TouchableOpacity  onPress={() => setShowCalendar(true)}>
        <View style={{width:widthValue(2.6),backgroundColor:"#f3faffff",height:heightValue(13),margin:20,borderRadius:10,padding:15,paddingTop:25,flexDirection:"row",gap:10}}>
  
           <AntDesign name="calendar" color="#000" size={24} />
           <View >
           <Text style={{bottom:12,fontSize:17,color:"gray"}}>  To Date</Text>
           <Text style={{bottom:10,fontSize:16}}>  {toDate }</Text>
           </View>
           </View>
 </TouchableOpacity>

           
           </View>
         <Modal visible={showCalendar} transparent >
        <View style={styles.modalContainer}>
          <View style={styles.calendarCard}>
            
            <Calendar
              markingType="period"
              markedDates={markedDates}
              onDayPress={onDayPress}
              theme={{arrowColor:"black"}}
               maxDate={today}
       
               hideExtraDays={true}
            />
            {error&&<Text style={{color:"#c63b2f",textAlign:"center",marginHorizontal:30,marginVertical:20}}>Invalid Selection,Please select a data range within 31 days</Text>}
 
            <View style={styles.btnRow}>
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#faf0edff" }]}
                onPress={handleCancel}
              >
                <Text style={{ color: "#c63b2f", fontWeight: "400",fontSize:17 }}>Cancel</Text>
              </TouchableOpacity>
 
              <TouchableOpacity
                style={[styles.btn, { backgroundColor: "#64ad54ff" }]}
                onPress={handleContinue}
                disabled={error}
              >
                <Text style={{ color: "white", fontWeight: "400",fontSize:17 }}>Continue</Text>
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
        backgroundColor: "#f3faffff",
        height: heightValue(5.5),
        marginHorizontal: "auto",
        borderRadius: 15,
        elevation: 5,
        padding: 20,
        marginVertical: 10,
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
          <Text style={{ fontSize: 20, fontWeight: 450 }}>
            Reading Date: {date}
          </Text>
          <Text>Consumption(M3): 0</Text>
          <Text>Available Amount(Rs.): -561</Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setModalOpen(date)} // pass current date
        style={{
          backgroundColor: "#436b3bff",
          borderRadius: 10,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 10,
          height: heightValue(20),
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>View Details</Text>
      </TouchableOpacity>

      {modalOpen === date && (
        <Modal
          transparent
          visible={modalOpen === date}
          animationType="fade"
          onRequestClose={() => setModalOpen(null)}
        >
          <View style={styles.overlay}>
            <View style={styles.alertBox}>
              <View style={{ flexDirection: "row", gap: 5 }}>
                <View
                  style={{
                    height: heightValue(30),
                    width: widthValue(100),
                    backgroundColor: "green",
                  }}
                />
                <Text style={{ fontSize: 20, fontWeight: 450 }}>
                  Reading Date: <Text style={{ color: "green" }}>{date}</Text>
                </Text>
              </View>

              {data.map((item) => (
                <View
                  key={item.id}
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingTop: 10,
                  }}
                >
                  <Text style={{ width: widthValue(3), fontWeight: 500 }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontWeight: 500 }}>{item.value}</Text>
                </View>
              ))}

              <TouchableOpacity
                onPress={() => setModalOpen(null)}
                style={{
                  backgroundColor: "#436b3bff",
                  borderRadius: 10,
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  marginVertical: 10,
                  height: heightValue(20),
                }}
              >
                <Text style={{ color: "white", fontSize: 18 }}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  ))
}</ScrollView>

         
          </View>
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
    
  },overlay: {
   
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
   margin:"auto",
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation:5
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
        backgroundColor: "#6e9865ff",
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
      },dataText: { color: "#333", fontSize: 16 },
  noData: { color: "#c63b2f", fontSize: 18, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  calendarCard: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
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

 

    
      // <View style={styles.dateContainer}>
      //   <TouchableOpacity style={styles.dateBox} onPress={() => setShowCalendar(true)}>
      //     <Text>From Date{"\n"}{fromDate}</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity style={styles.dateBox} onPress={() => setShowCalendar(true)}>
      //     <Text>To Date{"\n"}{toDate }</Text>
      //   </TouchableOpacity>
      // </View>
 
//   dataSection: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
  
// });