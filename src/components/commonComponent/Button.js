import React from 'react';
import {Button} from 'react-native';

const ButtonComponent = ({title, navigation, page = null, pass, handler}) => {
  return <Button title={title} color="#663399" onPress={handler} />;
};
export default ButtonComponent;
