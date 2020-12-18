import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../Home/index';
import CustomSidebarMenu from './CustomSidebarMenu';
import Profile from '../Profile/index';

const Drawer = createDrawerNavigator();
const index = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      // Here we are setting our custom sidebar menu
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{drawerIcon: () => <Icon name="home" size={20} />}}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{drawerIcon: () => <Icon name="user" size={20} />}}
      />
    </Drawer.Navigator>
  );
};

export default index;
