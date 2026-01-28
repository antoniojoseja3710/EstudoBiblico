import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    paddingHorizontal: 25,
    marginTop: 23,
  },

  conclusionContent: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 6,
    color: '#458385',
  },

  decisionText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    textAlign: 'justify',
    lineHeight: 30,
    marginBottom: 40,
  },

  choiceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  choiceBtn: {
    width: '35%',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },

  btnGreen: {
    backgroundColor: '#458385',
  },

  btnRed: {
    backgroundColor: '#73716A',
  },

  choiceBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },

  footerRight: {
    paddingBottom: 40,
    alignItems: 'flex-end',
  },

  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#43DCE0',
    paddingHorizontal: 28,
    borderRadius: 8,
    marginBottom: 60,
    paddingVertical: 14,
    elevation: 3,
  },

  nextButtonText: {
    color: '#458385',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },

  disabledButton: {
    opacity: 0.5,
  },

  selectedButton: {
    borderWidth: 2,
    borderColor: '#FAD928',
  },

  feedbackBox: {
  marginTop: 18,
  padding: 14,
  borderRadius: 12,
  backgroundColor: "#458385",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

  feedbackText: {
  flex: 1,
  color: "#FFFFFF",
  fontFamily: "Poppins-Medium",
  fontSize: 14,
  lineHeight: 20,
  },  
});