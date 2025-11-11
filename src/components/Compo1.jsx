import { View, Text } from 'react-native';

 function Compo1({name}) {
  return (
    <View style={{padding:10}}>
      <Text>Hello, {name}</Text>
    </View>
  );
}
export default Compo1;
