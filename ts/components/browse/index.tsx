import * as React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

function BrowseScreen() {
  return (
    <View>
      <Text style={styles.title}>Browse</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    top: 15,
    left: 15,
    fontSize: 20,
  }
});

export default BrowseScreen;