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
import { useSelector } from 'react-redux';
import { Colors } from '../../Colors';


const DeleteAccount = ({navigation,showAlert,setShowAlert}) => {
      const darkMode = useSelector((state) => state?.darkMode?.darkMode);
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
               presentationStyle="overFullScreen"
      statusBarTranslucent={true}
           >
 
     
      <View style={[styles.overlay,{backgroundColor:darkMode?"rgba(40, 39, 39, 0.68)":Colors.transparent}]}>
      
          <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
            <Text style={[styles.alertTitle,{color:darkMode?Colors.white:Colors.black}]}>Are you sure you want to delete your account?</Text>
            
 
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
                    <Text style={{ color: "white", fontSize: heightValue(55), marginRight: 8 }}>
                      Loading
                    </Text>
                    <ActivityIndicator color="white" />
                  </View>
               ) : (
                  <Text style={{ color: "white", fontSize: heightValue(55), fontWeight: "600" }}>
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
                            presentationStyle="overFullScreen"
      statusBarTranslucent={true}
                       >
             
                 <View style={[styles.overlay,{backgroundColor:darkMode?"rgba(40, 39, 39, 0.68)":Colors.transparent}]}>
                  
                  
                      <View style={[styles.alertBox,{backgroundColor:darkMode?Colors.darkbg:Colors.white}]}>
                        <Text style={[styles.alertTitle,{color:darkMode?Colors.white:Colors.black}]}>We've sent an email to Raj.Kumar@esyasoft.com with a link to delete your account</Text>
                        
             
                        <View style={[styles.buttonRow,{justifyContent:"center"}]}>
                         
                         
             
                        
                          <TouchableOpacity
                            
                   
                           onPress={handleOK}
                        
                         style={[styles.button,styles.cancelBtn]}
                          >
                            
                              <Text style={{ color: "white", fontSize: heightValue(50), fontWeight: "600" }}>
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
   
   margin:"auto",
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation:5
  },
  alertTitle: {
    fontSize: heightValue(42),
    fontWeight: '600',
    marginBottom:heightValue(90),textAlign:"center"
  },
  alertMsg: {
    fontSize: 15,
    color: 'black',
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    
    marginTop:10
  },
  button: {
   paddingHorizontal:widthValue(20),
    paddingVertical:heightValue(60),
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
    fontSize: heightValue(55),
  },
  confirmText: {
    color: 'white',
    fontSize: heightValue(55),
  },
});