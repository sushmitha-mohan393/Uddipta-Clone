import {useState} from "react";
import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput, Platform} from 'react-native';
import  Compo1 from "./src/components/Compo1.jsx";
import Box from "./src/components/Box.jsx";
import Input from "./src/components/Input.jsx"
const imag=require('./src/assets/virat1.jpg');
// import Onboard from "./src/screens/Onboard"
import OnboardingScreen from './src/screens/Onboard.js'
import Login from "./src/screens/Login.jsx";
import Dashboard from "./src/screens/Dashboard.js"
import Nav from './Nav.js'
import Feather from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{ createDrawerNavigator} from '@react-navigation/drawer';
import Dos from "./src/screens/Dos.js";
import ProfileInfo from "./src/components/ProfileInfo.js"
import ColorMode from "./src/components/ColorMode.js"
import DeleteAccount from "./src/components/DeleteAccount.js"
import DrawNav from "./Drawnav.js";
import Settinggs from "./src/screens/Settinggs.js";
import Logout from "./src/screens/Logout.js";
import RequestFeed from "./src/components/Request.js";
import DeleteModal from "./src/components/DeleteModal.js";


// import Dos from "./src/screens/Dos.js";
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import LiveData from "./src/screens/LiveData.js";
import Instructionss from "./src/screens/Instructions.js";
 
// import MyEChart from "./src/components/Echart.js"
const Draw=createDrawerNavigator();
const Stack= createNativeStackNavigator();
function HomeStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
       <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
        <Stack.Screen name="Nav" component={Nav} options={{headerShown:false}}/>
       <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown:false}}/>
       {/* <Draw.Screen name="drawer" component={DrawNav}  options={{headerShown:false}}/> */}
       <Stack.Screen name="Settings" component={Settinggs} options={{headerShown:false}}/>
       <Stack.Screen name="Logout" component={Logout} options={{headerShown:false}}/>
      
       {/* <Stack.Screen name="DrawNav" component={DrawNav} options={{headerShown:false}}/> */}
       <Stack.Screen name="Dos" component={Dos} options={{headerShown:false}}/>
       <Stack.Screen name="ProfileInfo" component={ProfileInfo} options={{headerShown:false}}/>
       <Stack.Screen name="ColorMode" component={ColorMode} options={{headerShown:false}}/>
       <Stack.Screen name="Request" component={RequestFeed} options={{headerShown:false}} />
       <Stack.Screen name="DeleteModal" component={DeleteModal} options={{headerShown:false}} />
       <Stack.Screen name="Instructions" component={Instructionss} options={{headerShown:false}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}
 
function App() {

 
  return (
 
    <View style={{flex:1}}>
     
  <HomeStack />
       
       
    </View>

  )
}

export default App;
 