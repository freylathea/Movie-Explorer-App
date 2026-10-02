import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const movies = [
  {
    id: 1,
    name: 'Interstellar',
    year: '2014',
    genre: 'Science Fiction',
    description:
      'A group of explorers travel through space to search for a new home for humanity.',
  },
  {
    id: 2,
    name: 'The Incredibles',
    year: '2004',
    genre: 'Animation',
    description:
      'A family of superheroes tries to balance their normal life while fighting crime.',
  },
  {
    id: 3,
    name: 'Spider-Man: Into the Spider-Verse',
    year: '2018',
    genre: 'Animation / Action',
    description:
      'Miles Morales becomes Spider-Man and meets other Spider-People from different dimensions.',
  },
  {
    id: 4,
    name: 'How to Train Your Dragon',
    year: '2010',
    genre: 'Fantasy / Adventure',
    description:
      'A young Viking becomes friends with a dragon and changes the way his village sees dragons.',
  },
];

export default function MovieList({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Movie Catalog</Text>

      {movies.map((movie) => (
        <TouchableOpacity
          key={movie.id}
          style={styles.movieCard}
          onPress={() =>
            navigation.navigate('Movie Details', {
              movie: movie,
            })
          }
        >
          <Text style={styles.movieName}>{movie.name}</Text>
          <Text style={styles.movieInfo}>
            {movie.year} • {movie.genre}
          </Text>

          <Text style={styles.viewText}>View Details →</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5FF',
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6C63FF',
    marginBottom: 20,
  },

  movieCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 3,
  },

  movieName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },

  movieInfo: {
    fontSize: 15,
    color: '#666',
    marginBottom: 12,
  },

  viewText: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  backButton: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});