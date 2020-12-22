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
import JsonData from './JsonData';
import ButtonComponent from '../commonComponent/Button';
import {includes, isEmpty} from 'lodash';
import Color from '../../constant/Color';
import {Pressable} from 'react-native';

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
            return dispatchProps(setAuthentication());
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
            {JsonData.buttonData.map((items) => (
              <Pressable
                style={styles.pressable}
                key={items.id}
                onPress={() => Linking.openURL(items.url)}>
                <Icon name={items.icon} style={styles.margin10} size={30} />
                <Text style={styles.IconText}>{items.icon}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <Text style={styles.Top20}>Login with classic way</Text>
        {JsonData.data.map((items) => (
          <View style={styles.searchSection} key={items.id}>
            <View style={styles.ViewIcon}>
              <Icons name={items.icon} size={20} style={styles.padding5} />
            </View>
            <View style={styles.ViewInput}>
              <Inputcomponent
                placeholder={items.placeholder}
                show={items.show}
                handle={(text) => {
                  Dispatch(items.target, text);
                }}
              />
            </View>
          </View>
        ))}
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
