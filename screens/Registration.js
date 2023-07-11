import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function Registration() {
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView>
        <Text>Sign Up Now</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'red'}}>
          <Text>Image here</Text>
        </View>
      </SafeAreaView>
      <View>
        <Text>Name </Text>
        <TextInput style={{backgroundColor: 'red'}} />
        <Text>Email</Text>
        <TextInput style={{backgroundColor: 'red'}} />
        <Text>Password</Text>
        <TextInput style={{backgroundColor: 'red'}} placeholder="Enter email" />
        {/* secureTextEntry */}
        <TouchableOpacity>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
