import { View, Text, StyleSheet, TouchableOpacity,TextInput, ActivityIndicator } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { fontStyles, heightValue , widthValue } from "../../styles";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useSelector } from 'react-redux';
import { Colors } from "../../Colors";
import axios from 'axios';
import Toast from "react-native-toast-message";

const SwitchAccount = ({navigation}) => {
    const LOGIN_STEPS = {
  ADD_ACCOUNT: "ADD_ACCOUNT",
  SEND_OTP: "SEND_OTP",
  VERIFY: "VERIFY",
};
 const [addAccount,setAddAccount]=useState(true);
   const[username,setUsername]=useState(null)
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
       const loginResponse = useSelector((state) => state?.auth?.loginResponse)
   const [activeField, setActiveField] = useState(null);
       const [activeView, setActiveView] = useState(null); 
         const [loading, setLoading] = useState(false);
         const[enableButton,setEnableButton]=useState(false);
         const[balance,setBalance]=useState([]);
         const[otp,setOtp]=useState(0);
         const[otpValue,setOtpValue]=useState(null)
         const[loginText,setLoginText]=useState("Add account")
    const [loginStep, setLoginStep] = useState(LOGIN_STEPS.ADD_ACCOUNT)
       const handlePress = (viewName) => {
    setActiveView(viewName);
  };  
//   useEffect(() => {
//   if (loginResponse?.consumerId) {
//     loadInitialAccounts();
//   }
// }, []);

// const loadInitialAccounts = async () => {
//   const data = await fetchLinkedConsumers(loginResponse.consumerId);
//   setBalance(data);
// };

  useEffect(()=>{
  multipleapi();
     },[]
    );
      const multipleapi = async () => {
    try {
      const bal = await axios.get(
        `https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/LinkedConsumers?consumerNo=${loginResponse?.consumerId}`,
        { 
          headers: {
            Authorization: `Bearer ${loginResponse?.jwtToken}`,
          },
        }
      );
      setBalance(bal.data);
     console.log("balance",balance);
    } catch (error) {
      console.log("Balance API error:", error);
    }
  };
const fetchLinkedConsumers = async (consumerNo) => {
  try {
    const res = await axios.get(
      `https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/LinkedConsumers`,
      {
        params: { consumerNo },
        headers: {
          Authorization: `Bearer ${loginResponse?.jwtToken}`,
        },
      }
    );
    console.log("res",res.data);
    return res.data ;
  } catch (error) {
    console.log("LinkedConsumers error", error.response?.data);
    return [];
  }
};

  const validateOtp=(o=otpValue)=>{
      if (o && o.trim().length > 5) {
    setEnableButton(true);
    return true;          
  } else {
    setEnableButton(false);
    return false;        
  }
  }
   const validate = (u = username) => {
  if (u && u.trim().length > 5) {
    setEnableButton(true);
    return true;          
  } else {
    setEnableButton(false);
    return false;        
  }
};


const addAccountApi = async () => {
  if (!validate()) return;

  if (!loginResponse?.jwtToken) {
    console.log("JWT token missing");
    return;
  }

  setLoading(true);

  try {
    const res = await axios.get(
      `https://cportalapi-agcl-tnd.esyasoft.com/api/Login/ConsumerValidation?Consno=${username}`,
      {
        headers: {
          Authorization: `Bearer ${loginResponse.jwtToken}`,
        },
      }
    );

    if (res.data === "Valid ConsumerNo") {
      setLoginStep(LOGIN_STEPS.SEND_OTP);
      
      setOtp(1);
      setLoginText("Send OTP");
    } else {
      Toast.show({
        type: "error",
        text1: "Alert!",
        text2: "Invalid Consumer Number. Please try again.",
      });
    }
  } catch (err) {
    console.log("Add Account error:", err);
  } finally {
    setLoading(false);
  }
};
const sendOtpApi = async () => {
   console.log("Verify OTP API call");
    try {
    const otpres = await axios.post(
      `https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/SaveLinkandSendOtp`,
      {
        RequestId:"a3f1c9e4-5b2d-4f8a-9c1e-7d6b2a4f91e3",
     ConsumerNo:username,
     NotificationType:"all"
      },
      {
        headers: {
          Authorization: `Bearer ${loginResponse.jwtToken}`,
        },
      })
      console.log("otpres",otpres);
   if (otpres.data.response==="success")
    Toast.show({
        type: "success",
        text1: "Otp Sent!",
        text2:`Otp sent to su**********han@esyasoft.com.Please check your email`,
      });
   setEnableButton(false);
   setOtp(2);
   setLoginText("Verify");
    setLoginStep(LOGIN_STEPS.VERIFY);
  }catch (err) {
    console.log("Add Account error:", err);
  } finally {
    setLoading(false);
  }}

// const verifyOtpApi = async () => {
    

//     // const consumer = await fetchLinkedConsumers(username) ;
//     // console.log("data",consumer);
// //     const consumer = {
// //     consumerNo: username,
// //     name: "Test Meter",
// //     msn: null,
// //     sms: false,
// //   };

// //   setBalance(prev => {
// //     if (prev.some(item => item.consumerNo === consumer.consumerNo)) {
// //       return prev;
// //     }
// //     return [...prev, consumer];
// //   });
//      Toast.show({
//         type: "success",
//         text1: "Successfull!",
//         text2:`Account Switched succesfully`,
//       });
//   setAddAccount(true);
//   setOtp(0);
//   setLoginStep(LOGIN_STEPS.LOGIN_STEPS)
// };
const verifyOtpApi = async () => {
  if (!loginResponse?.jwtToken) {
    console.log("JWT token missing");
    return;
  }

  setLoading(true);

  try {
    const payload = {
      RequestId: "a3f1c9e4-5b2d-4f8a-9c1e-7d6b2a4f91e3",
      ConsumerNo: loginResponse.consumerId, 
      Otp: otpValue,                       
      LinkedConsumer: username,             
    };

    const res = await axios.post(
      "https://cportalapi-agcl-tnd.esyasoft.com/api/Consumer/SwitchConsumer",
    
      {
        headers: {
          Authorization: `Bearer ${loginResponse.jwtToken}`,
        },
      }
    );

    console.log("SwitchConsumer response:", res.data);

    Toast.show({
      type: "success",
      text1: "Successful!",
      text2: "Account switched successfully",
    });

   
    setAddAccount(true);
    setOtp(0);
    setLoginStep(LOGIN_STEPS.ADD_ACCOUNT);

  } catch (error) {
    console.log(
      "SwitchConsumer error:",
      error.response?.data || error.message
    );

    Toast.show({
      type: "error",
      text1: "Error",
      text2: error.response?.data?.message || "OTP verification failed",
    });
  } finally {
    setLoading(false);
  }
};

const handleLogin = () => {
  if (loginStep === LOGIN_STEPS.ADD_ACCOUNT) {
    addAccountApi();
  } else if (loginStep === LOGIN_STEPS.SEND_OTP) {
    sendOtpApi();
  } else if (loginStep === LOGIN_STEPS.VERIFY) {
    verifyOtpApi();
  }
};
  return (
    <View style={[styles.container,{ backgroundColor:darkMode?Colors.black:Colors.bgscreens}]}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View style={{flexDirection:"row"}}>
      <Feather name="chevron-left" color={darkMode?Colors.white:Colors.black} size={heightValue(45)} />
      <Text style={{fontSize:heightValue(60),color:darkMode?Colors.white:Colors.black}}>Back</Text>
      </View>
</TouchableOpacity>
 <Text style={{marginHorizontal:widthValue(40),fontSize:heightValue(35),color:darkMode?Colors.white:Colors.black}}>Manage<Text style={{color:"#4f7640ff"}}> Multiple Accounts</Text></Text>
           <Text style={{marginHorizontal:widthValue(40),marginVertical:heightValue(130),fontSize:heightValue(55),color:darkMode?Colors.white:Colors.black,width:widthValue(1.18)}}>
     Enable users to add and link multiple utility accounts within the mobile app,providing a unified view to manage billing,usage, and notifications across all accounts seamlessly. </Text>
 {addAccount ? <View>
    <TouchableOpacity onPress={()=>{setAddAccount(false)}} style={{width:widthValue(9),height:widthValue(9),backgroundColor:Colors.dashgreen,alignItems:"center",justifyContent:"center",borderRadius:50,position:"relative",alignSelf:"flex-end",top:heightValue(35),left:5}} >
        <FontAwesome name="user-plus" color={Colors.white} size={24} />
    </TouchableOpacity>
     <View style={{width:widthValue(1.13),height:heightValue(3),backgroundColor:darkMode?Colors.credentialbg:Colors.white,marginTop:0,borderRadius:10,padding:10,position:"static",}}>
      
    <View style={{flexDirection:"row",gap:10,marginTop:20,padding:5}}> 
                     <Text style={{ fontSize:15, fontWeight: 'bold',width:widthValue(9),color:darkMode?Colors.white:Colors.black,textAlign:"center"}}>SL.No</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(4),textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Name</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(4),textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Consumer ID</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(8),textAlign:"center",color:darkMode?Colors.white:Colors.black}}>Action</Text>
                 </View >
                 <View style={styles.seperator}></View>
              {/* <View style={{flexDirection:"row",gap:10,padding:5}}> 
                     <Text style={{ fontSize:15, fontWeight: 'bold',width:widthValue(9),color:darkMode?Colors.white:Colors.black,textAlign:"center"}}>1</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(4),textAlign:"center",color:darkMode?Colors.white:Colors.black}}>{balance[0]?.name}</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(4),textAlign:"center",color:darkMode?Colors.white:Colors.black}}>{balance[0]?.consumerNo}</Text>
                     <Text style={{ fontSize:  15, fontWeight: 'bold',width:widthValue(8),textAlign:"center",color:darkMode?Colors.white:Colors.black}}><MaterialCommunityIcons name="shield-check" color={Colors.dashgreen} size={24} /></Text>
                 </View > */}
                 {balance.map((item, index) => (
  <View
    key={item.consumerNo}
    style={{ flexDirection: "row", gap: 10, padding: 5 }}
  >
    <Text style={{ width: widthValue(9), textAlign: "center",fontSize:15, fontWeight:"bold",color:darkMode?Colors.white:Colors.black }}>
      {index + 1}
    </Text>

    <Text style={{ width: widthValue(4), textAlign: "center" ,fontSize:15, fontWeight:"bold",color:darkMode?Colors.white:Colors.black}}>
      {item.name}
    </Text>

    <Text style={{ width: widthValue(4), textAlign: "center",fontSize:15, fontWeight:"bold",color:darkMode?Colors.white:Colors.black }}>
      {item.consumerNo}
    </Text>

    <Text style={{ width: widthValue(8), textAlign: "center" ,fontSize:15, fontWeight:"bold",color:darkMode?Colors.white:Colors.black}}>
      <MaterialCommunityIcons
        name="shield-check"
        color={Colors.dashgreen}
        size={24}
      />
    </Text>
  </View>
))}

                 <Text style={{color:Colors.dashgreen,position: "absolute",
    left:widthValue(7),bottom:10}}>You can add maximum upto 5 Accounts</Text>
   
   </View></View>
  :
   <View>
    <View style={{backgroundColor:"#262E41",marginHorizontal:"auto",borderRadius:20,width:widthValue(1.13),marginTop:heightValue(22),padding:10}}>
    {otp==0 && <View> <Text style={{fontSize:heightValue(30),marginHorizontal:widthValue(15),marginTop:heightValue(60),color:"white"}}>Add <Text style={{color:"green"}}>Account</Text></Text>
              <View style={[styles.input,activeField === "username" &&styles.activeView]} >
                   <Text style={{color:"#b7b1b1ff",fontSize:heightValue(60)}}>CONSUMER ID</Text>
              <TextInput  style={{color:"white",fontSize:heightValue(60)}} value={username} keyboardType="numeric"  onChangeText={(text) => {
         const numericText = text.replace(/[^0-9]/g, ""); 
         setUsername(numericText);
         validate(numericText);
       }}onFocus={() => setActiveField("username")}
                 onBlur={() => setActiveField(null)} />
              <View style={styles.line}></View></View>
              </View>}
    {otp==1 &&  <View style={{padding:10}}>
                <Text style={[fontStyles.fontSize15,{color:"white",fontWeight:500,marginBottom:20}]}>To continue we need you to select one of the following:</Text>
                <View style={{flexDirection:"row",gap:10}}> <MaterialCommunityIcons name="circle-slice-8" color={Colors.dashgreen} size={24} />
                 <View>
                    <Text style={[fontStyles.fontSize15,{color:"#dcdcdcb6"}]}>Verify Otp via Email to</Text>
                    <Text style={[fontStyles.fontSize17,{color:"white",fontWeight:500}]}>su**********han@esyasoft.com</Text>
                 </View></View>
                </View>}
     {otp==2 &&
            <View>
                   <Text style={{fontSize:heightValue(30),marginHorizontal:widthValue(15),marginTop:heightValue(60),color:"white"}}>Enter <Text style={{color:"green"}}>OTP</Text></Text>
                   <View style={[styles.input ]} >
                        <Text style={{color:"#b7b1b1ff",fontSize:heightValue(60)}}>CONSUMER ID</Text>
                   {/* <Text  style={{color:"white",fontSize:heightValue(60)}} >{username}</Text> */}
                   <Text style={{color:"white",fontSize:heightValue(40),marginVertical:5}}>{username}</Text>
                   <View style={styles.line}></View></View>
                    <View style={[styles.input,activeField === 'otp' && styles.activeView,{marginBottom:heightValue(70)}]} >
                        <Text style={{color:"#b7b1b1ff",fontSize:heightValue(60)}}>OTP</Text>
                      
         <TextInput  style={{color:"white",fontSize:heightValue(40)}} value={otpValue} keyboardType="numeric"  onChangeText={(text) => {
         const number = text.replace(/[^0-9]/g, ""); 
         setOtpValue(number);
         validateOtp(number);
       }}onFocus={() => setActiveField("otp")}
                 onBlur={() => setActiveField(null)} /> 
                   
                      <View style={styles.line}></View>
                      </View>
                      </View>

        } 
            
               
               </View>

               <TouchableOpacity
                 onPress={handleLogin}
                 disabled={!enableButton}
               
                 
                 style={[
                   styles.login,
                   { backgroundColor: enableButton||loading ? "#477742ff" :Colors.credentialbg }, 
                 ]}
                 
               >
                 {loading ? (
                   
                     <View style={{flexDirection:"row"}}>
                     <Text style={{ color: "white", fontSize:heightValue(40)}}>
                    Loading </Text><ActivityIndicator center color="white" />
                    </View>
                   
                 ) : (
                   <Text style={{ color: "white", fontSize: heightValue(40), fontWeight: "500" }}>
                     {loginText}
                   </Text>
                 )}
               </TouchableOpacity>
              
               </View>
}
    </View>
  )
}

export default SwitchAccount
const styles=StyleSheet.create({
     container: {
   
  flex:1,
    backgroundColor:"#F2ECEC",
    padding:20,paddingTop:40
  },
   avatarContainer: {
    borderRadius: 80,
   
    backgroundColor:"white",alignItems:"center",top:heightValue(50),position:"relative",marginHorizontal:"auto"
  },
  seperator:{
        height:1,marginVertical:heightValue(70),backgroundColor:"#dfd8d8ff"
      },
        input:{
    marginHorizontal:widthValue(30),
   marginVertical:heightValue(100),
    paddingHorizontal:widthValue(40),
    paddingVertical:heightValue(70)
  
   
  },  activeView: {
    backgroundColor: '#3B4053', 
   borderRadius:20
  },
  line: {
    borderBottomColor: '#33d65cff', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    width:widthValue(1.4), 
    marginVertical:heightValue(-200), 
 
  },
  login:{
   backgroundColor:"#262E41",marginHorizontal:"auto",marginTop:heightValue(30),alignItems:"center",justifyContent:"center",borderRadius:50,padding:heightValue(70),width:widthValue(1.2),marginBottom:10
  },
})
