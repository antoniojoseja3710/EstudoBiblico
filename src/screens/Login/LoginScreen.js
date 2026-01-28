import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import EBRepository from "../../database/EBRepository";
import styles from "./style";

export default function LoginScreen({ navigation }) {

  const [repo, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const caminhoEmailRegex = /^[a-zA-Z0-9._%+-]+@caminho\.com$/;

  useEffect(() => {
    const init = async () => {
      const repository = new EBRepository();
      await repository.init();
      setRepo(repository);
    };
    init();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Atenção", "Informe email e senha");
      return;
    }

    // 🔒 VALIDA DOMÍNIO DO EMAIL
    const caminhoEmailRegex = /^[a-zA-Z0-9._%+-]+@caminho\.com$/;

    if (!caminhoEmailRegex.test(email)) {
      Alert.alert(
        "Email inválido",
        "Use apenas emails no formato usuario@caminho.com"
      );
      return;
    }

    if (!repo) {
      Alert.alert("Erro", "Sistema ainda carregando");
      return;
    }

    try {
      setLoading(true);

      const user = await repo.login(email, password);

      if (!user) {
        Alert.alert("Erro", "Email ou senha inválidos");
        return;
      }

      await AsyncStorage.setItem('user', JSON.stringify(user));

      navigation.reset({
        index: 0,
        routes: [{ name: 'TelaInicial' }],
      });

    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível realizar o login");
    } finally {
      setLoading(false);
    }
  };

  if (!repo) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const handleGuestLogin = () => {
    navigation.replace("TelaInicial");
  };


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.title}>Entrar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.helperText}>
        Apenas emails @caminho.com são aceitos
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.link}>
          Não tem conta? <Text style={styles.linkBold}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>


      {/* 🔗 LINK ENTRAR SEM CONTA */}
      <TouchableOpacity onPress={handleGuestLogin}>
        <Text style={styles.guestText}>
          Entrar sem conta
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}