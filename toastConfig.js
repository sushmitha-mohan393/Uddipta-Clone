import { BaseToast, ErrorToast } from 'react-native-toast-message';
import { heightValue } from './styles';

const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      text1NumberOfLines={2} 
      text2NumberOfLines={2} 
      style={{
        borderLeftColor: '#4CAF50',
        backgroundColor: '#1E2A38',
        height:heightValue(12)
      }}
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
         marginVertical:5
      }}
      text2Style={{
        fontSize: 12,
        color: '#D1D5DB',
        marginVertical:5
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      style={{
        borderLeftColor: '#E53935',
        backgroundColor: '#1E2A38',
        height:heightValue(13)
      }}
      contentContainerStyle={{
        paddingHorizontal: 10,
       
     
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FF6B6B',
        marginVertical:10
      }}
      text2Style={{
        fontSize: 12,
        color: '#E5E7EB',
        marginVertical:5
      }}
    />
  ),
};

export default toastConfig;
