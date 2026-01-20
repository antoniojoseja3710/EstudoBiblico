import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f1ea',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    textAlign: 'center',
    marginBottom: 20,
  },
  verseContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
    backgroundColor: '#2f557f',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#3e8391',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  verseNumberContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffa92d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  verseNumber: {
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    fontSize: 14,
    paddingTop: 4,
  },
  verseText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#fff',
    lineHeight: 22,
  },
});

export default styles