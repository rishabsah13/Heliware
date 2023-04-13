import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import LoginScreen from './LoginScreen';
import MapScreen from './MapScreen';
import NoInternetScreen from './NoInternetScreen ';
import { useNetInfo } from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  const netInfo = useNetInfo();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLogin = () => {
  //   setIsLoggedIn(true);
  // };

  if (!netInfo.isConnected) {
    return <NoInternetScreen />;
  }


  return (


    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='MapScreen' component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
