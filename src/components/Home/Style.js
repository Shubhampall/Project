import {StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const styles = StyleSheet.create({
  Background: {
    flex: 1,
    backgroundColor: Color.White,
  },
  buttonView: {flexDirection: 'row', width: '100%'},
  middleText: {fontSize: 50, marginLeft: '10%', top: '01%'},
  scrollView: {
    width: '100%',
    paddingHorizontal: 5,
  },
  scroll: {
    marginVertical: 10,
  },
  map: {
    height: 120,
    marginTop: 5,
    alignItems: 'center',
  },
  Top10: {
    top: '10%',
  },
  shopping: {
    marginLeft: '10%',
    top: '10%',
  },

  backgroundBox: {
    backgroundColor: Color.White,
    width: '100%',
    alignItems: 'center',
    borderColor: Color.Black,
    borderWidth: 0,
    shadowColor: Color.Black,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    borderRadius: 5,
    elevation: 2,
  },

  searchBox: {
    width: '90%',
    flexDirection: 'row',
    borderColor: Color.Black,
    borderWidth: 0,
    shadowColor: Color.Black,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    borderRadius: 5,
    elevation: 2,
  },

  Search: {
    fontSize: 22,
    marginLeft: 110,
    marginTop: '10%',
  },
});
export default styles;
