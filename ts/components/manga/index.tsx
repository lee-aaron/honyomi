import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native';

interface SManga {
  url: string,
  title: string,
  artist?: string,
  author?: string,
  description?: string,
  genre?: string,
  status: number,
  thumbnail_url?: string,
}

const renderManga = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Image style={styles.image} source={{ uri: item.thumbnail_url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: Dimensions.get("window").width / 2 - 10,
    maxHeight: 250,
    borderRadius: 5,
    flex: 1,
    margin: 5,
    padding: 5,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  title: {
    position: 'absolute',
    fontSize: 16,
    bottom: 5,
    left: 5,
    zIndex: 1,
    color: 'white'
  }
});

export { renderManga };
export type { SManga };
