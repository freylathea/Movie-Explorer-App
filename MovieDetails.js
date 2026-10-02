import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MovieDetails({ route, navigation }) {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.name}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Release Year</Text>
        <Text style={styles.value}>{movie.year}</Text>

        <Text style={styles.label}>Genre</Text>
        <Text style={styles.value}>{movie.genre}</Text>

        <Text style={styles.label}>Description</Text>
        <Text style={styles.description}>{movie.description}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Back to Movies</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
    padding: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 25,
  },

  infoBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#777',
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    color: '#222',
    marginTop: 5,
  },

  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
    marginTop: 5,
  },

  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 25,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});