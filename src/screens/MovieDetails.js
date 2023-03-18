import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function MovieDetails({route}) {
  const {movie = {}} = route.params || {};
  const [isWatchLater, setIsWatchLater] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCastAndSimilarMovies = async () => {
      try {
        const castResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=d4031ce868933f386cc8e02ed77c3ccb`,
        );
        setCast(castResponse.data.cast.slice(0, 5));

        const similarMoviesResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=d4031ce868933f386cc8e02ed77c3ccb`,
        );
        setSimilarMovies(similarMoviesResponse.data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };

    fetchCastAndSimilarMovies();
  }, [movie.id]);

  function handleWatchLater() {
    setIsWatchLater(!isWatchLater);
    AsyncStorage.getItem('watchLaterList')
      .then(list => {
        const parsedList = JSON.parse(list) || [];
        const updatedList = isWatchLater
          ? parsedList.filter(m => m.id !== movie.id)
          : [...parsedList, movie];
        AsyncStorage.setItem(
          'watchLaterList',
          JSON.stringify(updatedList),
        ).then(() => {
          navigation.navigate('WatchLaterList');
        });
      })
      .catch(console.error);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.poster}
          source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}}
        />
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.rating}>{`Rating: ${movie.vote_average}`}</Text>
        <Text style={styles.genres}>
          {movie.genres
            ? `Genres: ${movie.genres.map(genre => genre.name).join(', ')}`
            : ''}
        </Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <TouchableOpacity onPress={handleWatchLater} style={styles.watchLater}>
          <Ionicons
            name={isWatchLater ? 'bookmark' : 'bookmark-outline'}
            size={40}
            style={{marginRight: 10, marginTop: 10}}
            color={isWatchLater ? 'red' : 'red'}
          />
        </TouchableOpacity>
        <View style={styles.castContainer}>
          <Text style={styles.castTitle}>Cast:</Text>
          <FlatList
            data={cast}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.castItem}>
                <Image
                  style={styles.castImage}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`,
                  }}
                />
                <Text style={styles.castName}>{item.name}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.similarMoviesContainer}>
          <Text style={styles.similarMoviesTitle}>Similar Movies:</Text>
          <FlatList
            data={similarMovies}
            horizontal
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.push('MovieDetails', {movie: item})}
                style={styles.similarMovieItem}>
                <Image
                  style={styles.similarMovieImage}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                />
                <Text style={styles.similarMovieTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  poster: {
    width: '100%',
    height: 520,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  genres: {
    fontSize: 16,
    marginBottom: 8,
  },
  overview: {
    fontSize: 16,
    marginBottom: 16,
  },
  watchLater: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  castContainer: {
    marginTop: 16,
    marginBottom: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  castTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  castItem: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  castImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40,
    marginBottom: 8,
  },
  castName: {
    fontSize: 16,
    textAlign: 'center',
  },
  similarMoviesContainer: {
    marginBottom: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
  similarMoviesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  similarMovieItem: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  similarMovieImage: {
    width: 150,
    height: 225,
    resizeMode: 'cover',
    borderRadius: 8,
    marginBottom: 8,
  },
  similarMovieTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});
