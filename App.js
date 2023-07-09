import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import BarcodeGenerator from './screens/BarcodeGenerator';
import BarcodeScan from './screens/BarcodeScanner';
import Login from './screens/Login';
import Registration from './screens/Registration';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'React Native Barcode'}}
        />
        <Stack.Screen name="Barcode Generator" component={BarcodeGenerator} />
        <Stack.Screen name="Barcode Scanner" component={BarcodeScan} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
