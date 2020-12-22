import {StyleSheet} from 'react-native';
import Color from '../../constant/Color';
export const styles = StyleSheet.create({
  fullScreen: {height: '100%', width: '100%'},
  FirstView: {
    flex: 1,
  },
  ScrollView: {
    flex: 1,
  },
  Upper: {
    alignSelf: 'center',
    backgroundColor: Color.White,
    width: '85%',
    height: '100%',
    marginTop: 120,
    alignItems: 'center',
  },
  SecondUpper: {
    top: -60,
  },
  ImageContainer: {height: 124, width: 124, borderRadius: 62},
  ButtonContainer: {
    marginTop: -50,
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  styleContainer: {
    width: '100%',
    marginTop: 0,
    flexDirection: 'row',
  },
  Frind: {
    backgroundColor: Color.White,
    height: '80%',
    width: '25%',
    marginLeft: 20,
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  Font30: {fontSize: 30, color: Color.Blur_Black},
  Font15: {fontSize: 15, color: Color.Blur_Black},
  content: {
    width: '100%',
    marginTop: 5,
    alignItems: 'center',
  },
  contentUpper: {
    width: '80%',
    alignItems: 'center',
    marginVertical: 10,
  },
  TextFont: {fontSize: 15, color: Color.Less_Black},
  Name: {fontSize: 20, color: Color.Medium_Black},
  aboutUpper: {
    width: '100%',
    marginTop: 0,
    alignItems: 'center',
  },
  about: {
    width: '90%',
    marginTop: 5,
    alignItems: 'center',
  },
  aboutText: {fontSize: 13, color: Color.Less_Black},
  buttonView: {width: '40%', alignItems: 'center'},
  buttonText: {fontSize: 17, color: Color.Blue},
  map: {
    marginTop: 5,
    flexDirection: 'row',
  },
  View: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  marginLeft: {marginLeft: '75%', color: Color.Blur_Blue},
  marginVertical: {marginRight: '75%', color: Color.Less_Black},
  imagecontanor: {
    borderRadius: 6,
    elevation: 1,
    overflow: 'hidden',
    width: '30%',
    marginLeft: '02%',
  },
  maincontainer: {
    flexDirection: 'row',
    marginVertical: 5,
    width: '100%',
  },
});
