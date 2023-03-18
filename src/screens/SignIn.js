import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import CommonStyles from '../common/CommonStyles';
import Assets from '../assets/index';
import {ActionButton} from '../components/ActionButton';
import {Route} from '../common/Enums';
import {CustomTextInput} from '../components/CustomTextInput';
import {LoginButtonGroup} from '../components/LoginButtonGroup';
import {IconEye} from '../assets/Icons/IconEye';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPW, setShowPW] = React.useState(false);

  const showPassword = () => {
    setShowPW(!showPW);
  };

  const getData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('USER'));
      if (value?.email === email && value?.password === password) {
        navigation.navigate(Route.TAB_HOME);
      } else {
        console.log('Invalid Credentials');
      }
    } catch (e) {
      // error reading value
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.loginText}>Log In</Text>
      <Text style={styles.text1}>Email</Text>
      <CustomTextInput title={'E-mail'} onChangeText={setEmail} value={email} />

      <Text style={styles.text2}>Password</Text>
      <CustomTextInput
        title={'Password'}
        onChangeText={setPassword}
        value={password}
        secureTextEntry={!showPW}
        onShowPasswordPress={showPassword}
        icon={
          <IconEye
            fill={showPW ? CommonStyles.colors.red : CommonStyles.colors.grey2}
          />
        }
      />

      <ActionButton
        title={'SIGN IN'}
        onPressBtn={() => getData()}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <View style={styles.deviderContainer}>
        <View style={styles.devider} />
        <Text style={styles.deviderText}>{'   Sign in with   '}</Text>
        <View style={styles.devider} />
      </View>

      <LoginButtonGroup />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    position: 'absolute',
    height: CommonStyles.height,
    width: CommonStyles.width,
  },
  loginText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.red,
    textShadowRadius: 20,
    textShadowColor: '#fff',
    fontSize: 35,
    left: -115,
    top: -40,
  },
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 60,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
    marginTop: 40,
  },
  text1: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 16,
    color: CommonStyles.colors.white,
    top: 15,
    left: -145,
  },
  text2: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 16,
    color: CommonStyles.colors.white,
    top: 20,
    left: -125,
  },
  btnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.red,
    fontSize: 15,
  },
  devider: {
    height: 1,
    backgroundColor: CommonStyles.colors.white,
    width: CommonStyles.width * 0.25,
  },
  deviderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 40,
  },
  deviderText: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },
});

export default Signin;
