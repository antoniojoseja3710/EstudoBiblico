import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    marginTop: 23,
  },

  content: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },

  guideText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#458385',
    marginBottom: 2,
  },

  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: '#458385',
    textAlign: 'center',
    marginBottom: 10,
  },

  // Botão principal
  button: {
    width: '100%',
    backgroundColor: '#43DCE0',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#555',
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 3,
  },

  buttonTextDescription: {
    color: '#73716A',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 3,
  },

  // Botão secundário
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

  listContainer: {
    flex: 1,
    width: '100%',
  },

  listContent: {
    paddingBottom: 120,
  },
});

export default styles;