import { StyleSheet } from "react-native";

export default StyleSheet.create({
  /* ===== CONTAINER DO BANNER ===== */
  bannerContainer: {
    width: "100%",
    height: 160,
    position: "relative",
    marginBottom: 20,
  },

  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bannerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.2)",
  },

  /* ===== TEXTO DO BANNER ===== */
  bannerTextContainer: {
    position: "absolute",
    top: 15,
    right: 20,
    alignItems: "flex-end",
  },

  headerTitle: {
    fontSize: 28,
    fontFamily: "Playfair-Display",
    textAlign:'center',

    color: "#FFD700",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },

  headerSubtitle: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: "#ddd",
    lineHeight: 18,
    textAlign: "right",
    textShadowColor: "rgba(0,0,0,0.4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

  /* ===== USUÁRIO LOGADO ===== */
  userBadge: {
    position: "absolute",
    bottom: 6,
    right: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },

  userName: {
    color: "#FFFFFF",
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Playfair_144pt-Bold',
    marginRight: 6,
  },

  logoutButton: {
    marginLeft: 6,
    padding: 4,
  },

  /* ===== BOTÃO LOGIN ===== */
  loginTopButton: {
    position: "absolute",
    bottom: 6,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 3,
  },

  loginIconWrapper: {
    width: 26,
    height: 26,
    borderRadius: 14,
    backgroundColor: "#E6EFEF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 6,
  },

  loginTopText: {
    fontSize: 14,
    fontFamily: 'Playfair_144pt-Bold',
    color: "#456C84",
  },
});