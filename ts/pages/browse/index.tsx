import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

const BrowseScreen: React.FC<BottomTabScreenProps<any>> = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Browse</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  }
});

export default BrowseScreen;