import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import styles from './style';
import EBRepository from '../../database/EBRepository';

export default function Conclusao({ navigation, route }) {
  const { lessonId, score } = route.params;

  const [conclusion, setConclusion] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedChoice, setSelectedChoice] = useState(null); // "Sim" | "Não"

  useEffect(() => {
    const fetchConclusion = async () => {
      try {
        const repo = new EBRepository();
        await repo.init();
        const lesson = await repo.getLessonById(lessonId);
        setConclusion(lesson ? lesson.conclusion : 'Nenhuma conclusão disponível.');
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

  // 🔑 Converte a escolha em boolean
  const apelAccepted = selectedChoice === 'Sim';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.conclusionContent}>
        <Text style={styles.decisionText}>{conclusion}</Text>

        <View style={styles.choiceRow}>
          <TouchableOpacity
            style={[styles.choiceBtn, styles.btnGreen]}
            onPress={() => setSelectedChoice('Sim')}
          >
            <Text style={styles.choiceBtnText}>Sim</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.choiceBtn, styles.btnRed]}
            onPress={() => setSelectedChoice('Não')}
          >
            <Text style={styles.choiceBtnText}>Não</Text>
          </TouchableOpacity>
        </View>
      </View>

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
              apelAccepted // ✅ enviado corretamente
            })
          }
        >
          <Text style={styles.nextButtonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}