import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Login from "./Login"
import { useNavigation } from '@react-navigation/native';
import DrawerSceneWrapper from '../../DrawerSceneWrapper';

export default function DashboardScreen() {
   const navigation=useNavigation();
  const [showAlert, setShowAlert] = useState(true);
  const [loading, setLoading] = useState(false);
   const [buttonText, setButtonText] = useState("Yes");
  const handleLogout = () => {
    setButtonText("Logging Out...");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowAlert(false);
      setButtonText("Yes");
      navigation.navigate("Login");
    }, 1500);
  };
   useEffect(() => {
    setShowAlert(true);
  }, [showAlert]);
 
  return (
     <DrawerSceneWrapper>
    <View style={styles.container}>
 
     
 
     
      <Modal
        transparent
        visible={showAlert}
        animationType="slide" 
        onRequestClose={() => setShowAlert(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Alert</Text>
            <Text style={styles.alertMsg}>
              Are you sure you want to logout?
            </Text>
 
            <View style={styles.buttonRow}>
             
              <TouchableOpacity
                style={[styles.button, styles.cancelBtn]}
                onPress={() => {setShowAlert(false),navigation.navigate("Dashboard")}}
                
              >
                <Text style={styles.cancelText}>No</Text>
              </TouchableOpacity>
 
            
              <TouchableOpacity
               
                onPress={handleLogout}
            disabled={loading}
             style={[styles.button,styles.confirmBtn]}
              >
                     {loading ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 16, marginRight: 8 }}>
                      Logging Out
                    </Text>
                    <ActivityIndicator color="white" />
                  </View>
                ) : (
                  <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                    {buttonText}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    </DrawerSceneWrapper>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoutBtn: {
    marginTop: 20,
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#rgba(0,0,0,0.2)',
  },
  alertBox: {
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  alertMsg: {
    fontSize: 15,
    color: '#333',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelBtn: {
    borderWidth: 1,
    borderColor: 'green',
    marginRight: 10,
  },
  confirmBtn: {
    backgroundColor: '#436b3bff',
  },
  cancelText: {
    color: 'green',
    fontSize: 16,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
});
 