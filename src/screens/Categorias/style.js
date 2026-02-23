import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3', 
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 18,
    color: '#458385',
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },

  // Botão principal
  button: {
    width: '100%',
    backgroundColor: '#43DCE0',
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    padding: 11,
    paddingTop: 14,
  },

  buttonText: {
    color: '#555',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
  },

  // Botão voltar / secundário
  backButton: {
    position: 'absolute',
    width: 90,
    height: 50,
    bottom: 60,
    left: 20,
    backgroundColor: '#778899',
    padding: 11,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    opacity: 0.95,
  },

  backButtonText: {
    color: '#eee',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center'
  },
});

export default styles;