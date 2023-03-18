import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const API_KEY = 'd4031ce868933f386cc8e02ed77c3ccb';

const MovieFile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`,
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelectMovie = movie => {
    navigation.navigate('MovieDetails', {movie});
  };

  const handleAddToWatchLater = movie => {
    navigation.navigate('WatchLaterList', {movie});
  };

  const renderMovie = ({item}) => {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => handleSelectMovie(item)}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Image
              style={{width: 100, height: 150}}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
            <Text style={{marginLeft: 10, fontSize: 16}}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, padding: 20}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 1,
          marginBottom: 10,
        }}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        placeholder="Search for movies"
      />
      <Button title="Search" onPress={handleSearch} />
      {movies.length > 0 && (
        <FlatList
          data={movies}
          renderItem={renderMovie}
          keyExtractor={item => item.id.toString()}
          style={{marginTop: 20}}
        />
      )}
    </SafeAreaView>
  );
};


export default MovieFile;
