import {StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: 60,
    backgroundColor: Color.White,
    alignItems: 'center',
    paddingLeft: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
  },
  headerIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  bell: {fontSize: 23, width: '100%'},
  width10: {width: '10%'},
  marginLeft5: {marginLeft: '5%'},
  marginLeft50: {marginLeft: '50%'},
});
export default styles;
