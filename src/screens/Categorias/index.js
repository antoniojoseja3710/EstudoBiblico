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



export default function Categorias({ navigation }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  
  // Carregar categorias e usuário na inicialização
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);

        // 🔹 carregar categorias
        const repo = new EBRepository();
        await repo.init();
        const data = await repo.getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  // Atualiza o usuário sempre que a tela ficar em foco
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
      <Text style={styles.title}>CATEGORIAS</Text>

      {categories.map((cat) => (
        <TouchableOpacity
          key={cat.id}
          style={styles.button}
          onPress={() =>
            navigation.navigate('GuiasDeEstudos', {
              categoryId: cat.id,
              categoryName: cat.name,
            })
          }
        >
          <Text style={styles.buttonText}>
            {cat.name.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
      
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('TelaInicial')}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}