/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Main from './src/components/Main';
import Login from './src/components/Login';
import Registration from './src/components/Registration';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const Stack = createStackNavigator();
const App = () => {
  const Login1 = useSelector((state) => state.Login);
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        {Login1.authentication ? (
          <Stack.Navigator initialRouteName="Main" headerMode={null}>
            <Stack.Screen name="Main" component={Main} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login" headerMode={null}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AppearanceProvider>
  );
};

export default App;
