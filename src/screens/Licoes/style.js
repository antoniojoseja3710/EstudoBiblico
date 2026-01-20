import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const cardSize = (screenWidth - 60) / 4; // 4 colunas com espaçamento

export default StyleSheet.create({
   container: {
    flex: 1,
    backgroundColor: '#f3f1ea',   
  },

  // 📦 Conteúdo Principal
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  licoesText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: '#2f557f',
    marginBotton: 2,
  },
  guideTitle: {
    color: "#2f557f",
    fontFamily: 'Poppins-Medium',
    textAlign: "left",
    marginVertical: 5,
    marginBottom: 20,
    fontSize: 16,
  },

  // 🔲 Grid de Lições
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
    backgroundColor: "#2f557f",
  },
  cardSelected: {
    backgroundColor: "#4f759f",
  },
  lessonNumberText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
  },
  starsRow: {
    flexDirection: "row",
    marginTop: 5,
  },

  // 📊 Barra de Seleção
  selectionBar: {
    backgroundColor: "#aabbcc",
    paddingVertical: 11,
    paddingTop: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  selectionBarText: {
    color: "#000",
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },

  // 🔘 Footer
  footerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 70
  },
  blackButton: {
    backgroundColor: "#556677",
    padding: 11,
    paddingTop: 14,
    paddingHorizontal: 20,
    borderRadius: 6,
    
  },

  blackButtonText: {
    color: '#ddd',
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
  },

  startButton: {
    backgroundColor: "#3e8391",
    padding: 11,
    paddingTop: 14,
    paddingHorizontal: 25,
    borderRadius: 6,
  },
  startButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  // ⏳ Loading
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9E6D1",
  },
});