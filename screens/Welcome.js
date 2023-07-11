import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './../styles/Style';

import slides from '../slides';
import {Image} from 'react-native';
// import OnboardingItems from '../components/OnboardingItems';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={require('../img/luggage-tag.webp')}
        style={styles.slideImage}
      />
      <Text>Welcome</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.buttonStart}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '800',
            fontSize: 20,
          }}>
          Get start
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
