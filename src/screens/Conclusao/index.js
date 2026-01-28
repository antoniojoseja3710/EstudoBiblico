import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';
import styles from './style';
import EBRepository from '../../database/EBRepository';

export default function Conclusao({ navigation, route }) {
  const { lessonId, score } = route.params;

  const [conclusion, setConclusion] = useState('');
  const [loading, setLoading] = useState(true);

  // Controle da decisão
  const [selectedChoice, setSelectedChoice] = useState(null); // "Sim" | "Não"
  const [decisionLocked, setDecisionLocked] = useState(false);

  const [acceptMessage, setAcceptMessage] = useState('');

  useEffect(() => {
    const fetchConclusion = async () => {
      try {
        const repo = new EBRepository();
        await repo.init();
        const lesson = await repo.getLessonById(lessonId);
        setConclusion(
          lesson ? lesson.conclusion : 'Nenhuma conclusão disponível.'
        );
      } catch (error) {
        console.error('Erro ao carregar a conclusão:', error);
        setConclusion('Erro ao carregar a conclusão.');
      } finally {
        setLoading(false);
      }
    };

    fetchConclusion();
  }, [lessonId]);

  if (loading) {
    return (
      <View style={styles.containerCenter}>
        <ActivityIndicator size="large" color="#007982" />
      </View>
    );
  }

  // Converte a escolha em boolean
  const apelAccepted = selectedChoice === 'Sim';

  // Clique único
  const handleChoice = (choice) => {
    if (decisionLocked) return;

    setSelectedChoice(choice);
    setDecisionLocked(true);

    if (choice === 'Sim') {
      setAcceptMessage(getAcceptLessonMessage());
    }
  };

  const getAcceptLessonMessage = () => {
    const messages = [
      "Que decisão abençoada! Que Deus te ajude a viver esta lição todos os dias.",
      "Amém! Colocar a Palavra em prática transforma vidas.",
      "Que o Espírito Santo te fortaleça a viver o que aprendeu.",
      "Sua decisão alegra o céu! Persevere.",
      "Viver esta lição é um passo de fé. Continue firme!",
      "Que esta lição produza frutos em sua vida.",
      "Deus honra quem decide viver a verdade.",
      "Uma escolha sábia! Que Deus te conduza.",
      "Que esta lição seja visível em suas atitudes.",
      "Aprender é importante, viver é essencial. Parabéns!",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conclusionContent}>
        <Text style={styles.title}>Minha Decisão</Text>

        <Text style={styles.decisionText}>{conclusion}</Text>

        {/* BOTÕES SIM / NÃO */}
        <View style={styles.choiceRow}>
          <TouchableOpacity
            disabled={decisionLocked}
            accessibilityState={{ disabled: decisionLocked }}
            style={[
              styles.choiceBtn,
              styles.btnGreen,
              decisionLocked && styles.disabledButton,
              selectedChoice === 'Sim' && styles.selectedButton
            ]}
            onPress={() => handleChoice('Sim')}
          >
            <Text style={styles.choiceBtnText}>Sim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={decisionLocked}
            accessibilityState={{ disabled: decisionLocked }}
            style={[
              styles.choiceBtn,
              styles.btnRed,
              decisionLocked && styles.disabledButton,
              selectedChoice === 'Não' && styles.selectedButton
            ]}
            onPress={() => handleChoice('Não')}
          >
            <Text style={styles.choiceBtnText}>Não</Text>
          </TouchableOpacity>

        </View >
        <View style={styles.feedbackBox}>
          {selectedChoice === 'Sim' && acceptMessage !== '' && (
            <Text style={styles.feedbackText}>
              {acceptMessage}
            </Text>
          )}
        </View>


      </View>

      {/* BOTÃO PRÓXIMO */}
      <View style={styles.footerRight}>
        <TouchableOpacity
          style={[
            styles.nextButton,
            !selectedChoice && { opacity: 0.5 }
          ]}
          disabled={!selectedChoice}
          onPress={() =>
            navigation.navigate('Resultado', {
              lessonId,
              score,
              apelAccepted
            })
          }
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}