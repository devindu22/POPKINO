import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Route} from '../common/Enums';
import MainTabNavigation from './MainTabNavigation';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator initialRouteName={Route.WELCOME}>
      <Drawer.Screen name={Route.TAB_HOME} component={MainTabNavigation} />
    </Drawer.Navigator>
  );
}
