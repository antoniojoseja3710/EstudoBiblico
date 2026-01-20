import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea',
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  questionText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#2f557f',
    marginBottom: 1,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 16, // Espaçamento entre botões
  },
  optionButton: {
    backgroundColor: '#3e8391',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // Sombra leve
    elevation: 2,
  },
  optionCorrect: {
    backgroundColor: '#5ea3b1', // Azul mais claro quando acerta
  },
  optionIncorrect: {
    backgroundColor: '#2e7381', // escurece levemente
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    flex:1,
    marginBottom: 10,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent:'center',
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
   nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3e8391',
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 0,   
    padding: 11,
    paddingTop: 14,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
  boxButton:{
    alignItems:'flex-end',
    marginBottom:30,
  },
   button: {
    backgroundColor: '#2f557f',
    borderRadius: 8,
    padding: 4,
    paddingHorizontal:8,
  },
  buttonText: {
    color: '#ffa92d',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',

  },

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
  backgroundColor: "#3e8391",
},

progressText: {
  fontSize: 12,
  color: "#666",
  marginBottom: 12,
  textAlign: "right",
},
});