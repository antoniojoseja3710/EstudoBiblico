import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import EBRepository from "../../database/EBRepository";
import styles from "./style";

import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

export default function Resultado({ navigation, route }) {
  const { lessonId, score, apelAccepted } = route.params;

  const [categoryName, setCategoryName] = useState("");
  const [guideTitle, setGuideTitle] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [user, setUser] = useState("");

  const cardRef = useRef(null);

  // Pontuação (0 a 10)
  const points = Math.round((score.correct / score.total) * 10);


  // Data formatada
  const getFormattedDateTime = () => {
    const now = new Date();
    return now.toLocaleString("pt-BR");
  };

  // Usuário
  const loadUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) return;

      const parsedUser = JSON.parse(storedUser);
      setUser(`${parsedUser.first_name} ${parsedUser.last_name}`);
    } catch (error) {
      console.log("Erro ao carregar usuário:", error);
    }
  };

  // Lição / Guia / Categoria
  const loadLesson = async () => {
    try {
      const repo = new EBRepository();
      await repo.init();

      const lesson = await repo.getLessonById(lessonId);
      if (!lesson) return;

      setLessonTitle(lesson.title);
      setLessonNumber(lesson.number);

      if (lesson.guide_id) {
        const guide = await repo.getGuideById(lesson.guide_id);
        if (guide) {
          setGuideTitle(guide.title);

          if (guide.category_id) {
            const category = await repo.getCategoryById(guide.category_id);
            if (category) {
              setCategoryName(category.name);
            }
          }
        }
      }
    } catch (error) {
      console.log("Erro ao carregar dados:", error);
    }
  };

  // Salvar progresso
  const saveProgress = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");
      if (!storedUser) return;

      const parsedUser = JSON.parse(storedUser);
      const repo = new EBRepository();
      await repo.init();

      await repo.saveProgress(
        parsedUser.id,
        lessonId,
        points,
        getFormattedDateTime()
      );
    } catch (error) {
      console.log("Erro ao salvar progresso:", error);
    }
  };

  // Quantidade de estrelas
  const getStarsCount = () => {
    if (points === 10) return 5;
    if (points >= 8) return 4;
    if (points >= 7) return 3;
    if (points >= 5) return 2;
    if (points > 0) return 1;
    return 0;
  };

  // Renderizar estrelas
  const renderStars = () => {
    const offsets = [22, 8, 0, 8, 22];
    const stars = getStarsCount();

    return (
      <View style={styles.starsContainer}>
        {[0, 1, 2, 3, 4].map((i) => (
          <FontAwesome
            key={i}
            name="star"
            size={26}
            color={i < stars ? "#FFD700" : "#6E8C8C"}
            style={{
              marginTop: offsets[i],
              marginHorizontal: 6,
            }}
          />
        ))}
      </View>
    );
  };

  // Compartilhar imagem
  const handleShare = async () => {
    const uri = await captureRef(cardRef, {
      format: "png",
      quality: 1,
    });

    await Sharing.shareAsync(uri);
  };

  // Mensagem de resultado
  const getResultMessage = () => {
    const cleanUser = user?.trim();

    if (points === 10) {
      const messages = [
        `Excelente ${cleanUser}! Você acertou todas as ${score.total} questões.`,
        `Desempenho perfeito ${cleanUser}! ${score.correct}/${score.total} corretas.`,
        `Resultado extraordinário ${cleanUser}!`,
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    if (points >= 8) {
      const messages = [
        `Ótimo desempenho ${cleanUser}!`,
        `Muito bem ${cleanUser}! Continue firme.`,
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }

    if (points >= 7) {
      return `Bom trabalho ${cleanUser}! Continue avançando.`;
    }

    if (points >= 5) {
      return `Você concluiu a lição ${cleanUser}. Que tal revisar?`;
    }

    return `Não desista ${cleanUser}! Tente novamente com calma.`;
  };

  // Feedback visual
  const getFeedback = () => {
    if (!apelAccepted) return null;
    const icons = ["📖Amém por sua decisão!", "✨Parabéns por sua decisão!", "🤍Deus seja louvado, por você escolher ser fiel a Ele!"];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  // Efeitos
  useEffect(() => {
    loadLesson();
    loadUser();
    saveProgress();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* CARD */}
      <View style={styles.card} ref={cardRef}>
        <Text style={styles.title}>Resultado</Text>

        <View style={styles.context}>
          <Text style={styles.contextText}>
            Categoria: {categoryName}
            {"\n"}Guia de Estudos: {guideTitle}
          </Text>

          <Text style={styles.contextText}>
            Data: {getFormattedDateTime()}
          </Text>
        </View>

        <Text style={styles.lessonTitle}>
          Lição {lessonNumber} - {lessonTitle}
        </Text>

        {renderStars()}

        <View style={styles.scoreCircle}>
          <Text style={styles.score}>{points}</Text>
        </View>

        <Text style={styles.resultText}>
          {apelAccepted && (
            <Text style={styles.feedbackText}>{getFeedback()} </Text>
          )}
          🙏 {getResultMessage()}
        </Text>
      </View>

      {/* BOTÕES */}
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Categorias")}
          >
            <Text style={styles.secondaryButtonText}>Categorias</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() =>
              navigation.replace("Questionario", {
                lesson: { id: lessonId },
              })
            }
          >
            <Text style={styles.secondaryButtonText}>Repetir</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleShare}>
          <Text style={styles.primaryText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}