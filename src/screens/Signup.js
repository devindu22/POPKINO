import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
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

const Signup = ({navigation}) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [showPW, setShowPW] = React.useState(false);

  const showPassword = () => {
    setShowPW(!showPW);
  };

  const storeData = async () => {
    try {
      let userData = {
        fullName: fullName,
        email: email,
        password: password,
      };
      const userObject = JSON.stringify(userData);
      await AsyncStorage.setItem('USER', userObject);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Assets.background}
        resizeMode="cover"
        style={styles.image}
      />
      <Text style={styles.signText}>Sign Up</Text>
      <Text style={styles.text1}>Full Name</Text>
      <CustomTextInput
        title={'Full Name'}
        onChangeText={setFullName}
        value={fullName}
      />

      <Text style={styles.text2}>Email</Text>
      <CustomTextInput
        title={'E-mail'}
        onChangeText={setEmail}
        keyboardType={email}
        value={email}
      />

      <Text style={styles.text3}>Password</Text>
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
        title={'SIGN UP'}
        onPressBtn={() => storeData()}
        customStyle={styles.btnStyle}
        customTextStyle={styles.btnText}
      />

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText1}>Already have an account? </Text>
        <ActionButton
          title={'login'}
          onPressBtn={() => navigation.navigate(Route.SIGNIN)}
          customTextStyle={[
            styles.footerText2,
            {textDecorationLine: 'underline'},
          ]}
        />
      </View>
      <View style={styles.deviderContainer}>
        <View style={styles.devider} />
        <Text style={styles.deviderText}>{'  Or  '}</Text>
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
  btnStyle: {
    backgroundColor: CommonStyles.colors.primary,
    height: 60,
    width: CommonStyles.width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28.5,
    marginTop: 20,
  },
  signText: {
    fontFamily: CommonStyles.fontFamily.bold,
    color: CommonStyles.colors.red,
    textShadowRadius: 20,
    textShadowColor: '#fff',
    fontSize: 35,
    left: -100,
    top: 15,
  },
  loginText: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.red,
  },
  btnText: {
    fontFamily: CommonStyles.fontFamily.medium,
    color: CommonStyles.colors.red,
    fontSize: 15,
  },
  text1: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 16,
    color: CommonStyles.colors.white,
    top: 25,
    left: -125,
    textShadowRadius: 20,
  },
  text2: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 16,
    color: CommonStyles.colors.white,
    top: 25,
    left: -140,
    textShadowRadius: 20,
  },
  text3: {
    fontFamily: CommonStyles.fontFamily.bold,
    fontSize: 16,
    color: CommonStyles.colors.white,
    top: 25,
    left: -125,
    textShadowRadius: 20,
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
    marginTop: 0,
  },
  deviderText: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },
  footerTextContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  footerText1: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.white,
  },
  footerText2: {
    fontFamily: CommonStyles.fontFamily.medium,
    fontSize: 16,
    color: CommonStyles.colors.red,
    textShadowRadius: 20,
    textShadowColor: 'red',
  },
});

export default Signup;
