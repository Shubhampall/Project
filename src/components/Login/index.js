import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Linking,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import {useSelector, useDispatch} from 'react-redux';
import {setAuthentication} from '../../store/Registration/action';
import {styles} from './Style';
import {LoginBack} from '../../constant/images';
import Inputcomponent from '../commonComponent/Input';
import ButtonComponent from '../commonComponent/Button';
import {includes, isEmpty} from 'lodash';
import Color from '../../constant/Color';
const Login = ({navigation}) => {
  const Registrationstate = useSelector((state) => state.Registration);
  const dispatchProps = useDispatch();
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });

  const Dispatch = (type, val) => {
    setUserLogin({
      ...userLogin,
      [type]: val,
    });
  };
  const Checker = () => {
    if (!isEmpty(userLogin.email)) {
      if (!isEmpty(userLogin.password)) {
        if (
          includes(userLogin.email, '@') &&
          includes(userLogin.email, '.com')
        ) {
          if (
            userLogin.email === Registrationstate.userData.email &&
            userLogin.password === Registrationstate.userData.password
          ) {
            dispatchProps(setAuthentication());
            return navigation.navigate('Main');
          } else {
            Alert.alert('Invalid Email and Password');
          }
        } else {
          Alert.alert('Email is not valid Formate');
        }
      } else {
        Alert.alert('Please Enter Password');
      }
    } else {
      Alert.alert('Please Enter Email');
    }
  };
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ImageBackground source={LoginBack} style={styles.image}>
      <View style={styles.demo} backgroundColor={Color.cream}>
        <View style={styles.signuppage}>
          <Text style={styles.Textcolor} size={12}>
            Login with
          </Text>
          <View style={styles.Icon}>
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                onPress={() => Linking.openURL('https://github.com/')}>
                <Icon name="github" size={30} />
                <Text style={styles.IconButton}>Github</Text>
              </Icon.Button>
            </View>
            <Text style={styles.marginLeft20} />
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                backgroundColor="#FFFFFF"
                onPress={() => Linking.openURL('https://gmail.com/')}>
                <Icon name="google" size={34} style={styles.marginLeft} />
                <Text style={styles.IconButton}>Google</Text>
              </Icon.Button>
            </View>
          </View>
        </View>
        <Text style={styles.Top20}>Login with classic way</Text>
        <View style={styles.searchSection}>
          <View style={styles.ViewIcon}>
            <Icons name="email" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Email"
              keybordtype="email"
              handle={(text) => {
                Dispatch('email', text);
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
                Dispatch('password', text);
              }}
            />
          </View>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            borderColor="#663399"
            style={styles.check}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.Top3}>Keep Me Remember</Text>
        </View>
        <TouchableOpacity
          style={styles.Top30}
          onPress={() => navigation.navigate('Registration')}>
          <Text style={{color: Color.Blue}}> Registration</Text>
        </TouchableOpacity>
        <View style={styles.buttonComponent}>
          <ButtonComponent
            title="Login"
            navigation={navigation}
            page="Main"
            handler={Checker}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
