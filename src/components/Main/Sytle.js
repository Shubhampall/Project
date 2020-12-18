import {StyleSheet} from 'react-native';
import Color from '../../constant/Color';
export const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  f1: {flex: 1},
  flexdirection: {flexDirection: 'row'},
  Icon: {marginLeft: 130, marginTop: 30},
  Text: {
    fontSize: 16,
    textAlign: 'center',
    color: Color.Gray,
  },
});
