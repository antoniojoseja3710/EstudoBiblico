import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: "#E3E3E3",
    justifyContent: "center",
    paddingVertical: 20,
  },

  /* CARD PRINCIPAL */
  card: {
    backgroundColor: "#458385",
    marginHorizontal: 22,
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 22,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 7,
  },

  /* TÍTULO PRINCIPAL */
  title: {
    fontSize: 30,
    fontFamily: "Playfair_144pt-Bold",
    color: "#FFD700",
    marginBottom: 14,
  },

  /* CONTEXTO */
  context: {
    width: "100%",
    marginBottom: 6,
  },

  contextText: {
    fontSize: 11,
    fontFamily: "Poppins-Medium",
    color: "#E3E3E3",
    textTransform: "uppercase",
    letterSpacing: 1,
  },

  lessonTitle: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },

  /* ESTRELAS */
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 14,
  },

  /* SCORE */
  scoreCircle: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#FFD700",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 18,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    paddingTop: 10,
  },

  score: {
    fontSize: 46,
    fontFamily: "Poppins-Bold",
    color: "#458385",
  },

  /* TEXTO RESULTADO */
  resultText: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#FFFFFF",
    textAlign: "justify",
    marginTop: 12,
    lineHeight: 22,
  },

  /* BOTÕES */
  buttons: {
    marginTop: 28,
    width: "100%",
    paddingHorizontal: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  /* BOTÕES SECUNDÁRIOS */
  secondaryButton: {
    backgroundColor: "#43DCE0",
    paddingVertical: 13,
    width: (width - 80) / 2,
    borderRadius: 10,
    alignItems: "center",
    margin: 14,
  },

  secondaryButtonText: {
    color: "#458385",
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },

  /* BOTÃO PRINCIPAL */
  primaryButton: {
    backgroundColor: "#E3E3E3",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 16,
  },

  primaryText: {
    color: "#458385",
    fontSize: 15,
    fontFamily: "Poppins-Bold",
  },

  /* MENSAGEM DE ACEITAÇÃO */
  feedbackText: {
    marginTop: 20,
    fontSize: 15,
    textAlign: "center",
    color: "#FFD700",
    fontFamily: "Poppins-Medium",
    paddingHorizontal: 14,
  },
    
});