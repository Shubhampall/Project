import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

import Home from '../Home/index';
import CustomSidebarMenu from './CustomSidebarMenu';
import Profile from '../Profile/index';
import {setAuthentication} from '../../store/Registration/action';

const Drawer = createDrawerNavigator();
const index = () => {
  const Logout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setAuthentication());
    }, [dispatch]);
    return <></>;
  };

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
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
      <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{drawerIcon: () => <Icons name="logout" size={20} />}}
      />
    </Drawer.Navigator>
  );
};

export default index;
