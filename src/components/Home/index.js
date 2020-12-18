import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator, Alert, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Diamond from 'react-native-vector-icons/MaterialCommunityIcons';
import Fashion from 'react-native-vector-icons/Fontisto';

import HeaderComponent from '../Layout/Header';
import Inputcomponent from '../commonComponent/Input';
import {ice} from '../../constant/images';
import Card from '../commonComponent/Card';
import {url} from '../../utils/url';
import styles from './Style';
import Color from '../../constant/Color';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${url}posts`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.Background}>
      <HeaderComponent name="Home" navigation={navigation} />
      <View style={styles.backgroundBox}>
        <View style={styles.searchBox}>
          <Inputcomponent
            placeholder="What are you looking for?"
            handle={(text) => {
              console.log(text);
            }}
          />
          <Pressable>
            <Icon name="search1" style={styles.Search} />
          </Pressable>
        </View>
        <View>
          <View style={styles.buttonView}>
            <Icon.Button backgroundColor="#FFFFFF" style={styles.Top10}>
              <Diamond name="diamond" size={40} />
              <Text> Beauty</Text>
            </Icon.Button>
            <Text style={styles.middleText}>|</Text>
            <Icon.Button backgroundColor="#FFFFFF" style={styles.shopping}>
              <Fashion name="shopping-bag" size={40} />
              <Text> Fashion</Text>
            </Icon.Button>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scroll}>
        {isLoading ? (
          <ActivityIndicator size="large" color={Color.Blue} />
        ) : (
          data.map((item, index) => {
            return (
              <View key={index} style={styles.map}>
                <Card item={item} pic={ice} index={index} />
              </View>
            );
          })
        )}
      </ScrollView>
    </View>
  );
};
export default Home;
