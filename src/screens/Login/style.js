import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "flex-start",
    backgroundColor: "#E3E3E3",
    marginTop: 23,
  },

  /* TÍTULO */
  title: {
    fontSize: 26,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginTop: 56,
    marginBottom: 32,
    color: "#458385",
  },

  /* INPUT */
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 6,
    borderWidth: 1.5,
    borderColor: "#458385",
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#73716A",
  },

  helperText: {
    fontSize: 12,
    color: "#73716A",
    paddingLeft: 8,
    marginBottom: 20,
  },

  /* 🔹 BOTÃO PRINCIPAL (CTA) */
  button: {
    backgroundColor: "#458385",
    paddingVertical: 16,
    borderRadius: 12,
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
    fontFamily: "Poppins-Bold",
    letterSpacing: 0.6,
  },

  /* LINKS */
  link: {
    marginTop: 26,
    fontFamily: "Poppins-Medium",
    textAlign: "center",
    color: "#73716A",
    fontSize: 14,
  },

  linkBold: {
    fontFamily: "Poppins-Bold",
    color: "#43DCE0",
  },

  guestText: {
    marginTop: 20,
    textAlign: "center",
    color: "#458385",
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    textDecorationLine: "underline",
  },

  /* LOADING */
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
  },
});