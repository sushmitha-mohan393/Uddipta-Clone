import {useState,useEffect} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput,} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { heightValue , widthValue } from "../../styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/authSlice";
import { SafeAreaView } from "react-native-safe-area-context";


function Login() { 
  const navigation = useNavigation();
  
    const [activeView, setActiveView] = useState(null); 

  // const darkMode = useSelector(state=.state.darkmOde)
  const[username,setUsername]=useState("125999809");
  const[password,setPassword]=useState("Esya@888");
      const[errors,setErrors]=useState({});
      const[showPassword,setShowPassword]=useState(false);
const [activeField, setActiveField] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submit,setSubmit]=useState("#3d3d53ff");
  const [isValid,setIsValid]=useState(false);

useEffect(() => {
  validate(username, password);
}, []);
  
const dispatch = useDispatch();
  const handleLogin = async () => {
    console.log('login innnnnnnnnnnnnnnnnnnnnnnn')
  if (!validate()) return; 
  
  setLoading(true);
  try {
    const encryptResponse = await axios.get('https://cportalapi-agcl-tnd.esyasoft.com/api/Admin/Encrypt', {
        headers: { PlainText: password },
      })
    console.log("encrypt",encryptResponse);
    const encryptValue = encryptResponse.data.value;
    
    const response = await axios.post('https://cportalapi-agcl-tnd.esyasoft.com/api/Login/Authenticate/Mobile', 
       {
        UserName: username, 
        Password: encryptValue,
      },
      // {
      //   headers: { "Content-Type": "application/json" },
      // }
    );

    console.log('Loginrepsonse',response);

if (response.data.error) {
  console.log("error",response.data.error

  )
  setErrors(prev => ({
    ...prev,
    invalid: response.data.error
  }));
  return;
}
    else{
      const fullResponse = response.data;
      dispatch(login(fullResponse));
console.log("Saved in Redux Persist:", fullResponse);
    navigation.navigate("DrawNav");
  }
  } catch (error) {
  } finally {
    setLoading(false);
  }
};
 
    const activeError =
  (activeField === "username" && errors.username) ||
  (activeField === "password" && errors.password) ||
  errors.invalid;
      

  const validate = (u=username,p=password) => {
  
    
    
    let newErrors = {};

   
     if (u.trim().length < 5)
      newErrors.username = "Consumer ID must be at least 5 characters.";

 
  
    if (!p) newErrors.password = "Password is required.";
    
  else if (p.length === 0) {
        newErrors.password="Password is required";

    } 

 else if(p.length<8)
         {
          newErrors.password="Password must be at least 8 characters";
         } 
    else if (!(p.match(/(?=.*\d)/)))
         {
        newErrors.password="Password must at least contain one digit";
       
    }
    else if(!p.match(/(?=.*[a-z])/))
    {
      newErrors.password="Password must at least contain one lowercase character";
        
    }
    else if(!p.match(/(?=.*[A-Z])/))
    {
      newErrors.password= "Password must at least contain one uppercase character";
    }
       
    else if(!p.match(/(?=.*[@$!%*?&])/))
    {
         newErrors.password="Password must at least contain one special character";
      
    }
    setErrors(newErrors);
    
    const valid=Object.keys(newErrors).length === 0;
    
   setIsValid(valid)
   if(valid)
   {
    setSubmit("green")
   }
   else
   {
    setSubmit("#3d3d53ff")
   }
   return valid;
    
  };
const handlePress = (viewName) => {
    setActiveView(viewName);
  };
    return(
      <SafeAreaView style={{flex:1}}>
         <ScrollView style={styles.container}   keyboardShouldPersistTaps="handled"
 >

          <Image source={require('../../assets/AGCLLogo.png')} style={styles.images} /> 
        <Text style={styles.title}>UDDIPTA</Text>
        <View style={{width:widthValue(3),height:heightValue(28),backgroundColor:"#477742ff",marginHorizontal:"auto",borderRadius:30,marginTop:heightValue(80)}}> </View>
        <View style={{width:widthValue(2),height:heightValue(28),backgroundColor:"#649958ff",marginHorizontal:"auto",borderRadius:40,marginTop:heightValue(-50)}}> </View>
        <View style={{backgroundColor:"#262E41",marginHorizontal:"auto",borderRadius:30,marginTop:heightValue(-50),padding:0}}>
            <Text style={{fontSize:heightValue(30),marginHorizontal:widthValue(15),marginTop:heightValue(60),color:"white"}}>Log <Text style={{color:"green"}}>In</Text></Text>
           <View style={[styles.input ,activeView === 'view1' && styles.activeView]} >
                <Text style={{color:"#b7b1b1ff",fontSize:heightValue(60)}}>CONSUMER ID</Text>
           <TextInput  style={{color:"white",fontSize:heightValue(60)}} value={username} keyboardType="numeric"  onChangeText={(text) => {
      const numericText = text.replace(/[^0-9]/g, ""); 
      setUsername(numericText);
      validate(numericText,password);
    }}onFocus={() => setActiveField("username")}
              onBlur={() => setActiveField(null)}  onPress={() => handlePress('view1')}/>
           <View style={styles.line}></View></View>
            <View style={[styles.input,activeView === 'view2' && styles.activeView,{marginBottom:heightValue(70)}]} >
                <Text style={{color:"#b7b1b1ff",fontSize:heightValue(60)}}>PASSWORD</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between"}}>

           <TextInput secureTextEntry={!showPassword}  value={password} onChangeText={(text) => {
                setPassword(text);
                validate(username,text);
              }}  onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField(null)} style={[{flex:1,color:"white",fontSize:heightValue(60)}]}
              onPress={() => handlePress('view2')}/> 
          
 <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={{ paddingHorizontal: 5 }}
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                color="#b7b1b1ff"
                size={22}
              />
            </TouchableOpacity>
           </View>
           <View style={styles.line}></View>
            </View>
          
  
            </View>
            {activeError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{activeError}</Text>
        </View>
      )}
<TouchableOpacity
  onPress={handleLogin}
  disabled={!isValid}

  
  style={[
    styles.login,
    { backgroundColor: isValid||loading ? "#477742ff" :"#3d3d53ff" }, 
  ]}
  
>
  {loading ? (
    
      
      <Text style={{ color: "white", fontSize:heightValue(40)}}>
        Logging in<ActivityIndicator   center color="white" />
      </Text>
    
  ) : (
    <Text style={{ color: "white", fontSize: heightValue(40), fontWeight: "500" }}>
      Login
    </Text>
  )}
</TouchableOpacity>

      <Text style={[styles.text,{fontSize: heightValue(40)}]}>Recharge instantly with <Text style={{color:"#5ba54bff"}}>QuickPay</Text></Text>
      <Text style={[styles.text,{fontSize:heightValue(48)}]}>Dont have an account ? <Text style={{color:"#5ba54bff"}}>Sign Up</Text></Text>
      <Text style={{color:"#5ba54bff",margin:heightValue(200),marginHorizontal:"auto",fontSize: heightValue(58)}}>Forgot Password?</Text>
      <View style={styles.power}>
      <Text style={{fontSize:heightValue(62)}} >Powered by</Text><Image source={require('../../assets/logo.webp')} style={{width:widthValue(5),height:heightValue(40)}} /></View><Text style={{marginHorizontal:"auto",fontSize:heightValue(62)}}>AGCL v1.0</Text>
       
         </ScrollView>
         </SafeAreaView>


    )
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
   backgroundColor:"white",
   padding:10
    // alignContent:"center",
    // justifyContent:"center"
  },
  images:{
    width:widthValue(3),
    height:widthValue(3),
    marginHorizontal:"auto",
    marginTop:heightValue(60)
   
  },
  title:{
    color:"green",
    marginHorizontal:"auto",fontSize:heightValue(40),fontWeight:400
  },
  login:{
   backgroundColor:"#262E41",marginHorizontal:"auto",marginTop:heightValue(30),alignItems:"center",justifyContent:"center",borderRadius:50,paddingHorizontal:widthValue(15),padding:heightValue(70),marginBottom:10
  },
  text:{marginVertical:heightValue(200),marginHorizontal:"auto"},
  power:{
    flexDirection:"row",justifyContent:"center",marginTop:heightValue(20)
  },
 
  line: {
    borderBottomColor: '#33d65cff', 
    borderBottomWidth: StyleSheet.hairlineWidth, 
    width:widthValue(1.6), 
    marginVertical:heightValue(-200), 
 
  },
  input:{
    marginHorizontal:widthValue(30),
   marginVertical:heightValue(100),
    paddingHorizontal:widthValue(40),
    paddingVertical:heightValue(70)
  
   
  },  activeView: {
    backgroundColor: '#3B4053', 
   borderRadius:10
  },
   errorContainer: {
    marginTop: heightValue(60),
    alignItems: "center",
  },
  error: {
    color: "red",
    fontSize: heightValue(60),
    // marginVertical: 2,
    textAlign: "center",
    width: "85%",
  },
  logging:{
    backgroundColor:"green"
  }
})
export default Login;

