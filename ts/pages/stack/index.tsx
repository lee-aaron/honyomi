import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute, Route } from '@react-navigation/native';
import BlankScreen from '../../components/blankpage';
import TabNavigation from '../tabs';
import { MangaDetails } from '../../components/manga';

const Stack = createStackNavigator();

const getHeaderTitle = (route: Route<string>) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Library';
  return routeName;
}

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabNavigation} options={({ route }) => ({ headerTitle: getHeaderTitle(route) })} />
      <Stack.Screen name="MangaController" component={MangaDetails} />
      <Stack.Screen name="MangaReader" component={BlankScreen} />
    </Stack.Navigator>
  );
};