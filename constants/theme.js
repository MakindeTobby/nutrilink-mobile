export const theme = {
  colors: {
    darkPrimary: "#217D51",
    primary: "#32D74B",
    white: "#fff",
    black: "#000",
    grayBg: "#e5e5e5",
    //neutral
    lightPrimary: (opacity) => `rgba(33,125,81, ${opacity})`,
    neutral: (opacity) => `rgba(10,10,10, ${opacity})`,
  },
  fontWeights: {
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  radius: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
  },
};
