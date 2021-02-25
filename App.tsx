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

import TabNavigation from './ts/components/tabs';

const App = () => {

  const { colors } = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <AppearanceProvider>
      <StatusBar backgroundColor={colors.background} />
      <SafeAreaView style={{flex: 0, backgroundColor: colors.background}} />
      <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
        <TabNavigation />
      </SafeAreaView>
    </AppearanceProvider>
  );
};

export default App;
