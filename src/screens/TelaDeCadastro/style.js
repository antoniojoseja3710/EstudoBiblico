import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3E3E3",
    paddingHorizontal: 24,
    justifyContent: "flex-start",
    marginTop: 23,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
  },

  title: {
    fontSize: 26,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    marginTop: 32,
    marginBottom: 28,
    color: "#458385",
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#458385",
    color: "#458385",
  },

  button: {
    backgroundColor: "#458385",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 16,
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    letterSpacing: 0.6,
  },

  link: {
    textAlign: "center",
    marginTop: 28,
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#73716A",
  },

  linkBold: {
    color: "#43DCE0",
    fontFamily: "Poppins-Medium",
  },

  helperText: {
    fontSize: 12,
    color: "#73716A",
    paddingLeft: 6,
    marginBottom: 14,
  },
});