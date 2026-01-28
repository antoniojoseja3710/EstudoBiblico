import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Alert
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import EBRepository from "../../database/EBRepository";
import styles from "./style";
import Cabecalho from "../../components/Cabecalho";

export default function Licoes({ route, navigation }) {
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const { guideId, guideTitle } = route.params || {};

  const [totalPoints, setTotalPoints] = useState(0);
  const [averagePoints, setAveragePoints] = useState(0);



  // ===============================
  // CARREGA LIÇÕES
  // ===============================
  const loadLessons = useCallback(async (userObj) => {
    setLoading(true);

    try {
      const repo = new EBRepository();
      await repo.init();

      const data = (await repo.getLessonsByGuide(guideId)) || [];
      const finalLessons = [];

      let pointsSum = 0;
      let lessonsWithProgress = 0;

      for (const lesson of data) {
        let stars = 0;
        let points = 0;
        let locked = true;

        if (userObj) {
          const progress = await repo.getLessonProgress(userObj.id, lesson.id);

          stars = progress?.stars || 0;
          
          points = Number(progress?.grade) || 0; // conversão

          console.log("Nota: "+points)
          console.log("Estrelas: "+stars)
          
          locked = !(await repo.canAccessLesson(userObj.id, lesson));


          if (points > 0) {
            pointsSum += points;
            lessonsWithProgress++;
          }
        }

        finalLessons.push({
          ...lesson,
          stars,
          points,
          locked
        });
      }


      // SET STATE UMA ÚNICA VEZ
      setTotalPoints(pointsSum.toFixed(0));
      setAveragePoints(
        lessonsWithProgress > 0
          ? (pointsSum / lessonsWithProgress).toFixed(1)
          : 0
      );

      setLessons(finalLessons);
    } catch (error) {
      console.log("Erro ao carregar lições:", error);
    } finally {
      setLoading(false);
    }
  }, [guideId]);

  // ===============================
  // AO ABRIR / VOLTAR PARA A TELA
  // ===============================
  useFocusEffect(
    useCallback(() => {
      const refresh = async () => {
        const storedUser = await AsyncStorage.getItem("user");
        const userObj = storedUser ? JSON.parse(storedUser) : null;
        setUser(userObj);
        await loadLessons(userObj);
      };
      refresh();
    }, [loadLessons])
  );


  useEffect(() => {
    if (!guideId) {
      console.warn("Guia não encontrado:", guideId);
      navigation.goBack();
    }
  }, [guideId])

  // ===============================
  // LOGOUT
  // ===============================
  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    setUser(null);

    navigation.reset({
      index: 0,
      routes: [{ name: "TelaInicial" }],
    });
  };

  // ===============================
  // ESTRELAS
  // ===============================
  const renderStars = (stars) => (
    <View style={styles.starsRow}>
      {[1, 2, 3, 4, 5].map((i) => (
        <FontAwesome
          key={i}
          name="star"
          size={10}
          color={i <= stars ? "#FFD100" : "#4A6E6E"}
        />
      ))}
    </View>
  );

  // ===============================
  // LOADING
  // ===============================
  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#007A8B" />
      </View>
    );
  }

  // ===============================
  // RENDER
  // ===============================
  return (
    <View style={styles.container}>
      <Cabecalho
        user={user}
        navigation={navigation}
        onLogout={handleLogout}
      />
      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>
          🏆 Pontuação geral: {totalPoints} pts
        </Text>

        <Text style={styles.summaryText}>
          📊 Média geral: {averagePoints}
        </Text>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.licoesText}>
          Lições
        </Text>
        <Text style={styles.guideTitle}>
          {guideTitle?.toUpperCase()}
        </Text>

        <FlatList
          data={lessons}
          numColumns={4}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={({ item }) => {
            const isSelected = selectedLesson?.id === item.id;

            return (
              <TouchableOpacity
                style={[
                  styles.lessonCard,
                  isSelected ? styles.cardSelected : styles.cardActive,
                  (!user || item.locked) && { opacity: 0.5 }
                ]}
                onPress={() => {
                  if (!user) {
                    Alert.alert(
                      "Login necessário",
                      "Faça login para acessar os temas."
                    );
                    return;
                  }

                  if (item.locked) {
                    Alert.alert(
                      "Tema bloqueado",
                      "Conclua os temas anteriores para desbloquear."
                    );
                    return;
                  }

                  setSelectedLesson(item);
                }}
              >
                {/* Número da lição */}
                <Text style={styles.lessonNumberText}>{item.number}</Text>

                {/* Estrelas */}
                {renderStars(item.stars)}

                {/* Cadeado */}
                {(item.locked || !user) && (
                  <View style={styles.lockIcon}>
                    <FontAwesome
                      name="lock"
                      size={14}
                      color="#1F2D2E"
                    />
                  </View>
                )}
              </TouchableOpacity>
            );
          }}
        />

        {/* Barra inferior */}
        <View style={styles.selectionBar}>
          <Text style={styles.selectionBarText}>
            {selectedLesson
              ? `${selectedLesson.number} - ${selectedLesson.title}`
              : user
                ? "Selecione o Tema"
                : "Faça login para acessar os temas"}
          </Text>
        </View>

        {/* Botões */}
        <View style={styles.footerButtons}>
          <TouchableOpacity
            style={styles.blackButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.blackButtonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.startButton, !selectedLesson && { opacity: 0.7 }]}
            onPress={() => {
              if (!user) {
                Alert.alert(
                  "Login necessário",
                  "Faça login para continuar."
                );
                return;
              }

              if (!selectedLesson) return;

              navigation.navigate("Introducao", {
                lesson: selectedLesson,
              });
            }}
          >
            <Text style={styles.startButtonText}>Começar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}