import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
  },

  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },

  questionText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    marginBottom: 6,
    lineHeight: 28,
  },

  optionsContainer: {
    gap: 16,
    marginBottom: 20,
  },

  // 🔹 Opção padrão
  optionButton: {
    backgroundColor: '#43DCE0',
    width: "100%",
    height: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  // Resposta correta
  optionCorrect: {
    backgroundColor: '#63fCf0',
  },

  // Resposta incorreta
  optionIncorrect: {
    backgroundColor: '#759D9E',
  },

  optionText: {
    color: '#555',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    flexShrink: 1,
  },

  footer: {
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },

  feedbackText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginBottom: 10,
    color: '#458385',
  },

  // 🔹 Botão Próximo (CTA)
  nextButton: {
    width: 120,
    alignSelf: 'flex-end',
    backgroundColor: '#43DCE0',
    paddingHorizontal: 25,
    borderRadius: 6,
    marginBottom: 50,
    marginRight: 30,
    padding: 14,
  },

  nextButtonText: {
    color: '#555',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },

  openBoxButton: {
    alignItems: 'flex-end',
    marginBottom: 30,
  },

  // 🔸 Botão secundário
  openButton: {
    backgroundColor: '#458385',
    borderRadius: 8,
    padding: 4,
    paddingHorizontal: 8,
    opacity: 0.9,
  },

  openButtonText: {
    color: '#eee',
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },

  // 📊 Progresso
  progressContainer: {
    height: 8,
    width: "100%",
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 6,
  },

  progressBar: {
    height: "100%",
    backgroundColor: "#458385",
  },

  progressText: {
    fontSize: 12,
    color: "#73716A",
    marginBottom: 12,
    textAlign: "right",
  },
});