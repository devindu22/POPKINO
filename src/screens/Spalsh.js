import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import {Route} from '../common/Enums';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  //splash screen will be shown for 2.5 seconds
  React.useEffect(() => {
    setTimeout(async () => {
      const value = await AsyncStorage.getItem('USER');
      if (value !== null) {
        navigation.replace(Route.TAB_HOME);
      } else {
        navigation.replace(Route.WELCOME);
      }
    }, 2500);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.notText}>POPKINO</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CommonStyles.colors.primary,
  },
  notText: {
    alignItems: 'center',
    fontFamily: CommonStyles.fontFamily.bold,
    textShadowRadius: 20,
    textShadowColor: '#fff',
    fontSize: 60,
    color: CommonStyles.colors.red,
  },
  logo: {
    width: CommonStyles.width * 0.5,
    height: CommonStyles.width * 0.5,
  },
});

export default Splash;
