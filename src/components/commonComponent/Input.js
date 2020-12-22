import React, {useState} from 'react';

import {StyleSheet, View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Inputcomponent = ({placeholder, show = false, handle}) => {
  const [hidePass, setHidePass] = useState(show);
  return (
    <View style={styles.flex}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={hidePass}
        style={styles.input}
        onChangeText={(text) => handle(text)}
      />
      {placeholder === 'Enter Your Password' ? (
        <Icon
          name={hidePass ? 'eye-slash' : 'eye'}
          size={18}
          color="grey"
          style={styles.Icon}
          onPress={() => setHidePass(!hidePass)}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    width: '90%',
  },
  Icon: {marginTop: '07%', position: 'absolute', marginLeft: '80%'},
  //u
  flex: {flexDirection: 'row'},
});

export default Inputcomponent;
