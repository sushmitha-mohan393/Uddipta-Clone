import React, { useState, useEffect } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import Dashboard from './src/screens/Dashboard';

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
import Logout from "./src/screens/Logout";
import History from "./src/screens/History"
import Instructionss from './src/screens/Instructionss';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Nav from './Nav';
import DrawerSceneWrapper from './DrawerSceneWrapper';

 
const DrawNav= () => {
  const navigation = useNavigation();
  const EmptyScreen = () => null;
  const[showModal,setShowModal]=useState(false);
  const[openLogout,setOpenLogout]=useState(false);
   const loginResponse = useSelector((state) => state?.auth?.loginResponse)
   const [showSubMenu, setShowSubMenu] = useState(false);
   const withDrawerWrapper = (ScreenComponent) => (props) => (
  <DrawerSceneWrapper>
    <ScreenComponent {...props} />
  </DrawerSceneWrapper>
);

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
 <>
     <Drawer.Navigator 
   
     drawerContent={(props)=>(
      <DrawerContentScrollView showsVerticalScrollIndicator={false} {...props} contentContainerStyle={{ paddingTop: 0 }}>
             
           
              <View style={styles.profileContainer}>
                <View style={styles.avatarContainer}>
                      <FontAwesome name="user-circle" color="#1fb1e2ff" size={heightValue(7.5)} />
                </View>

                <Text style={{fontSize:heightValue(45),fontWeight:500,color:"white"}}>{loginResponse?.name}</Text>
                <Text style={styles.consumerText}>Consumer ID : {loginResponse?.consumerId}</Text>
       
                <TouchableOpacity style={styles.rechargeBtn}>
                  <Text style={styles.rechargeText}>Recharge</Text>
                </TouchableOpacity>
              </View>
       
             
              <View >
                 <View style={styles.separator} />
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
      
        overlayColor: Colors.transparent,
        drawerLabelStyle:{fontSize:heightValue(58)},
      
        drawerStyle: {
          backgroundColor: Colors.bg,
          width: '68%',
        },
      sceneStyle:{
         backgroundColor: Colors.bg,
      }


       
      }}>
       
      <Drawer.Screen
  name="Dashboard"
  options={{
    drawerIcon: options =>
      drawerIcon(options, Feather, 'home'),
    headerShown: false,
    drawerItemStyle: {
      borderColor: "transparent",
      borderBlockColor: "#484646ff",
      borderWidth: 0.5,
      borderRadius: 0,
    }
  }}
>
  {props =>
    withDrawerWrapper(Dashboard)({
      ...props,
      openLogout,
      setOpenLogout,
    })
  }
</Drawer.Screen>

       <Drawer.Screen
        name="Live Data"
         component={withDrawerWrapper(LiveData)}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'activity'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
       <Drawer.Screen
        name="Prepaid Consumption"
  component={withDrawerWrapper(Prepaid)}     
     options={{
          drawerIcon: options => drawerIcon(options, Feather,'credit-card'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
        <Drawer.Screen name="Consumption Log"   component={withDrawerWrapper(LiveData)}options={{drawerLabel:"Consumtion Log", swipeEnabled: false, 
         drawerIcon: options => drawerIcon(options,Entypo, 'bar-graph'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }}  listeners={{
          drawerItemPress: (e) => {
            e.preventDefault(); 
            setShowSubMenu(prev => !prev); 
          },}}/>
      <Drawer.Screen name="History"   component={withDrawerWrapper(History)} options={{
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
<Drawer.Screen name="Comparison"  component={withDrawerWrapper(Comparision)} options={{
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
         component={withDrawerWrapper(Notifications)}
 options={{
         drawerIcon: options => drawerIcon(options, Feather,'bell'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }}/>
        <Drawer.Screen
        name="Instructions"
         component={withDrawerWrapper(Instructionss)}
 options={{
         drawerIcon: options => drawerIcon(options, Feather,'info'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
       }} />
       <Drawer.Screen
        name="DOs & DON'Ts"
         component={withDrawerWrapper(Dos)}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'check-circle'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      />
    
      <Drawer.Screen
        name="Settings"
         component={withDrawerWrapper(Settinggs)}
        options={{
          drawerIcon: options => drawerIcon(options,Feather, 'settings'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      />
      <Drawer.Screen
        name="Contact Us"
          component={withDrawerWrapper(Contact)}
        options={{
          drawerIcon: options => drawerIcon(options, Feather,'at-sign'),headerShown:false,drawerItemStyle:{borderColor:"transparent",borderBottomColor:"#484646ff",borderWidth:0.5,borderRadius:0}
        }}
      /> 
     <Drawer.Screen
  name="Logout"
  component={EmptyScreen}
  options={{
    drawerIcon: options =>
      drawerIcon(options, Feather, 'smartphone'),
    headerShown: false,
    drawerItemStyle: {
      borderColor: "transparent",
      borderBottomColor:"#484646ff",
      borderWidth: 0.5,
      borderRadius: 0
    }
  }}
listeners={({ navigation }) => ({
    drawerItemPress: (e) => {
      e.preventDefault(); 
     navigation.closeDrawer();
      navigation.navigate("Dashboard", {
   openLogout:true
    })
  }
  })}
/>

      
    
    </Drawer.Navigator>

 </>
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
    fontSize: heightValue(58),
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
   
    fontSize:heightValue(55)
  }, 
})

 
 