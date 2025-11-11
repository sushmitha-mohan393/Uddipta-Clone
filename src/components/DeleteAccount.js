import React,{useState,useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { heightValue, widthValue } from '../../styles';
import DeleteModal from "../components/DeleteModal"


const DeleteAccount = ({navigation,showAlert,setShowAlert}) => {
    
      const [loading, setLoading] = useState(false);
     const[secModal,setSecModal]=useState(false)
       const [buttonText, setButtonText] = useState("Delete");
      const handleLogout = () => {
        
        setLoading(true);
       
      
     
       setTimeout(() => {
        
      setLoading(false);
    setSecModal(true);
   
    
    }, 1500);}
       
        const handleOK=() => {
         setShowAlert(false);
         setSecModal(false);
       
         
          
       
        }
        
     

       useEffect(() => {
        setShowAlert(true);
      }, []);

  
  return (
   
    <View style={styles.container}>
 
     
           <Modal
          transparent
             visible={showAlert}
             animationType='fade'
             onRequestClose={() => setShowAlert(false)}
           >
 
     
      <View style={styles.overlay}>
      
          <View style={styles.alertBox}>
            <Text style={styles.alertTitle}>Are you sure you want to delete your account?</Text>
            
 
            <View style={styles.buttonRow}>
             
              <TouchableOpacity
                style={[styles.button, styles.cancelBtn]}
                onPress={() => {setShowAlert(false)}}
               
                
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
 
            
              <TouchableOpacity
                onPress={handleLogout}
            disabled={loading}
              onRequestClose={handleLogout}  
            
             style={[styles.button,styles.confirmBtn]}
              >
                {loading ? (
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 16, marginRight: 8 }}>
                      Loading
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
      {
      secModal&& 
        <View style={styles.container}> 
        <Modal
                 transparent
                         visible={showAlert}
                         animationType='fade'
                          onRequestClose={()=>setSecModal(false)}
                       >
             
                 <View style={styles.overlay}>
                  
                  
                      <View style={styles.alertBox}>
                        <Text style={styles.alertTitle}>We've sent an email to Raj.Kumar@esyasoft.com with a link to delete your account</Text>
                        
             
                        <View style={[styles.buttonRow,{justifyContent:"center"}]}>
                         
                         
             
                        
                          <TouchableOpacity
                            
                   
                           onPress={handleOK}
                        
                         style={[styles.button,styles.cancelBtn]}
                          >
                            
                              <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                              OK
                              </Text>
                        
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
            </View>
      }
     
    </View>
 
  );

}

export default DeleteAccount
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
 
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
   
    justifyContent:"center",
   flex:1,
    backgroundColor:"rgba(0,0,0,0.5)",padding:30
  },
  alertBox: {
    backgroundColor: 'white',
    alignSelf:"center",
    borderRadius:20,
    width:widthValue(1.2),
    height:heightValue(5),
   margin:"auto",
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation:5
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,textAlign:"center"
  },
  alertMsg: {
    fontSize: 15,
    color: '#333',
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
    marginTop:20
  },
  button: {
   width:widthValue(4),
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cancelBtn: {
   
    backgroundColor:"#31ac68ff",
    marginRight: 10,
  },
  confirmBtn: {
    backgroundColor: '#ef5b5bff',
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
  },
  confirmText: {
    color: '#fff',
    fontSize: 16,
  },
});