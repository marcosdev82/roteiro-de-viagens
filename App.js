import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';

const statusBarHeight = StatusBar.StatusBarHeight

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor='#f1f1f1'/>
      <Text style={styles.heading}>Roteiros fácil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino</Text>
        <TextInput
          placeholder='Ex: Fortaleza, CE' 
          style={styles.input}
        />
        <Text>Tempo de estadia: <Text style={styles.days}>10</Text> dias</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54,
  },
  form: {
    backgroundColor: '#ffffff',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});
