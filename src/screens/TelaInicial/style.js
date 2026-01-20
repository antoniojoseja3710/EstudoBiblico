import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  
  content: {
    padding: 20,
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 10,
    color: '#2f557f',
  },

  texto: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#444',
    textAlign:'justify',
  },

  boxReference:{
    alignItems:'flex-end',    
    marginBottom: 4,
  },

  reference: {
    fontSize: 12,
    fontFamily: 'Poppins-Italic',
    color: '#666',
    marginBottom: 4,
  },


  tema: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 2,
    color: '#2f557f',
  },
  frase: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'justify',
    marginBottom: 30,
    color: '#444',
  },

 
  

  button: {
    backgroundColor: '#2f557f',    
    padding: 11,
    paddingTop: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Medium'
  },
  
  adminButton: {
    marginTop: 12,
    backgroundColor: '#6C757D',
    paddingVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },

  adminButtonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 6,
  },
});