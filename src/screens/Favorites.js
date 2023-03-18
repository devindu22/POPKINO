import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import CommonStyles from '../common/CommonStyles';
import CustomModal from '../components/CustomModal';

import {useSelector, useDispatch} from 'react-redux';
import {addNote, removeNote, updateNote} from '../redux/noteSlice';

const Favorites = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);

  const noteData = useSelector(state => state.notes.noteData);
  const dispatch = useDispatch();

  const [selectedIndex, setSelectedItem] = useState(0);

  const renderFabButton = () => {
    return (
      <TouchableOpacity
        style={styles.fabButton}
        onPress={() => openNoteModal(null)}>
        <Icon name="tv" size={30} />
      </TouchableOpacity>
    );
  };

  const onSaveData = (type, title, description) => {
    setModalVisible(!modalVisible);

    const noteObject = {
      title,
      description,
    };

    if (type === 'ADD') {
      dispatch(addNote(noteObject));
    } else {
      const payload = {
        index: selectedIndex,
        noteObject,
      };
      dispatch(updateNote(payload));
    }
  };

  const NoteListItem = ({index, item}) => {
    return (
      <View style={styles.noteContainer}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => openNoteModal(item, index)}
            style={styles.btn}>
            <Icon name="ios-folder-outline" size={20} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => dispatch(removeNote(index))}>
            <Icon name="ios-remove-circle-sharp" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const openNoteModal = (item, index) => {
    setModalVisible(!modalVisible);
    setSelectedNote(item);
    setSelectedItem(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Note App</Text>
      <CustomModal
        data={selectedNote}
        visible={modalVisible}
        onSaveNote={onSaveData}
        onCancelNote={() => setModalVisible(!modalVisible)}
      />

      <FlatList data={noteData} renderItem={NoteListItem} />

      {renderFabButton()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CommonStyles.colors.grey1,
  },

  headerText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    fontFamily: CommonStyles.fontFamily.medium,
    marginVertical: 15,
    marginLeft: 10,
  },

  fabButton: {
    position: 'absolute',
    backgroundColor: '#2196',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    bottom: 25,
    right: 10,
    padding: 10,
  },

  noteContainer: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    width: 370,
    height: 150,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },

  row: {flexDirection: 'row'},

  btn: {
    padding: 8,
  },
});

export default Favorites;

