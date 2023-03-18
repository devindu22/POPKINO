import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MoviePopup = ({movie, onClose}) => {
  return (
    <View style={styles.popupContainer}>
      <Image
        style={styles.popupImage}
        source={{uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}}
      />
      <Text style={styles.popupTitle}>{movie.title}</Text>
      <Text style={styles.popupOverview}>{movie.overview}</Text>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Ionicons name="close-circle" size={30} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const Home = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchMovies = async () => {
      const API_KEY = 'd4031ce868933f386cc8e02ed77c3ccb';
      const topRatedMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
      );
      const trendingMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`,
      );
      const popularMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      );
      const upcomingMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
      );

      setTopRatedMovies(topRatedMoviesResponse.data.results);
      setTrendingMovies(trendingMoviesResponse.data.results);
      setPopularMovies(popularMoviesResponse.data.results);
      setUpcomingMovies(upcomingMoviesResponse.data.results);
    };

    fetchMovies();
  }, []);

  const handleMoviePress = movie => {
    setSelectedMovie(movie);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedMovie(null);
  };

  return (
    <ScrollView style={styles.container}>
      <Modal visible={showPopup} animationType="slide">
        {selectedMovie && (
          <MoviePopup movie={selectedMovie} onClose={handleClosePopup} />
        )}
      </Modal>

      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>Top Rated</Text>
        <ScrollView horizontal>
          {topRatedMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie)}>
              <Image
                style={styles.carouselImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>Trending</Text>
        <ScrollView horizontal>
          {trendingMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie)}>
              <Image
                style={styles.carouselImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>Popular</Text>
        <ScrollView horizontal>
          {popularMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie)}>
              <Image
                style={styles.carouselImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.carouselContainer}>
        <Text style={styles.carouselTitle}>Upcoming</Text>
        <ScrollView horizontal>
          {upcomingMovies.map(movie => (
            <TouchableOpacity
              key={movie.id}
              onPress={() => handleMoviePress(movie)}>
              <Image
                style={styles.carouselImage}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                }}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 10,
  },
  carouselContainer: {
    marginVertical: 10,
  },
  carouselTitle: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  carouselImage: {
    width: 130,
    height: 200,
    marginRight: 10,
  },
  popupContainer: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  popupImage: {
    width: '100%',
    height: 525,
    marginBottom: 20,
  },
  popupTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  popupOverview: {
    color: 'grey',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 45,
    right: 30,
  },
});

export default Home;
