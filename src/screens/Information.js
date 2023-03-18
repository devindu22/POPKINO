import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

const Information = ({movie, visible, onClose}) => {
  if (!visible) {
    return null;
  }

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Image
          style={styles.poster}
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        />

        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>

        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '70%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  poster: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  overview: {
    fontSize: 18,
    marginBottom: 20,
  },

  closeButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 20,
  },

  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Information;
