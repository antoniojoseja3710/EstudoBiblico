import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    paddingHorizontal: 18,
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

  /* ITEM / CARD */
  item: {
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 4,
    borderLeftColor: '#43DCE0',

    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 18,
    marginBottom: 14,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  /* TEXTO DO ITEM */
  itemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    textAlign: 'center',
  },
});

export default styles;