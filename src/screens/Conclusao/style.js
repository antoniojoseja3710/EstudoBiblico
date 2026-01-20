import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea', // Cor creme de fundo
    paddingHorizontal: 25,
  },
  conclusionContent: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 40
  },
  decisionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    lineHeight: 32,
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
  },
  btnGreen: {
    backgroundColor: '#4d7549', 
  },
  btnRed: {
    backgroundColor: '#d00', 
  },
  choiceBtnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerRight: {
    paddingBottom: 40,
    alignItems: 'flex-end', // Alinha o botão "Próximo" à direita
  },
  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3e8391',
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 60,   
    padding: 11,
    paddingTop: 14,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});