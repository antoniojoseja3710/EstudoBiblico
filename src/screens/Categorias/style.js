import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea',   
  },

  content: {
    padding:20,
  },

  title: {
    fontSize: 16,
    color: '#2f557f',
    marginBottom: 30,
    textAlign:"center",
    fontFamily: 'Poppins-Bold',
  },

  button: {
    width: '100%',
    backgroundColor: '#2f557f',
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'center',
    padding: 11,
    paddingTop: 14,
    
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
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
    color: '#ddd',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },
});

export default styles;