import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { heightValue, widthValue } from '../../styles'

const DeleteModal = () => {
    const [showAlert, setShowAlert] = useState(false);
  return (
    <View ><Modal
                 visible={showAlert}
                 animationType='fade'
                 onRequestClose={() => setShowAlert(false)}
                   presentationStyle="overFullScreen"
      statusBarTranslucent={true}
               >
     
         
          
          
              <View style={styles.alertBox}>
                <Text style={styles.alertTitle}>We've sent an email to Raj.Kumar@esyasoft.com with a link to delete your account</Text>
                
     
                <View style={styles.buttonRow}>
                 
                 
     
                
                  <TouchableOpacity
                    
           
                    
                
                 style={[styles.button,styles.cancelBtn]}
                  >
                    
                      <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }}>
                      OK
                      </Text>
                
                  </TouchableOpacity>
                </View>
              </View>
            
          </Modal>
    </View>
  )
}

export default DeleteModal
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
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
    color: 'white',
    fontSize: 16,
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
  },
  alertTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,textAlign:"center"
  },
  alertMsg: {
    fontSize: 15,
    color: 'black',
    
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
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
    backgroundColor: '#d13e3eff',
  },
  cancelText: {
    color: 'white',
    fontSize: 16,
  },
  confirmText: {
    color: 'white',
    fontSize: 16,
  },
});