import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './../styles/Style';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View>
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
          {' '}
          Get start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
