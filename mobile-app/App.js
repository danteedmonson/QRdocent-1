/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, Image, View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider, Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import QRScreen from './Screens/QRScreen';
import HelpScreen from './Screens/HelpScreen';
import ExhibitScreen from './Screens/ExhibitScreen';
import SignInScreen from './Screens/SignInScreen';
import CodeEntryScreen from './Screens/CodeEntryScreen';
import LogInScreen from './Screens/LogInScreen';
import SplashScreen from './Screens/SplashScreen';



const Stack = createNativeStackNavigator();


// Create a custom theme object
const theme = {
  ...DefaultTheme,

}

const App = () => {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Welcome" }} />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ title: "Sign In" }} />
          <Stack.Screen
            name="LogIn"
            component={LogInScreen}
            options={{ title: "Log In" }} />
          <Stack.Screen
            name="CodeEntry"
            component={CodeEntryScreen}
            options={{ title: "Enter Code" }} />
          <Stack.Screen
            name="QR Scanner"
            component={QRScreen}
            options={{ title: "Scanner" }} />
          <Stack.Screen
            name="Help"
            component={HelpScreen}
            options={{ title: "Help" }} />
          <Stack.Screen
            name="Exhibit"
            component={ExhibitScreen}
            options={{ title: "Exhibit" }} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Welcome" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
