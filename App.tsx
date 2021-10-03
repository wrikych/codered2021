import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://1000logos.net/wp-content/uploads/2020/09/ConocoPhillips-Logo.png"}} style={styles.logo} />
      <Text style={styles.instructions}>
       Welcome :P
      </Text> 

      <TouchableOpacity
        onPress={() => alert('Conoco Phillips!')}
        style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#457B9D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 10
  },
  instructions: {
    color: '#F1FAEE',
    fontSize: 18,
    marginHorizontal: 15,
    marginTop: -20,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#1D3557",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#F1FAEE'
  },
});
