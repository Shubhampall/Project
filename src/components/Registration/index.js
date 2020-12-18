import React, {useState} from 'react';
import {View, Text, ImageBackground, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsuser from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';
import {useDispatch} from 'react-redux';

import {LoginBack} from '../../constant/images';
import Inputcomponent from '../commonComponent/Input';
import ButtonComponent from '../commonComponent/Button';
import styles from './style';
import {setUserDetails} from '../../store/Registration/action';
import {includes, isEmpty} from 'lodash';
import Color from '../../constant/Color';

const Registration = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const dispatch = useDispatch();
  const [user, handleUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleUserDetails = (type, val) => {
    handleUser({
      ...user,
      [type]: val,
    });
  };

  const handleSignUp = () => {
    if (!isEmpty(user.name)) {
      if (!isEmpty(user.email)) {
        if (includes(user.email, '@') && includes(user.email, '.com')) {
          if (!isEmpty(user.password)) {
            dispatch(setUserDetails(user));
            navigation.navigate('Login');
          } else {
            Alert.alert('Please Enter Your Password');
          }
        } else {
          Alert.alert('Email is not correct Formate');
        }
      } else {
        Alert.alert('Please Enter Your Email');
      }
    } else {
      Alert.alert('Please Enter Your Name');
    }
  };
  return (
    <ImageBackground source={LoginBack} style={styles.image}>
      <View style={styles.demo} backgroundColor={Color.cream}>
        <View style={styles.signuppage}>
          <View>
            <Text style={styles.Textcolor} size={12}>
              Sign up with
            </Text>
          </View>
          <View style={styles.row}>
            <Icon.Button
              style={styles.button}
              backgroundColor={Color.White}
              onPress={() => Linking.openURL('https://github.com/')}>
              <Icon name="github" size={30} />
              <Text style={styles.IconText}>Github</Text>
            </Icon.Button>
            <Text style={styles.margin20} />
            <Icon.Button
              style={styles.button}
              backgroundColor={Color.White}
              onPress={() => Linking.openURL('https://gmail.com/')}>
              <Icon name="google" size={34} style={styles.margin10} />
              <Text style={styles.IconText}>Google</Text>
            </Icon.Button>
          </View>
        </View>
        <Text style={styles.Textsing} size={12}>
          or sign with classic way
        </Text>
        <View style={styles.searchSection}>
          <View style={styles.ViewIcon}>
            <Iconsuser name="user" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Name"
              handle={(text) => {
                handleUserDetails('name', text);
              }}
            />
          </View>
        </View>
        <View style={[styles.searchSection, styles.marginTop5]}>
          <View style={styles.ViewIcon}>
            <Icons name="email" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Email"
              handle={(text) => {
                handleUserDetails('email', text);
              }}
            />
          </View>
        </View>
        <View style={[styles.searchSection, styles.marginTop5]}>
          <View style={styles.ViewIcon}>
            <Icons name="onepassword" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Password"
              show={true}
              handle={(text) => {
                handleUserDetails('password', text);
              }}
            />
          </View>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            borderColor="#663399"
            style={styles.checkBox}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.Top3}>i agree with the </Text>
          <Text style={styles.colorTop}>Privcy Policy</Text>
        </View>
        <View style={styles.Buttocomponet}>
          <ButtonComponent
            title="Sign out "
            navigation={navigation}
            page="Login"
            handler={handleSignUp}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Registration;
