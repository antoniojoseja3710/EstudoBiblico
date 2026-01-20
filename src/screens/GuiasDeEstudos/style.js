import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea',   
  },

  content: {
    padding:20,
    alignItems:"center"
  },

  guideText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    marginBottom: 30,
  },
  
  button: {
    width: '100%',
    backgroundColor: '#2f557f',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    paddingTop: 3,
  },

  backButton: {
    position: 'absolute',
    bottom: 60,
    left: 20,
    backgroundColor: '#556677',
    padding: 11,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
  },
});

export default styles;