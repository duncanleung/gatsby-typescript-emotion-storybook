import React from "react";
import { ThemeProvider } from "emotion-theming";
import theme from "../styles/theme";
import StoreProvider from "./stores";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StoreProvider>
  );
};

export default RootProvider;
