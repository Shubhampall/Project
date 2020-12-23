import {Alert} from 'react-native';
import {url} from '../../utils/url';
import {HomePage} from './action';

export const ApiData = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(url + data);
      const json = await res.json();
      dispatch(HomePage(json));
    } catch (err) {
      return Alert.alert('someThing is unwanted' + err);
    }
  };
};
