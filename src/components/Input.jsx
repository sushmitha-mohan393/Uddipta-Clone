import React, { useState } from 'react';
import { StyleSheet,View,TextInput, Text, StatusBar,Switch } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const[isDarkMode,setIsDarkMode]=useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>My name is {name}</Text>
          <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(previousState => !previousState)}
          trackColor={{ false: "black", true: "blue" }}
          thumbColor="grey"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    paddingTop: StatusBar.currentHeight,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    fontSize: 30,
    padding: 10,
  },
});