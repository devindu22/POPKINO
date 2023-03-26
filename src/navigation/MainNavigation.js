import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../common/Enums';
import Splash from '../screens/Spalsh';
import Signup from '../screens/Signup';
import MainTabNavigation from './MainTabNavigation';
import Welcome from '../screens/Welcome';
import Signin from '../screens/SignIn';
import Favorites from '../screens/Favorites';
import MovieFile from '../screens/MovieFile';
import Information from '../screens/Information';
import MovieDetails from '../screens/MovieDetails';
import WatchLaterList from '../screens/WatchLaterList';
import MovieList from '../screens/MovieList';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Route.SPLASH}>
        <Stack.Screen
          name={Route.SPLASH}
          component={Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.WELCOME}
          component={Welcome}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.SIGNIN}
          component={Signin}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.SIGNUP}
          component={Signup}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.TAB_HOME}
          component={MainTabNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name={Route.FAVORITES}
          component={Favorites}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MovieFile" component={MovieFile} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
        <Stack.Screen name="WatchLaterList" component={WatchLaterList} />
        <Stack.Screen name="Information" component={Information} />
        <Stack.Screen name="MovieList" component={MovieList} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
