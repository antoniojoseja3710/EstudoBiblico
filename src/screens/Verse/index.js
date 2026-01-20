import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './style'

export default function Verse({ route }) {
  const { chapter, bookName, chapterNumber } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{bookName} - Capítulo {chapterNumber}</Text>
      {chapter.map((verseText, index) => (
        <View key={index} style={styles.verseContainer}>
          <View style={styles.verseNumberContainer}>
            <Text style={styles.verseNumber}>{index + 1}</Text>
          </View>
          <Text style={styles.verseText}>{verseText}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

