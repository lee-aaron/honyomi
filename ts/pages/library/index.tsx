import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MangaView } from '../../components/manga';

const LibraryScreen: React.FC<BottomTabScreenProps<any>> = ({ navigation }) => {

  const [manga, setManga] = React.useState(new Array());

  // Fetch data from cache
  React.useEffect(() => {
    setManga([
      {
        title: "Horimiya",
        thumbnail_url: "https://www.readmng.com/uploads/posters/thumb/0001_649.jpg",
        url: "https://www.readmng.com/horimiya",
        artist: "HERO",
        author: "Hagiwara Daisuke",
        description: "Hori is your average teenage girl... she has a side she wants no one else to ever find about. Then there's her classmate Miyamura, your generic glasses-wearing boy in school and a totally different person outside. When the two meet unexpectedly, they discover each others' secrets and develop an unexpected friendship.",
        status: "Ongoing",
        genre: "Comedy, Romance, Shounen"
      },
      {
        title: "Kaifuku Jutsushi no Yarinaoshi",
        thumbnail_url: "https://www.readmng.com/uploads/posters/1548321429.jpg",
        url: "https://www.readmng.com/kaifuku-jutsushi-no-yarinaoshi-2",
        artist: "",
        author: "Tsukiyo Rui",
        description: "Healing magicians cannot fight alone...",
        status: "Ongoing",
        genre: "Action, Adventure, Drama, Fantasy, Harem, Seinen"
      },
      {
        title: "Shingeki no Kyojin",
        thumbnail_url: "https://www.readmng.com/uploads/posters/cover_80.jpg",
        url: "https://www.readmng.com/shingeki-no-kyojin",
        artist: "ISAYAMA Hajime",
        author: "ISAYAMA Hajime",
        description: "Several hundred years ago, humans were nearly exterminated by giants.",
        status: "Ongoing",
        genre: "Action, Drama, Fantasy, Horror, Mature, Mystery, Shounen, Supernatural, Tragedy"
      }
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={manga}
        renderItem={({ item }) =>
          <MangaView item={item} navigator={navigation} />
        }
        keyExtractor={item => item.title}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10
  },
  title: {
    fontSize: 20,
    marginLeft: 10,
    marginBottom: 5
  },
  list: {
    marginBottom: 35
  }
});

export default LibraryScreen;