import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CommonStyles from '../common/CommonStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WatchLaterList() {
  const [watchLaterList, setWatchLaterList] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('watchLaterList')
      .then(list => {
        const parsedList = JSON.parse(list) || [];
        setWatchLaterList(parsedList);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(
      'watchLaterList',
      JSON.stringify(watchLaterList),
    ).catch(error => console.error(error));
  }, [watchLaterList]);

  function handleRemoveMovie(id) {
    const updatedList = watchLaterList.filter(movie => movie.id !== id);
    setWatchLaterList(updatedList);
  }

  function addMovieToWatchLaterList(movie) {
    setWatchLaterList([...watchLaterList, movie]);
  }

  function renderItem({item}) {
    return (
      <>
        <View style={styles.itemContainer}>
          <TouchableOpacity>
            <Image
              style={styles.poster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
          </TouchableOpacity>
          <Text style={{marginLeft: -240, marginTop: -350, fontSize: 18}}>
            {item.title}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => handleRemoveMovie(item.id)}
          style={styles.remove}>
          <Ionicons
            name="close-circle-sharp"
            size={45}
            color="red"
            style={{marginLeft: 10, marginTop: -358}}
          />
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={watchLaterList}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString()}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>You haven't added any movies yet.</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 15,
  },
  poster: {
    width: 240,
    height: 360,
    resizeMode: 'cover',
    top: 20,
    marginTop: 10,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    color: CommonStyles.colors.black,
  },
  remove: {
    marginLeft: 8,
  },
  empty: {
    fontSize: 20,
    color: 'grey',
    alignSelf: 'center',
    marginVertical: 20,
  },
});
