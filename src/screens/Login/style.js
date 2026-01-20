import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    backgroundColor: "#f3f1ea",
  },

  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    textAlign: "center",
    marginTop: 60,
    marginBottom: 30,
    color: "#2f557f"
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 14,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    fontFamily: 'Poppins-Medium',
  },

  button: {
    backgroundColor: "#2f557f",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  link: {
    marginTop: 20,
    fontFamily: 'Poppins-Medium',
    textAlign: "center",
    color: "#555",
  },

  linkBold: {
    fontFamily: 'Poppins-Medium',
    color: "#2f557f",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  guestText: {
  marginTop: 20,
  textAlign: "center",
  color: "#F5B642",
  fontSize: 15,
  fontFamily: 'Poppins-Medium',
  textDecorationLine: "underline",
}
});