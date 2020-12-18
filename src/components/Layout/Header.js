import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';
import Bell from 'react-native-vector-icons/FontAwesome';
import styles from './Style';

const HeaderComponent = (props) => {
  const {name, navigation} = props;
  console.log(navigation, props);
  const isHomeScreen = name === 'Home';
  const handleHeaderAction = () => {
    if (isHomeScreen) {
      navigation.openDrawer();
    } else {
      navigation.goBack();
    }
  };
  return (
    <View style={styles.Header}>
      <Pressable onPress={handleHeaderAction}>
        <Icons
          style={styles.headerIcon}
          name={isHomeScreen ? 'bars' : 'arrowleft'}
        />
      </Pressable>
      <Text style={styles.text}>{name}</Text>
      <View style={[styles.width10, styles.marginLeft50]}>
        <Pressable>
          <Bell style={styles.bell} name="bell" />
        </Pressable>
      </View>
      <View style={[styles.width10, styles.marginLeft5]}>
        <Pressable>
          <Bell style={styles.bell} name="shopping-bag" />
        </Pressable>
      </View>
    </View>
  );
};

export default HeaderComponent;
