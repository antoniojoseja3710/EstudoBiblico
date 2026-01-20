import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1EA',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    borderRadius: 10,
    backgroundColor: '#2f557f',
    borderWidth: 1,
    borderColor: '#3e8391',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    paddingTop: 4
  },
  itemText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#ffa92d',
  },
});

export default styles