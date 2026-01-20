import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import styles from "./style";
import EBRepository from "../../database/EBRepository";

export default function Questionario({ navigation, route }) {
  // ✅ PROTEÇÃO
  const { lesson } = route.params || {};

  if (!lesson) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Erro: lição não encontrada.</Text>
      </View>
    );
  }

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [answered, setAnswered] = useState(false); // ✅ NOVO

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const repo = new EBRepository();
        await repo.init();
        const data = await repo.getQuestionsByLesson(lesson.id);
        setQuestions(data);
      } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [lesson.id]);

  const optionMap = {
    A: "option_a",
    B: "option_b",
    C: "option_c",
    D: "option_d",
  };

  const selectAnswer = (questionId, optionLetter) => {
    if (disabled) return;

    const question = questions[currentIndex];
    const correctLetter = question.correct_option.toUpperCase();

    setAnswers((prev) => ({ ...prev, [questionId]: optionLetter }));

    setFeedback((prev) => ({
      ...prev,
      [questionId]:
        optionLetter === correctLetter ? "Acertou" : "Errou",
    }));

    setDisabled(true);
    setAnswered(true); // ✅ HABILITA O PRÓXIMO
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct_option.toUpperCase()) {
        correct++;
      }
    });

    return {
      correct,
      total: questions.length,
    };
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text>Nenhuma pergunta disponível.</Text>
      </View>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
       <View style={styles.progressContainer}>
  <View
    style={[
      styles.progressBar,
      { width: `${((currentIndex + 1) / questions.length) * 100}%` },
    ]}
  />
</View>  
        <Text style={styles.questionText}>
          {currentIndex + 1} - {currentQuestion.question}? {currentQuestion.verse}
        </Text>
        <View style={styles.boxButton}>
          {/* 📖 Bíblia */}
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Books", {
                lesson,
                returnTo: "Questionario",
              })
            }
          >
            <Text style={styles.buttonText}>Abrir a Bíblia</Text>
          </TouchableOpacity>
        </View>
        

        <View style={styles.optionsContainer}>
          {["A", "B", "C", "D"].map((letter) => {
            const isSelected = answers[currentQuestion.id] === letter;

            let buttonStyle = styles.optionButton;
            if (isSelected && feedback[currentQuestion.id] === "Acertou") {
              buttonStyle = [styles.optionButton, styles.optionCorrect];
            } else if (isSelected && feedback[currentQuestion.id] === "Errou") {
              buttonStyle = [styles.optionButton, styles.optionIncorrect];
            }

            return (
              <TouchableOpacity
                key={letter}
                style={buttonStyle}
                onPress={() => selectAnswer(currentQuestion.id, letter)}
                disabled={disabled}
              >
                <Text style={styles.optionText}>
                  {currentQuestion[optionMap[letter]]}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.footer}>
          {feedback[currentQuestion.id] && (
            <Text
              style={[
                styles.feedbackText,
                {
                  color:
                    feedback[currentQuestion.id] === "Acertou"
                      ? "#4d7549"
                      : "#D93025",
                },
              ]}
            >
              {feedback[currentQuestion.id] === "Acertou"
                ? "RESPOSTA CORRETA"
                : "RESPOSTA INCORRETA"}
            </Text>
          )}

          

          {/* ▶️ Próximo */}
          <TouchableOpacity
            style={[
              styles.nextButton,
              !answered && { opacity: 0.4 }, // 👁️ visual desabilitado
            ]}
            disabled={!answered}
            onPress={() => {
              if (currentIndex + 1 < questions.length) {
                setCurrentIndex(currentIndex + 1);
                setDisabled(false);
                setAnswered(false); // 🔁 reseta para próxima pergunta
              } else {
                const score = calculateScore();
                const points = Math.round(
                  (score.correct / score.total) * 10
                );

                if (points < 7) {
                  navigation.navigate("Resultado", {
                    lesson,
                    lessonId: lesson.id,
                    score,
                    apelAccepted: false,
                  });
                } else {
                  navigation.navigate("Conclusao", {
                    lesson,
                    lessonId: lesson.id,
                    score,
                  });
                }
              }
            }}
          >
            <Text style={styles.nextButtonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}