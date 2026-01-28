import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    paddingHorizontal: 20,
    paddingTop: 24,
    marginTop: 23,
  },

  /* TÍTULO */
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#458385',
    textAlign: 'center',
    marginBottom: 22,
  },

  /* BLOCO DO VERSO */
  verseContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 14,
    borderLeftWidth: 4,
    borderLeftColor: '#fff',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 2,
  },

  /* NÚMERO DO VERSO */
  verseNumberContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#999',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  verseNumber: {
    fontFamily: 'Poppins-Bold',
    color: '#000',
    fontSize: 14,
  },

  /* TEXTO DO VERSO */
  verseText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    lineHeight: 26,
  },
});

export default styles;