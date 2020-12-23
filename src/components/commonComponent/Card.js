import React from 'react';
import {Alert} from 'react-native';
import {Pressable} from 'react-native';
import {Image, Text, View} from 'react-native';

import styles from './Style';

const Card = ({item, pic}) => {
  return (
    <View style={styles.card}>
      <View style={styles.imagecontanor}>
        <Image source={pic} style={styles.horizontalImage} />
      </View>
      <View style={styles.View1}>
        <Text size={5} style={styles.Text1}>
          {item.id}
        </Text>
        <View style={styles.View2}>
          <Text size={12}>{item.title}</Text>
        </View>
        <Pressable onPress={() => Alert.alert(item.title)}>
          <Text size={14} style={styles.Text2}>
            'View article'
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Card;
