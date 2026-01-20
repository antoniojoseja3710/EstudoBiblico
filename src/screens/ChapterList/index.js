import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ChapterItem from './ChapterItem';
import styles from './style';

export default function ChapterList({ route, navigation }) {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{book.nome}</Text>

      <FlatList
        data={book.capitulos}
        keyExtractor={(_, index) => index.toString()}
        numColumns={5}
        renderItem={({ item, index }) => (
          <ChapterItem
            index={index + 1}
            onPress={() =>
              navigation.navigate('Verses', {
                chapter: item,
                bookName: book.nome,
                chapterNumber: index + 1,
              })
            }
          />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}


