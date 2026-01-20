import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import EBRepository from "../../database/EBRepository";
import styles from "./style";

import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

export default function Resultado({ navigation, route }) {
const { lessonId, score, apelAccepted } = route.params;

const [acceptedLesson, setAcceptedLesson] = useState(null);
const [acceptMessage, setAcceptMessage] = useState("");


const [categoryName, setCategoryName] = useState("");
const [guideTitle, setGuideTitle] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [user, setUser] = useState("");

  const cardRef = useRef(null);

  const points = Math.round((score.correct / score.total) * 10);
useEffect(() => {
  loadLesson();
  saveProgress();
  loadUser();
}, []);

  useEffect(() => {
  if (apelAccepted === true) {
    const message = getAcceptLessonMessage();
    setAcceptMessage(message);
    setAcceptedLesson(true);
  }
}, [apelAccepted]);

 const loadUser = async () => {
  try {
    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) return;

    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser.first_name +" "+ parsedUser.last_name);
  } catch (error) {
    console.log("Erro ao carregar usuário:", error);
  }
};

const loadLesson = async () => {
  try {
    const repo = new EBRepository();
    await repo.init();

    // 🔹 Lição
    const lesson = await repo.getLessonById(lessonId);

    if (!lesson) return;

    setLessonTitle(lesson.title);
    setLessonNumber(lesson.number);

    // 🔹 Guia
    if (lesson.guide_id) {
      const guide = await repo.getGuideById(lesson.guide_id);

      if (guide) {
        setGuideTitle(guide.title);

        // 🔹 Categoria
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

  const saveProgress = async () => {
    const storedUser = await AsyncStorage.getItem("user");
    if (!storedUser) return;

    const user = JSON.parse(storedUser);
    const repo = new EBRepository();
    await repo.init();

    await repo.saveProgress(
      user.id,
      lessonId,
      score.correct,
      score.total
    );
  };

  const getStarsCount = () => {
    if (points === 10) return 5;
    if (points >= 8) return 4;
    if (points >= 7) return 3;
    if (points >= 5) return 2;
    if (points > 0) return 1;
    return 0;
  };

  const getAcceptLessonMessage = () => {
  const messages = [
    " * Que decisão abençoada! Que Deus te ajude a viver esta lição todos os dias.",
    " * Amém! Colocar a Palavra em prática transforma vidas.",
    " * Que o Espírito Santo te fortaleça a viver o que aprendeu.",
    " * Sua decisão alegra o céu! Persevere.",
    " * Viver esta lição é um passo de fé. Continue firme!",
    " * Que esta lição produza frutos em sua vida.",
    " * Deus honra quem decide viver a verdade.",
    " * Uma escolha sábia! Que Deus te conduza.",
    " * Que esta lição seja visível em suas atitudes.",
    " * Aprender é importante, viver é essencial. Parabéns!",
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

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
            color={i < stars ? "#FFD100" : "#5E7C7C"}
            style={{
              marginTop: offsets[i],
              marginHorizontal: 6,
            }}
          />
        ))}
      </View>
    );
  };

  const handleShare = async () => {
    const uri = await captureRef(cardRef, {
      format: "png",
      quality: 1,
    });

    await Sharing.shareAsync(uri);
  };
const getResultMessage = () => {
const cleanUser = user?.trim();
  // ⭐ NOTA MÁXIMA
  if (points === 10) {
    const messages = [
      `Excelente ${cleanUser}! Você acertou todas as ${score.total} questões.`,
      `Desempenho perfeito ${cleanUser}! ${score.correct}/${score.total} respostas corretas.`,
      `Resultado extraordinário ${cleanUser}! Você dominou completamente esta lição.`,
      `Parabéns ${cleanUser}! Seu aprendizado foi completo nesta lição.`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ⭐ MUITO BOM
  if (points >= 8) {
    const messages = [
      `Ótimo desempenho ${cleanUser}! Você acertou ${score.correct} de ${score.total} questões.`,
      `Muito bem ${cleanUser}! Seu entendimento da lição foi excelente.`,
      `Parabéns ${cleanUser}! Você teve um ótimo aproveitamento.`,
      `Resultado muito positivo ${cleanUser}! Continue firme nos estudos.`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ⭐ BOM / APROVADO
  if (points >= 7) {
    const messages = [
      `Bom trabalho ${cleanUser}! Você concluiu esta lição com sucesso.`,
      `Parabéns ${cleanUser}, por finalizar a lição. Continue se dedicando.`,
      `Oi ${cleanUser}! Você está no caminho certo. Vamos avançar mais um pouco.`,
      `Oi ${cleanUser}! Cada lição concluída fortalece seu aprendizado.`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ⭐ PRECISA MELHORAR
  if (points >= 5) {
    const messages = [
      `Olá ${cleanUser}! Você concluiu a lição. Que tal revisar o conteúdo?`,
      `Não desanime ${cleanUser}! Reestudar ajuda a fixar melhor o aprendizado.`,
      `Oi ${cleanUser}! Continue perseverando. O aprendizado é um processo.`,
      `Olá ${cleanUser}! Com mais atenção, seu desempenho pode melhorar ainda mais.`,
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  }

  // ⭐ NOTA BAIXA
  const messages = [
    `Olá ${cleanUser}, não desista! Refaça a lição com calma e atenção.`,
    `Olá ${cleanUser}! Cada tentativa é uma oportunidade de aprender.`,
    `Persistir faz parte do crescimento. Tente novamente ${cleanUser}.`,
    `Olá ${cleanUser}! O aprendizado vem com a prática. Continue firme.`,
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};
  

  return (
    <SafeAreaView style={styles.container}>
      
      {/* 🎴 CARD */}
      <View style={styles.card} ref={cardRef}>
        <Text style={styles.title}>Resultado</Text>
<View style={styles.context}>

<Text style={styles.contextText} >
  Categoria: {categoryName}{'\n'}Guia de Estudos: {guideTitle}
</Text>

<Text style={styles.contextText}>
  
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
  {getResultMessage()}
  {apelAccepted && (
  <Text>
   {acceptMessage}
  </Text>
)}
</Text>

      </View>

      {/* 🔘 BOTÕES */}
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Categorias"
  style={styles.secondaryButton}
  onPress={() => navigation.navigate("Categorias")}
>
  <Text style={styles.secondaryButtonText}>Categorias</Text>
</TouchableOpacity>

<TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel="Repetir"
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

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleShare}
        >
          <Text style={styles.primaryText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}