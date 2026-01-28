import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './style';

export default function Introducao({ navigation, route }) {
  const { lesson } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>{lesson.title}</Text>
        <Text style={styles.text}>{lesson.introduction}</Text>
      </ScrollView>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Questionario', { lesson })}
      >
        <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}