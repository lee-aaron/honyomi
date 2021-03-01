import * as React from 'react';
import { StackHeaderLeftButtonProps, StackScreenProps } from '@react-navigation/stack';
import { View, Text, Dimensions, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
const MangaDetails: React.FC<StackScreenProps<any>> = ({ navigation, route }: StackScreenProps<any>) => {

  const manga = route.params as SManga;
  const [chapters, setChapters] = React.useState(new Array());

  // Fetch chapters
  React.useEffect(() => {
    console.log(manga);
  }, [manga]);

  // Sets the header for the details screen
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: (props: StackHeaderLeftButtonProps) => {
        return <MaterialCommunityIcons style={styles.iconBack} name="arrow-left" color={"white"} size={props.titleLayout?.height} onPress={() => navigation.goBack()}/>;
      }
      // TODO: Add download / share / additional icons
    });
  }, [navigation]);

  return (
    <View style={styles.details_container}>
      <View style={styles.details_intro}>
        <View style={styles.details_imagecontainer}>
          <Image style={styles.image} source={{ uri: manga.thumbnail_url }} />
        </View>
        <View style={styles.details_header}>
          <Text style={styles.details_title}>{manga.title}</Text>
          <Text style={styles.details_author}>{manga.author}</Text>
          <View>
            <Text style={styles.details_status}>{manga.status}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.details_description}>{manga.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: Math.min(Dimensions.get("window").width / 2 - 10, 200),
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
  },
  iconBack: {
    marginLeft: 10
  },
  details_container: {
    padding: 10
  },
  details_intro: {
    padding: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  details_imagecontainer: {
    flex: 1,
    maxWidth: Math.min(Dimensions.get("window").width / 2 - 50, 100),
    maxHeight: 150
  },
  details_header: {
    flex: 1,
    alignSelf: 'flex-end',
    bottom: 10
  },
  details_title: {
    fontSize: 18,
    marginLeft: 10,
    marginBottom: 5,
    color: 'white'
  },
  details_author: {
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
    color: 'white'
  },
  details_status: {
    fontSize: 12,
    marginLeft: 10,
    marginBottom: 5,
    color: 'white'
  },
  details_description: {
    fontSize: 12,
    color: 'white',
    overflow: 'scroll',
    maxHeight: 35
  }
});

export { MangaView, MangaDetails };
export type { SManga };
