import React from 'react';
import {Button, Image, ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {LoginBack, Mark} from '../../constant/images';
import {ice} from '../../constant/images';
import HeaderComponent from '../Layout/Header';
import {styles} from './style';

const Profile = ({navigation}) => {
  return (
    <ImageBackground source={LoginBack} style={styles.fullScreen}>
      <HeaderComponent name="Profile" navigation={navigation} />
      <View style={styles.FirstView}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.Upper}>
            <View style={styles.SecondUpper}>
              <Image source={Mark} style={styles.ImageContainer} />
            </View>
            <View style={styles.ButtonContainer}>
              <Button title="Connect" />
              <Button title="Message" color="black" />
            </View>
            <View style={styles.styleContainer}>
              <View style={styles.Frind}>
                <Text style={styles.Font30}>2K</Text>
                <Text style={styles.Font15}>Friend</Text>
              </View>
              <View style={styles.Frind}>
                <Text style={styles.Font30}>10</Text>
                <Text style={styles.Font15}>Photos</Text>
              </View>
              <View style={styles.Frind}>
                <Text style={styles.Font30}>89</Text>
                <Text style={styles.Font15}>Comments</Text>
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.contentUpper}>
                <Text style={styles.Name}>Mark Zuckerberg, 27</Text>
                <Text style={styles.TextFont}>San Francisco, USA</Text>
              </View>
            </View>
            <View style={styles.aboutUpper}>
              <View style={styles.about}>
                <Text style={styles.aboutText}>
                  Mark Elliot Zuckerberg is an American media magnate, internet
                  entrepreneur, and philanthropist. He is known for co-founding
                  Facebook, Inc.
                </Text>
              </View>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Show more</Text>
              </View>
              <Text style={[styles.View, styles.marginVertical]}>Album</Text>
              <Text style={[styles.View, styles.marginLeft]}>View All</Text>
              <View style={styles.maincontainer}>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
              </View>
              <View style={styles.maincontainer}>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
                <View style={styles.imagecontanor}>
                  <Image source={ice} style={{width: '100%', height: 90}} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Profile;
