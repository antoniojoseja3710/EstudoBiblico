import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import EBRepository from '../../database/EBRepository';
import Cabecalho from '../../components/Cabecalho';

export default function GuiasDeEstudos({ navigation, route }) {
  const { categoryId, categoryName } = route.params || {};

  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  // 🔒 Proteção contra acesso sem parâmetros
  useEffect(() => {
    if (!categoryId) {
      console.warn('Guia não encontrado:', categoryId);
      navigation.goBack();
      return;
    }
  }, [categoryId]);

  // 🔹 Carregar guias da categoria
  useEffect(() => {
    const loadGuides = async () => {
      try {
        setLoading(true);
        const repo = new EBRepository();
        await repo.init();

        const data = await repo.getGuidesByCategory(categoryId);
        setGuides(data);
      } catch (error) {
        console.error('Erro ao carregar guias:', error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      loadGuides();
    }
  }, [categoryId]);

  // 🔹 Atualiza usuário quando a tela entra em foco
  useFocusEffect(
    useCallback(() => {
      const fetchUser = async () => {
        const storedUser = await AsyncStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
      };
      fetchUser();
    }, [])
  );

  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Categorias' }],
    });
  };

  if (loading) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color="#0B4F6C" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* CABEÇALHO */}
      <Cabecalho
        user={user}
        navigation={navigation}
        onLogout={handleLogout}
      />
      <View style={styles.content}>
          <Text style={styles.guideText}>
        Guias de Estudos sobre
      </Text>
      <Text style={styles.title}>
        {categoryName?.toUpperCase()}
      </Text>

      {guides.map((guide) => (
        <TouchableOpacity
          key={guide.id}
          style={styles.button}
          onPress={() =>
  navigation.navigate('Licoes', {
    guideId: guide.id,
    guideTitle: guide.title,
    categoryId: categoryId, // 👈 ENVIA JUNTO
  })
}
        >
          <Text style={styles.buttonText}>
            {guide.title.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}

      {!guides.length && (
        <Text style={styles.emptyText}>
          Nenhum guia cadastrado nesta categoria.
        </Text>
      )}

      
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}