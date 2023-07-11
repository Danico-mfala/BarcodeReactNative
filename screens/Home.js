import * as React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Button} from '@rneui/themed';
import styles from './../styles/Style';
import {Text} from '@rneui/base';
import {useNavigation} from '@react-navigation/native';

function Home({navigation}) {
  //const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/workers-checking.png')}
        style={{width: 370, height: 340}}
      />

      <Button
        title="Generate"
        onPress={() => navigation.navigate('Barcode Generator')}
        icon={{...styles.iconButtonHome, name: 'barcode'}}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
      />
      <TouchableOpacity onPress={() => navigation.navigate('scanning')}>
        <Text>Scan Now</Text>
      </TouchableOpacity>

      {/* <Button
        title="Scanner"
        onPress={() => navigation.navigate('Barcode Scanner')}
        icon={{...styles.iconButtonHome, name: 'barcode-scan'}}
        iconContainerStyle={styles.iconButtonHomeContainer}
        titleStyle={styles.titleButtonHome}
        buttonStyle={styles.buttonHome}
        containerStyle={styles.buttonHomeContainer}
      /> */}
    </View>
  );
}

export default Home;
