import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea',
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  content: {
    marginTop: 20,
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2f557f',
    marginBottom: 25,
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    lineHeight: 28,
    color: '#333333',
    textAlign: 'justify', // deixa o texto uniforme
    paddingHorizontal: 10,
  },
  nextButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#3e8391',
    padding: 11,
    paddingTop: 14,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginBottom: 40,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default styles;