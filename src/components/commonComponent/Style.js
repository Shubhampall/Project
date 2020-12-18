import {StyleSheet} from 'react-native';
import Color from '../../constant/Color';

const styles = StyleSheet.create({
  horizontalImage: {
    width: 'auto',
    height: '100%',
    borderRadius: 6,
  },
  imagecontanor: {
    borderRadius: 6,
    elevation: 1,
    overflow: 'hidden',
    width: '40%',
  },
  card: {
    borderColor: Color.Black,
    borderWidth: 0.1,
    height: '100%',
    borderTopColor: Color.White,
    backgroundColor: Color.White,
    right: '20%',
    shadowColor: Color.Black,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 1,
    width: '97%',
    left: '0%',
    marginTop: '0%',
    padding: '0.5%',
    borderRadius: 5,
    flexDirection: 'row',
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 6,
    marginBottom: '10%',
    backgroundColor: 'black',
    height: '20%',
  },
  View1: {width: '55%', marginLeft: '3%'},
  Text1: {width: '20%', height: '20%'},
  View2: {width: 'auto', height: '60%'},
  Text2: {paddingBottom: 6, color: Color.Blue},
  Header: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#FFFFFF',
    elevation: 1,
  },
  text: {
    fontSize: 18,
    top: 14,
  },
  button: {
    top: 5,
    width: '80%',
  },
  Top8: {top: -8},
  HeaderView: {flexDirection: 'row', left: '43%'},
});
export default styles;
