import * as React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useColorScheme } from 'react-native-appearance';
import LibraryScreen from '../library';
import BrowseScreen from '../browse';
import BlankScreen from '../blankpage';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer theme={useColorScheme() === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator>
        <Tab.Screen name="Library" component={LibraryScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="file-multiple" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Updates" component={BlankScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="update" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="History" component={BlankScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Browse" component={BrowseScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          )
        }} />
        <Tab.Screen name="Settings" component={BlankScreen} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog-outline" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}