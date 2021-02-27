import * as React from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { handleMangaController } from '../controllers';

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

// Renderable Manga Icon
const MangaView: React.FC<any> = ({ item, navigator }: any) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleMangaController(item, navigator)}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={{ uri: item.thumbnail_url }} />
      </View>
    </TouchableWithoutFeedback>
  );
}

// Renderable Manga Details
const MangaDetails: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Placeholder</Text>
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
    borderColor: 'white',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5
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

export { MangaView };
export type { SManga };
