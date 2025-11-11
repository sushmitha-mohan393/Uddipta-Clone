import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import Dashboard from './src/screens/Dashboard';
import Logout from "./src/screens/Logout";
// import Wishlist from '../screens/wishlist';
// import History from '../screens/history';
import {Platform,Alert,Button, TouchableOpacity, View, Text, Settings, StyleSheet} from 'react-native';
 import Login from "./src/screens/Login"
const Drawer = createDrawerNavigator();
import  Settinggs from './src/screens/Settinggs';
import { heightValue, widthValue } from './styles';
import Dos from './src/screens/Dos';
import LiveData from './src/screens/LiveData';
import Contact from './src/screens/Contact';
import Notifications from './src/screens/Notifications'
import Prepaid from './src/screens/Prepaid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Comparision from "./src/screens/Comparision";

import History from "./src/screens/History"
import Instructionss from './src/screens/Instructions';

 
const DrawNav= () => {
   const [showSubMenu, setShowSubMenu] = useState(false);
 const drawerIcon = ({ focused, size }, IconComponent, name) => {
  return (
    <IconComponent
      name={name}
      size={size}
      color={focused ? Colors.active : Colors.inactive}
    />
  );
};
 

  return (
   
     <Drawer.Navigator 
   
     drawerContent={(props)=>(
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} contentContainerStyle={{ paddingTop: 0 }}>
             
           
              <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                      <FontAwesome name="user-circle" color="#1fb1e2ff" size={120} />
                </View>

                <Text style={{fontSize:18,fontWeight:500,color:"white"}}>Test Meter Kumar</Text>
                <Text style={styles.consumerText}>Consumer ID : 4999806</Text>
       
                <TouchableOpacity style={styles.rechargeBtn}>
                  <Text style={styles.rechargeText}>Recharge</Text>
                </TouchableOpacity>
              </View>
       
             
              <View >
                 {/* <View style={styles.separator} /> */}
                <DrawerItemList {...props} />
                
        </View>
            </DrawerContentScrollView>
            
     )}
      drawerType="slide"
  
      screenOptions={{
        
        drawerActiveBackgroundColor: "#20243aff",
        drawerInactiveBackgroundColor: Colors.transparent,
        drawerActiveTintColor: Colors.active,
        drawerInactiveTintColor: Colors.inactive,
        drawerHideStatusBarOnOpen: Platform.OS === 'ios' ? true : false,
        overlayColor: Colors.transparent,
        
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '70%',
        },
      sceneStyle:{
         backgroundColor: Colors.bg,
      }
       
      }}>
       
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'home'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBlockColor:"#484646ff",borderWidth:0.5,borderRadius:0,}
        }}
      />
       <Drawer.Screen
        name="Live Data"
        component={LiveData}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'activity'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
       <Drawer.Screen
        name="Prepaid Consumption"
        component={Prepaid}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'credit-card'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
        <Drawer.Screen name="Consumption Log" component={LiveData} options={{drawerLabel:"Consumtion Log", swipeEnabled: false, 
         drawerIcon: options => drawerIcon(options,Entypo, 'bar-graph'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }}  listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); 
            setShowSubMenu(prev => !prev); 
          },}}/>
      <Drawer.Screen name="History" component={History} options={{
         drawerIcon: options => drawerIcon(options,Feather, 'percent'),headerShown:false, drawerItemStyle: showSubMenu
      ? {
          borderColor: "transparent",
          borderBottomColor: "#484646ff",
          borderWidth: 0.5,
          borderRadius: 0,
          left: 20,
        }
      : { display:'none' },
       }}/>
<Drawer.Screen name="Comparison" component={Comparision} options={{
         drawerIcon: options => drawerIcon(options, MaterialCommunityIcons,'circle-slice-2'),headerShown:false, drawerItemStyle: showSubMenu
      ? {
          borderColor: "transparent",
          borderBottomColor: "#484646ff",
          borderWidth: 0.5,
          borderRadius: 0,
          left: 20,
        }
      : { display:'none' },
       }}/>
        <Drawer.Screen
        name="Notification"
        component={Notifications}
 options={{
         drawerIcon: options => drawerIcon(options, Feather,'bell'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }}/>
        <Drawer.Screen
        name="Instructions"
        component={Instructionss}
 options={{
         drawerIcon: options => drawerIcon(options, Feather,'info'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }} />
       <Drawer.Screen
        name="DOs & DON'Ts"
        component={Dos}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'check-circle'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      />
    
      <Drawer.Screen
        name="Settings"
        component={Settinggs}
        options={{
          drawerIcon: options => drawerIcon(options,Feather, 'settings'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={Contact}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'at-sign'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
      <Drawer.Screen
        name="Logout"
        component={Logout}
 options={{
         drawerIcon: options => drawerIcon(options, Feather,'smartphone'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }}/>
     
     
    </Drawer.Navigator>
  );
};
 
export default DrawNav;
 
const Colors = {
  bg: "#262E41",
  active: '#eee',
  inactive: '#eee',
  transparent: 'transparent',
};
const styles = StyleSheet.create({
  profileContainer: {
 
    alignItems: 'center',
    paddingVertical: 30,
 
   
  },
  avatarContainer: {
    borderRadius: 60,
    marginBottom: 10,
    backgroundColor:"white"
  },
  consumerText: {
    color: '#ccc',
    fontSize: 15,
    marginBottom: 10,
  },
  rechargeBtn: {
    backgroundColor: "#6e9865ff",
   height:heightValue(25),
   width:widthValue(1.5),
    borderRadius: 25,
    alignItems:"center",justifyContent:"center"
  },
  rechargeText: {
 
    color: '#fff',
   
    fontSize:16
  },
    drawerItem: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 10,
    paddingLeft: 20,
  },
  subItem: {
    color: "#ccc",
    fontSize: 15,
    paddingVertical: 8,
  },
 
})
 