import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { heightValue, widthValue } from '../../styles';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { Colors } from '../../Colors';

const Logout = ({ showLogoutModal, setShowLogoutModal }) => {
  const navigation = useNavigation();
  const dispatch=useDispatch();
     const darkMode = useSelector((state) => state?.darkMode?.darkMode);

  return (
    <Modal
      transparent
      visible={showLogoutModal}
      animationType="slide"
      onRequestClose={() => setShowLogoutModal(false)}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
    >
      <View style={[styles.overlay,{backgroundColor:darkMode?"rgba(40, 39, 39, 0.68)":Colors.transparent}]}>
        <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
          <Text style={[styles.alertTitle,{color:darkMode?Colors.white:Colors.black}]}>Alert</Text>
          <Text style={[styles.alertMsg,{color:darkMode?Colors.white:Colors.black}]}>Are you sure you want to logout?</Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={[styles.buttons, styles.cancelBtn]}
              onPress={() => setShowLogoutModal(false)}
            >
              <Text style={styles.cancelText}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttons, styles.confirmBtn]}
              onPress={() => {
                setShowLogoutModal(false);
                dispatch(logout())
                // AsyncStorage.removeItem("userToken");
navigation.reset({
  index: 0,
  routes: [{ name: "Login" }],
});
              }}
            >
              <Text style={styles.confirmText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Logout;



 
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
    backgroundColor: '#rgba(0,0,0,0.3)',
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
  buttons: {
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
  buttons: {
    paddingHorizontal:widthValue(6),
    paddingVertical:heightValue(80),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
});


