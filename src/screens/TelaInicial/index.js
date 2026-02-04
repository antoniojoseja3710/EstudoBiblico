import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import Cabecalho from '../../components/Cabecalho';
import styles from './style';
import versiculos from '../../../data/versesReflection.json';

import { StatusBar } from 'react-native';

export default function TelaInicial({ navigation }) {

  const [user, setUser] = useState(null);

  const versiculoSorteado =
    versiculos[Math.floor(Math.random() * versiculos.length)];




  // 🔹 CARREGA USUÁRIO LOGADO
  useFocusEffect(
    useCallback(() => {
      const loadUser = async () => {
        const storedUser = await AsyncStorage.getItem('user');
        setUser(storedUser ? JSON.parse(storedUser) : null);
      };
      loadUser();
    }, [])
  );


  const handleLogout = async () => {
    await AsyncStorage.removeItem('user');
    setUser(null);

    navigation.reset({
      index: 0,
      routes: [{ name: 'TelaInicial' }],
    });
  };



  return (
    <SafeAreaView style={styles.container}>
      <Cabecalho
        user={user}
        navigation={navigation}
        onLogout={handleLogout}
      />
      <StatusBar
        animated={true}
        backgroundColor="#000"
        barStyle="light-content"
      />

      <View style={styles.content}>
        <Text style={styles.subtitle}>Versículo do Dia</Text>

        <Text style={styles.texto}>{versiculoSorteado.texto}</Text>
        <View style={styles.boxReference}>
          <Text style={styles.reference}>
            {versiculoSorteado.livro} {versiculoSorteado.capitulo}:{versiculoSorteado.versiculo}
          </Text>
        </View>
        <View style={styles.boxReflexao}>
          <Text style={styles.tema}>
            {versiculoSorteado.tema}
          </Text>
          <Text style={styles.frase}>
            {versiculoSorteado.frase} {''} {versiculoSorteado.reflexao} {''} {versiculoSorteado.pergunta}
          </Text>
        </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Categorias')}
        >
          <Text style={styles.buttonText}>CURSO BÍBLICO</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Books')}
        >
          <Text style={styles.buttonText}>BÍBLIA</Text>
        </TouchableOpacity>

        {/* 🔐 BOTÃO ADMIN APENAS PARA ADMIN */}
        {user?.role === 'admin' && (
          <TouchableOpacity
            style={styles.adminButton}
            onPress={() => navigation.navigate('UsersManagement')}
          >
            <Ionicons name="people-sharp" size={18} color="#fff" />
            <Text style={styles.adminButtonText}>Gerenciar Usuários</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}