import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.StatusBarHeight

export default function App() {

  const [city, setCity] = useState("");
  const [days, setDay] = useState(3)
  const [loading, setLoading] = useState(false);
  const [travel, setTravel] = useState();



  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent={true} backgroundColor='#f1f1f1'/>
      <Text style={styles.heading}>Roteiros fácil</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Cidade destino</Text>
        <TextInput
          placeholder='Ex: Fortaleza, CE' 
          style={styles.input}
          value={city}
          onChangeText={(text) => {setCity(text)}}        
        />
        <Text style={styles.label}>Tempo de estadia: <Text style={styles.days}>{days.toFixed(0)}</Text> dias</Text>
        <Slider
          minimumValue={1}
          maximumValue={7}
          minimumTrackTintColor="#009688"
          maximumTrackTintColor="#000000"
          value={days}
          onValueChange={(days) => setDay(days)}
        />
      </View>

      <Pressable style={styles.button} onPress={handleGenerate}>
        <Text style={styles.buttonText}>Gerar roteiro</Text>
        <MaterialIcons name="travel-explore" size={24} color="#fff"/>
      </Pressable>

      <ScrollView contentContainerStyle={{paddingBottom:24, marginTop: 24,}} style={styles.containerScroll} showsVerticalScrollIndicator>
      {loading && (
        <View style={styles.content}>
          <Text style={styles.title}>Carregando o roteiro...</Text>
          <ActivityIndicator color='#000' size='large' />
        </View>
      )}

      {travel && (
        <View style={styles.content}>
          <Text style={styles.title}>Roteiro da viagem</Text>
          <Text>{travel}</Text>
        </View>
      )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 54,
  },
  form: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#94a3b8',
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  days: {
    backgroundColor: '#f1f1f1',
  },
  button: {
    backgroundColor: '#FF5656',
    width: '90%',
    borderRadius: 8,
    padding: 14,
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: '#fff',
    padding:16,
    width: '100%',
    marginTop: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 14,
    textAlign: 'center',
  },
  containerScroll: {
    width: '90%',
    marginTop: 8,
  } 
});
