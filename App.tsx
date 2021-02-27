/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './ts/pages/stack';

const App = () => {

  const currTheme = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <AppearanceProvider>
      <StatusBar backgroundColor={currTheme.colors.background} />
      <SafeAreaView style={{flex: 0, backgroundColor: currTheme.colors.background}} />
      <SafeAreaView style={{flex: 1, backgroundColor: currTheme.colors.background}}>
        <NavigationContainer theme={currTheme} >
          <StackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default App;
