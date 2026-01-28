import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
    marginTop: 23,
  },

  content: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },

  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: '#458385',
    marginBottom: 25,
    textAlign: 'center',
  },

  text: {
    fontSize: 18,
    lineHeight: 28,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    textAlign: 'justify',
    paddingHorizontal: 10,
  },

  // Botão principal
  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#43DCE0',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    marginBottom: 40,
    elevation: 3,
  },

  nextButtonText: {
    color: '#458385',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
});

export default styles;
