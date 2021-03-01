import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LibraryScreen from '../library';
import BrowseScreen from '../browse';
import BlankScreen from '../../components/blankpage';
import { StyleSheet, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default ({ navigation, route }: StackScreenProps<any>) => {

  // Sets the custom filters for the various tabs
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Library";
    navigation.setOptions({
      headerRight: () => {
        switch (routeName) {
          case 'Library':
            return (
              <View style={styles.iconBar}>
                <MaterialCommunityIcons name="magnify" style={styles.icon} color={"white"} size={30}/>
                <MaterialCommunityIcons name="filter-variant" style={styles.icon} color={"white"} size={30}/>
                <MaterialCommunityIcons name="refresh" style={styles.icon} color={"white"} size={30}/>
              </View>
            );
          default:
            return <></>;
        }
      }
    });
  }, [navigation, route]);

  return (
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
  );
}

const styles = StyleSheet.create({
  iconBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    margin: 5
  }
});