import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },
  iconButtonHomeContainer: {marginRight: 10},
  iconButtonHome: {
    type: 'material-community',
    size: 50,
    color: 'white',
  },
  titleButtonHome: {
    fontWeight: '700',
    fontSize: 25,
  },
  buttonHome: {
    backgroundColor: '#0C8E4E',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    height: 100,
  },
  buttonHomeContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  buttonStart: {
    width: 130,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 'auto',
    marginLeft: 130,
    marginTop: 570,
  },
});

export default styles;
