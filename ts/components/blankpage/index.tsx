import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function BlankScreen() {
  return (
    <View style={styles.container}>
      <Text>Blank</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default BlankScreen;