import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const MovieTrailerScreen = ({route}) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const apiKey = 'd4031ce868933f386cc8e02ed77c3ccb';
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${route.params.movieId}/videos?api_key=${apiKey}`,
        );
        const data = await response.json();
        const trailer = data.results.find(result => result.type === 'Trailer');
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrailer();
  }, [route.params.movieId]);

  if (!trailerKey) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <WebView
        source={{uri: `https://www.youtube.com/embed/${trailerKey}`}}
        style={{width: 380}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieTrailerScreen;
