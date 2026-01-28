import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  /* CONTAINER */
  container: {
    flex: 1,
    backgroundColor: "#E3E3E3",
    padding: 16,
    marginTop: 23,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  /* TÍTULO */
  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    textAlign: "center",
    marginTop: 50,
    marginBottom: 24,
    color: "#458385",
  },

  /* CARD */
  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
    borderLeftWidth: 4,
    borderLeftColor: "#43DCE0",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  userName: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: "#458385",
    marginBottom: 2,
  },

  userEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#73716A",
    marginBottom: 10,
  },

  /* INPUT */
  input: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 12,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: "#73716A",
  },

  /* AÇÕES */
  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 18,
    marginTop: 8,
  },

  editText: {
    color: "#43DCE0",
    fontFamily: 'Poppins-Medium',
  },

  saveText: {
    color: "#458385",
    fontFamily: 'Poppins-Bold',
  },

  cancelText: {
    color: "#73716A",
    fontFamily: 'Poppins-Medium',
  },

  deleteText: {
    color: "#D9534F",
    fontFamily: 'Poppins-Medium',
  },

  /* MODAL */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: width * 0.85,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 22,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    marginBottom: 16,
    textAlign: "center",
    color: "#458385",
  },
});