import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BlankScreen from '../../components/blankpage';
import TabNavigation from '../tabs';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Main" component={TabNavigation} />
      <Stack.Screen name="MangaController" component={BlankScreen} />
      <Stack.Screen name="MangaReader" component={BlankScreen} />
    </Stack.Navigator>
  );
};