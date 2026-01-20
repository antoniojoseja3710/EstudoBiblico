import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './style';

export default function Cabecalho({ user, navigation, onLogout }) {
  return (
    <View style={styles.bannerContainer}>

      {/* ===== BANNER ===== */}
      <Image
        source={require('../../../assets/banner.jpg')}
        style={styles.banner}
      />

      <View style={styles.bannerOverlay} />

      <View style={styles.bannerTextContainer}>
        <Text style={styles.headerTitle}>Caminho do Conserto</Text>
        <Text style={styles.headerSubtitle}>
          uma jornada de fé,{"\n"}aprendizado{"\n"} e propósito
        </Text>
      </View>

      {/* LOGIN OU USUÁRIO */}
      {user ? (
        <View style={styles.userBadge}>
          <Ionicons name="person-circle-outline" size={26} color="#fff" />
          <Text style={styles.userName}>Olá, {user.first_name}</Text>

          <TouchableOpacity
            onPress={onLogout}
            style={styles.logoutButton}
          >
            <Ionicons name="log-out-outline" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.loginTopButton}
          onPress={() => navigation.navigate('Login')}
        >
          <View style={styles.loginIconWrapper}>
            <Ionicons name="log-in-outline" size={18} color="#4A6C6F" />
          </View>
          <Text style={styles.loginTopText}>Entrar</Text>
        </TouchableOpacity>
      )}

    </View>
  );
}