import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Movie Explorer</Text>

      <Text style={styles.description}>
        Welcome to Movie Explorer! Browse movies and view their details.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Movies')}
      >
        <Text style={styles.buttonText}>Browse Movies</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F5F5FF',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 15,
  },

  description: {
    fontSize: 17,
    textAlign: 'center',
    color: '#555',
    marginBottom: 30,
    lineHeight: 25,
  },

  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});