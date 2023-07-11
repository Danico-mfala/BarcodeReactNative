import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import styles from './../styles/Style';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <Text>Welcome Back</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'green', height: 300}}>
          <Text>Image here</Text>
        </View>
      </SafeAreaView>
      <View>
        <Text>Email</Text>
        <TextInput style={{backgroundColor: 'red'}} />
        <Text>Password</Text>
        <TextInput style={{backgroundColor: 'red'}} placeholder="Enter email" />
        {/* secureTextEntry */}
        <TouchableOpacity>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          title="Scanner"
          onPress={() => navigation.navigate('Barcode Scanner')}
          icon={{...styles.iconButtonHome, name: 'barcode-scan'}}
          iconContainerStyle={styles.iconButtonHomeContainer}
          titleStyle={styles.titleButtonHome}
          buttonStyle={styles.buttonHome}
          containerStyle={styles.buttonHomeContainer}
        />
        <Text>Already have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
