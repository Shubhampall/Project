import {Alert} from 'react-native';
import {url} from '../../utils/url';
import {HomePage} from './action';

export const apiData = (data) => {
  return (dispatch) => {
    return fetch(url + data)
      .then((res) => res.json())
      .then((json) => {
        dispatch(HomePage(json));
      })
      .catch((err) => Alert.alert('someThing is unwanted' + err));
  };
};
