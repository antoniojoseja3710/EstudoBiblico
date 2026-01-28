import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  /*CONTAINER */
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3',
    paddingHorizontal: 20,
    paddingTop: 24,
    marginTop: 23,
  },

  /*TÍTULO */
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Bold',
    color: '#458385',
    marginBottom: 22,
    textAlign: 'center',
  },

  /*ITEM / CARD */
  item: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderLeftWidth: 5,
    borderLeftColor: '#43DCE0',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  /*TEXTO DO ITEM */
  itemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#73716A',
    lineHeight: 22,
  },
});

export default styles;