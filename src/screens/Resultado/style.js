import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  /* 🧱 CONTAINER GERAL */
  container: {
    flex: 1,
    backgroundColor: "#F7F4EE",
    justifyContent: "center",
  },

  /* 🎴 CARD PRINCIPAL */
  card: {
    backgroundColor: "#2F557F",
    marginHorizontal: 24,
    borderRadius: 16,
    paddingVertical: 26,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  /* 🏷️ TÍTULOS */
  title: {
    fontSize: 32,
    fontFamily: 'Playfair_144pt-Bold',
    color: "#F2B544",
    marginBottom: 16,
  },

  context:{
    textAlign: 'left',
    width: "100%",
    marginBottom: 4,
  },

  contextText: {
    fontSize: 10,
    fontFamily: 'Poppins-Medium',
    color: "#aaa",
    textTransform: "uppercase",
    letterSpacing: 1,

  }, 
  lessonTitle: {
  fontSize: 16,
  fontFamily: 'Poppins-Bold',
  color: "#FFFFFF",
  marginBottom: 4, 
},

  /* ⭐ ESTRELAS */
  starsContainer: {
    flexDirection: "row",
  justifyContent: "center",
  marginVertical: 12,
  },

  /* 🔢 NOTA */
  scoreCircle: {
  width: 110,
  height: 110,
  borderRadius: 55,
  backgroundColor: "#F2B544",
  alignItems: "center",
  justifyContent: "center",
  marginVertical: 20,
  padding:20,
  shadowColor: "#000",
  shadowOpacity: 0.3,
  shadowRadius: 6,
  elevation: 6,
},
  score: {
    fontSize: 48,
    fontFamily: 'Poppins-Bold',
    color: "#2F557F",
  },

  /* 📝 TEXTO RESULTADO */
  resultText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#fff",
    textAlign: "justify",
    marginTop: 10,
    lineHeight: 22,
  },

  /* 🔘 ÁREA DE BOTÕES */
  buttons: {
    marginTop: 26,
    paddingHorizontal: 24,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* 🔹 BOTÕES SECUNDÁRIOS */
  secondaryButton: {
    backgroundColor: "#3e8391",
    paddingVertical: 12,
    paddingTop: 14,
    width: (width - 64) / 2,
    borderRadius: 8,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#333",
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
  },

  /* 🟢 BOTÃO PRINCIPAL */
  primaryButton: {
    backgroundColor: "#4F6F52",
    padding: 11,
    paddingTop: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 14,
  },

  primaryText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
 
acceptMessage: {
  marginTop: 18,
  fontSize: 15,
  textAlign: "center",
  color: "#fff",
  fontWeight: "600",
  paddingHorizontal: 10,
},
});