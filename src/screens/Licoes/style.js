import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardSize = (screenWidth - 60) / 4;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3E3E3', 
  },

  // Conteúdo Principal
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },

  licoesText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#458385',
    marginBottom: 2,
  },

  guideTitle: {
    color: "#458385",
    fontFamily: 'Poppins-Bold',
    textAlign: "left",
    marginVertical: 5,
    marginBottom: 20,
    fontSize: 16,
  },

  // Grid de Lições
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  lessonCard: {
    width: cardSize,
    height: cardSize,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
  },

  cardActive: {
    backgroundColor: "#759D9E",
  },

  cardSelected: {
    backgroundColor: "#458385",
  },

  lessonNumberText: {
    color: "#FFFFFF",
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
  },

  starsRow: {
    flexDirection: "row",
    marginTop: 5,
  },

  // Barra de Seleção
  selectionBar: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 11,
    paddingTop: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },

  selectionBarText: {
    color: "#73716A",
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },

  // Footer
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 70,
  },

  // Botão secundário
  blackButton: {
    width: "30%",
    height: "100%",
    backgroundColor: "#778899",
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    opacity: 0.95,
  },

  summaryBox: {
  backgroundColor: "#EAF4F6",
  padding: 10,
  borderRadius: 8,
  marginBottom: 10,
  alignItems: "center"
},
summaryText: {
  fontSize: 14,
  fontWeight: "bold",
  color: "#1F2D2E"
},

  blackButtonText: {
    color: "#eee",
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center',
  },

  // CTA principal
  startButton: {
    width: "30%",
    height: "100%",
    backgroundColor: "#43DCE0",
    padding: 10,
    borderRadius: 6,
  },

  startButtonText: {
    color: "#458385",
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    textAlign: 'center'
  },

  // Loading
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E3E3",
  },

  // Cadeado
  lockIcon: {
    position: "absolute",
    top: 6,
    right: 6,
    backgroundColor: "#FFD700",
    borderRadius: 12,
    padding: 4,
  },
});