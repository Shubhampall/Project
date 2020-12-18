import React from 'react';
import {View, Image, Text, Linking} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';

import {Logo} from '../../constant/images';
import {styles} from './Sytle';
const CustomSidebarMenu = (props) => {
  return (
    <View style={styles.f1}>
      <View style={styles.flexdirection}>
        <Image source={Logo} style={styles.sideMenuProfileIcon} />
        <Icon name="menu" size={40} style={styles.Icon} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Visit Us"
          onPress={() =>
            Linking.openURL(
              'https://demos.creative-tim.com/argon-react-native/',
            )
          }
        />
      </DrawerContentScrollView>
      <Text style={styles.Text}>www.Gemsessence.com</Text>
    </View>
  );
};

export default CustomSidebarMenu;
