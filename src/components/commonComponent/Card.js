import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './Style';

const Card = ({item, pic, index}) => {
  return (
    <View key={index} style={styles.card}>
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
        <Text size={14} style={styles.Text2}>
          'View article'
        </Text>
      </View>
    </View>
  );
};

export default Card;
