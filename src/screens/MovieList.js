import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const apiKey = 'd4031ce868933f386cc8e02ed77c3ccb';
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`,
      );
      const data = await response.json();
      setMovies(prevMovies => [...prevMovies, ...data.results]);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleMorePress = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderMovie = ({item}) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    const rating = item.vote_average / 2; // The rating is out of 10, but we want to display it out of 5 stars.

    return (
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
        <Image
          source={{uri: imageUrl}}
          style={{width: 80, height: 120, marginRight: 16}}
        />

        <View style={{flex: 1}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 8}}>
            {item.title}
          </Text>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="star"
              size={18}
              color="#FFD700"
              style={{marginRight: 8}}
            />

            {[...Array(5)].map((_, index) => (
              <Icon
                key={index}
                name="star"
                size={18}
                color={index + 1 <= rating ? '#FFD700' : '#EEE'}
              />
            ))}

            <Text style={{marginLeft: 8}}>{rating.toFixed(1)}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovie}
        onEndReached={handleMorePress}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          currentPage < totalPages ? (
            <TouchableOpacity style={{alignItems: 'center', marginTop: 16}}>
              <Text style={{color: 'red', fontSize: 18}}>Load More</Text>
            </TouchableOpacity>
          ) : null
        }
      />
    </View>
  );
};

export default MovieList;
