import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import bibleData from '../../../data/bible.json';

export default function BookList({ navigation }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const filteredBooks = bibleData.filter((item) => item.nome);
    setBooks(filteredBooks);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bíblia</Text>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Chapters', { book: item })}
          >
            <Text style={styles.itemText}>{item.nome}</Text>

          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

