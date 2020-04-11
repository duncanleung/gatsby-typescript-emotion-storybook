import { Theme } from "@theme/styled";

const themeColors = {
  midnightGreen: "#014E56",
  lightCoral: "#F67E7E",
  white: "#FFFFFF",
  raptureBlue: "#79C8C7",
  policeBlue: "#2C6269",
  deepJungleGreen: "#004047",
  veryDark: "#002529",
  sacramentoGreen: "#012F34",
  darkGreen: "#002529",
};

const theme: Theme = {
  color: {
    primary: {
      dark: themeColors.midnightGreen,
      accent: themeColors.lightCoral,
      light: themeColors.white,
    },
    secondary: {
      accent: themeColors.raptureBlue,
      light: themeColors.policeBlue,
      dark: themeColors.deepJungleGreen,
      darker: themeColors.sacramentoGreen,
      darkest: themeColors.darkGreen,
    },
    text: {
      light: themeColors.white,
      dark: themeColors.darkGreen,
      accent: themeColors.lightCoral,
    },
  },
  spacing: {
    unit: 8,
  },
  shape: {
    borderRadius: {
      button: 24,
    },
  },
};

export default theme;
