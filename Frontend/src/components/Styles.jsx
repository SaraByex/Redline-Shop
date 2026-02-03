export const colors = {
  bgDark: "#111",
  bgCard: "#3f3e3e",
  bgLighterCard: "#686666",
  bgLight: "#f8f8f8",
  primary: "#b30000",   // red theme
  textLight: "#eee",
  textWhite: "#fff",
  borderDark: "#333",
  borderLight: "#ccc"
};

export const breakpoints = {
  mobile: 767,
  tablet: 1023
};

export const styles = {
  layoutRow: {
    display: "flex",
    alignItems: "center"
  },

  pageContainer: {
    display: "flex",
    minHeight: "90vh",
    padding: 24,
    gap: 24,
    backgroundColor: colors.bgLight
  },

  card: {
    border: `1px solid ${colors.primary}`,
    borderRadius: 6,
    padding: 16,
    backgroundColor: colors.bgCard,
    color: colors.textLight
  },

  buttonPrimary: {
    backgroundColor: colors.primary,
    color: colors.textWhite,
    border: "none",
    padding: "8px 12px",
    borderRadius: 4,
    cursor: "pointer"
  },

  label: {
    width: 100,
    fontWeight: "bold",
    flexShrink: 0,
    color: colors.textLight
  },

  select: {
    padding: "4px 8px",
    borderRadius: 4,
    border: `1px solid ${colors.borderLight}`,
    backgroundColor: colors.bgCard,
    color: colors.textLight
  },

  colorBox: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: `1px solid ${colors.borderDark}`
  },

  sizeBox: {
    border: `1px solid ${colors.borderDark}`,
    padding: "2px 4px",
    borderRadius: 5,
    fontSize: 14,
    cursor: "pointer",
    backgroundColor: colors.bgLighterCard,
    color: colors.textLight
  },

  sizeContainer: {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px"
},

  image: {
    width: "100%",
    height: 150,
    objectFit: "cover"
  },

  formContainer: {
    maxWidth: 400,
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },

  linkPrimary: {
    color: colors.primary,
    textDecoration: "none"
  },

  catalogue: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 16
  }
};

export const responsive = {
  shopMobile: {
    flexDirection: "column",
    padding: 12
  },

  shopDesktop: {
    flexDirection: "row",
    padding: 24
  },

  cartMobile: {
    position: "static",
    marginTop: 0,
    width: "100%"
  },

  cartDesktop: {
    position: "sticky",
    marginTop: 54,
    width: "auto"
  },

  navMobile: {
    flexDirection: "column",
    alignItems: "stretch",
    gap: 12,
    padding: 12
  },

  navDesktop: {
    flexDirection: "row",
    alignItems: "center",
    padding: "0 20px"
  },

  navLinksMobile: {
    flexDirection: "column",
    gap: 12
  },

  navLinksDesktop: {
    flexDirection: "row",
    gap: 24
  },

  navUserMobile: {
    justifyContent: "space-between"
  },

  navUserDesktop: {
    justifyContent: "flex-end"
  }
};
