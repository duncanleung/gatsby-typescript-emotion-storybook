import React from "react";
import { RootStoreProvider } from "./src/contexts/RootStoreContext";
import { ThemeProvider } from "emotion-theming";

const theme = {
  colors: {
    midnightGreen: "#014E56",
    lightCoral: "#F67E7E",
    white: "#FFFFFF",
    raptureBlue: "#79C8C7",
    policeBlue: "#2C6269",
    deepJungleGreen: "#004047",
    veryDark: "#002529",
    sacramentoGreen: "#012F34",
    darkGreen: "#002529",
  },
};

export default function RootWrapper({ element }) {
  return (
    <RootStoreProvider>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </RootStoreProvider>
  );
}
