import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    fontWeight: '650',
    fontSize: 20,
  },
  buttonHome: {
    backgroundColor: '#526D82',
    borderColor: 'transparent',
    borderWidth: 0,
    borderRadius: 13,
    height: 80,
  },
  buttonHomeContainer: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  buttonStart: {
    width: 390,
    height: 70,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 'auto',
    marginLeft: 10,
    marginTop: 100,
  },
  slideImage: {
    width: 440,
    height: 540,
    marginLeft: 3,
  },
});

export default styles;
