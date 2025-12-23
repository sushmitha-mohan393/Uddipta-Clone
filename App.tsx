// import {useState} from "react";
// import {  StyleSheet, View,Text,Image,ImageBackground,ScrollView,Button, TouchableOpacity,Modal,ActivityIndicator,Alert,TextInput, Platform} from 'react-native';
// import  Compo1 from "./src/components/Compo1.jsx";
// import Box from "./src/components/Box.js";
// import Input from "./src/components/Input.jsx"
// const imag=require('./src/assets/virat1.jpg');

// import OnboardingScreen from './src/screens/Onboard.js'
// import Login from "./src/screens/Login.js";
// import Dashboard from "./src/screens/Dashboard.js"
// import Nav from './Nav.js'
// import Feather from 'react-native-vector-icons/Feather';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import{ createDrawerNavigator} from '@react-navigation/drawer';
// import Dos from "./src/screens/Dos.js";
// import ProfileInfo from "./src/components/ProfileInfo.js"
// import ColorMode from "./src/components/ColorMode.js"
// import DeleteAccount from "./src/components/DeleteAccount.js"
// import DrawNav from "./Drawnav.js";
// import Settinggs from "./src/screens/Settinggs.js";
// import AcknowledgedModal from "./src/WFM/AcknowledgedModal.js"
// import RequestFeed from "./src/components/Request.js";
// import DeleteModal from "./src/components/DeleteModal.js";
// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./src/redux/store";

// import ModalScreen from "./src/WFM/ModalScreen.js";

// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
// import LiveData from "./src/screens/LiveData.js";
// import Instructionss from "./src/screens/Instructionss.js";
// import BoxMeters from "./src/WFM/BoxMeters.js"
// import FaultyMeters from "./src/WFM/FaultyMeters.js" 
// import Acknowledged from "./src/WFM/Acknowledged.js"

// import MeterStatus from "./src/WFM/MeterStatus.js"
// const Draw=createDrawerNavigator();
// const Stack= createNativeStackNavigator();
// function HomeStack() {
//   return (
//     <Provider  store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//     <NavigationContainer>
//     <Stack.Navigator  >
//       <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{headerShown:false}}/>
//        <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      
//         <Stack.Screen name="DrawNav" component={DrawNav} options={{headerShown:false}}/>
//         {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/> */}
     
      
//         <Stack.Screen name="BoxMeters" component={BoxMeters} options={{headerShown:false}}/>
       
      

 
//         <Stack.Screen name="Acknowledged" component={Acknowledged} options={{headerShown:false}}/>
//         <Stack.Screen name="FaultyMeters" component={FaultyMeters} options={{headerShown:false}}/>
       
      
//         <Stack.Screen name="MeterStatus" component={MeterStatus} options={{headerShown:false}}/>
//         <Stack.Screen name="ModalScreen" component={ModalScreen} options={{headerShown:false}}/>
//         <Stack.Screen name="ProfileInfo" component={ProfileInfo} options={{headerShown:false}}/>
//        <Stack.Screen name="Request" component={RequestFeed} options={{headerShown:false}}/>
//         <Stack.Screen name="ColorMode" component={ColorMode} options={{headerShown:false}}/>
//         {/* <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/> */}
      
 
//     </Stack.Navigator>
//     </NavigationContainer>
//     </PersistGate>
//     </Provider>
//   );
// }
 
// function App() {

 
//   return (
 
//     <View style={{flex:1}}>
     
//   <HomeStack />
       
       
//     </View>

//   )
// }

// export default App;
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import { NavigationContainer } from "@react-navigation/native";

import OnboardingScreen from "./src/screens/Onboard.js";
import Login from "./src/screens/Login.js";
import DrawNav from "./Drawnav.js";

import BoxMeters from "./src/WFM/BoxMeters.js";
import FaultyMeters from "./src/WFM/FaultyMeters.js";
import Acknowledged from "./src/WFM/Acknowledged.js";
import MeterStatus from "./src/WFM/MeterStatus.js";
import ModalScreen from "./src/WFM/ModalScreen.js";
import ProfileInfo from "./src/components/ProfileInfo.js";
import RequestFeed from "./src/components/Request.js";
import ColorMode from "./src/components/ColorMode.js";
import { useAppSelector } from "./src/redux/hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SwitchAccount from "./src/components/SwitchAccount.js";
import Toast from "react-native-toast-message";
import toastConfig from "./toastConfig.js";
const Stack = createNativeStackNavigator();
function MainNavigator() {
  const loginResponse = useAppSelector((state) => state.auth.loginResponse);
  const hasSeenOnboarding = useAppSelector((state) => state.onboarding.onboarded);

  let initialScreen = "Onboarding";

  if (hasSeenOnboarding && !loginResponse) {
    initialScreen = "Login";
  } else if (hasSeenOnboarding && loginResponse) {
    initialScreen = "DrawNav";
  }

  return (
    <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="DrawNav" component={DrawNav} />

     
      <Stack.Screen name="BoxMeters" component={BoxMeters} />
      <Stack.Screen name="Acknowledged" component={Acknowledged} />
      <Stack.Screen name="FaultyMeters" component={FaultyMeters} />
      <Stack.Screen name="MeterStatus" component={MeterStatus} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
      <Stack.Screen name="Request" component={RequestFeed} />
      <Stack.Screen name="ColorMode" component={ColorMode} />
      <Stack.Screen name="SwitchAccount" component={SwitchAccount} />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigator />
          <Toast config={toastConfig}/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

