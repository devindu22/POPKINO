/* eslint-disable react/react-in-jsx-scope */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconHome} from '../assets/Icons/IconHome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CommonStyles from '../common/CommonStyles';
import WatchLaterList from '../screens/WatchLaterList';
import Home from '../screens/Home';
import MovieFile from '../screens/MovieFile';

const Tab = createBottomTabNavigator();

function MainTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'Which movie would you like to see?'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <IconHome fill={CommonStyles.colors.primary} />
            ) : (
              <IconHome fill={CommonStyles.colors.grey3} />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={MovieFile}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialIcons
                name="search"
                size={30}
                color={CommonStyles.colors.green}
              />
            ) : (
              <MaterialIcons
                name="search"
                size={30}
                color={CommonStyles.colors.grey3}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Watch Later'}
        component={WatchLaterList}
        options={{
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialIcons
                name="watch-later"
                size={30}
                color={CommonStyles.colors.red}
              />
            ) : (
              <MaterialIcons
                name="watch-later"
                size={30}
                color={CommonStyles.colors.grey3}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MainTabNavigation;
