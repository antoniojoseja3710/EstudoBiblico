import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    padding: 10,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    textAlign: "center",
    marginTop: 60,
    marginBottom: 30,
    color: "#2f557f"
  },

  userName: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    fontWeight: "600",
    color: "#333",
  },

  userEmail: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#666",
    marginBottom: 8,
  },

  input: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
    color: "#333",
  },

  cardActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
    marginTop: 5,
  },

  editText: {
    color: "#3e8391",
    fontFamily: 'Poppins-Medium',
  },

  deleteText: {
    color: "#f00",
    fontFamily: 'Poppins-Medium',
  },

  saveText: {
    color: "#4d7549",
    fontFamily: 'Poppins-Medium',
  },

  cancelText: {
    color: "#999",
    fontFamily: 'Poppins-Medium',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalBox: {
    width: width * 0.85,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },
});