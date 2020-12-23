import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator, Alert, Pressable} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import Diamond from 'react-native-vector-icons/MaterialCommunityIcons';
import Fashion from 'react-native-vector-icons/Fontisto';
import {isEmpty} from 'lodash';
import Skeleton from 'react-native-skeleton-placeholder';
import {useDispatch, useSelector} from 'react-redux';

import HeaderComponent from '../Layout/Header';
import Inputcomponent from '../commonComponent/Input';
import {ice} from '../../constant/images';
import Card from '../commonComponent/Card';
import styles from './Style';
import {ApiData} from '../../store/Home/operation';

const Home = ({navigation}) => {
  const SkeletopLoder = () => {
    const json = [1, 2, 3, 4, 5, 6, 7];
    return (
      <Skeleton>
        {json.map((items, index) => (
          <View key={index} style={styles.map} />
        ))}
      </Skeleton>
    );
  };
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const dispatchData = (value) => {
    setData(value);
  };
  useEffect(() => {
    dispatch(ApiData('/posts'));
  }, [dispatch]);
  const homeData = useSelector((state) => state.Home);
  useEffect(() => {
    dispatchData(homeData.json.homeData);
  }, [homeData.json.homeData]);

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
            <Pressable
              style={styles.Pressable}
              onPress={() => Alert.alert('Empty')}>
              <Diamond name="diamond" size={40} />
              <Text style={styles.alignSelf}> Beauty</Text>
            </Pressable>
            <Text style={styles.middleText}>|</Text>
            <Pressable
              style={styles.Pressable}
              onPress={() => Alert.alert('Empty')}>
              <Fashion name="shopping-bag" size={40} />
              <Text style={styles.alignSelf}> Fashion</Text>
            </Pressable>
          </View>
        </View>
      </View>
      {isEmpty(data) ? (
        <SkeletopLoder />
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={data}
          renderItem={({item}) => (
            <View style={styles.map}>
              <Card item={item} pic={ice} />
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Home;
