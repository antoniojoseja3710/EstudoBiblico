import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f1ea",
    paddingHorizontal: 24,
    justifyContent: "flex-start",
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F3FA",
  },

  title: {
   fontSize: 26,
  fontFamily: 'Poppins-Medium',
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    color: "#2f557f"
  },

  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },

  button: {
    backgroundColor: "#2f557f",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    letterSpacing: 0.5,
  },

  link: {
    textAlign: "center",
    marginTop: 26,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: "#555",
  },

  linkBold: {
    color: "#2f557f", 
    fontFamily: 'Poppins-Medium',
  },
});