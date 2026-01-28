import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    marginTop: 23,    
  },

  /* CONTEÚDO */
  content: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },

  /* SUBTÍTULO */
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    marginBottom: 12,
    color: '#458385',
  },

  /* TEXTO PRINCIPAL */
  texto: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    textAlign: 'justify',
    lineHeight: 22,
    marginBottom: 2,
  },

  /* REFERÊNCIA */
  boxReference: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  reference: {
    fontSize: 12,
    fontFamily: 'Poppins-Italic',
    color: '#458385',
  },

  /* TEMA */
  tema: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    marginBottom: 4,
    color: '#458385',
  },

  /* FRASE */
  frase: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    textAlign: 'justify',
    marginBottom: 26,
    color: '#73716A',
    lineHeight: 22,
  },

  /* BOTÃO PRINCIPAL */
  button: {
    backgroundColor: '#43DCE0',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 18,
    elevation: 2,
  },

  buttonText: {
    color: '#555',
    fontSize: 15,
    fontFamily: 'Poppins-Bold',
  },

  /* BOTÃO ADMIN / SECUNDÁRIO */
  adminButton: {
    backgroundColor: '#458385',
    paddingVertical: 13,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.95,
  },

  adminButtonText: {
    color: '#eee',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    marginLeft: 6,
  },
});