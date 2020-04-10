import React from "react";
import { UIStore } from "../stores";
import { useLocalStore } from "mobx-react-lite";
import { ThemeProvider } from "emotion-theming";
import theme from "../styles/theme";

type Stores = {
  ui: UIStore;
};

export const RootStoreContext = React.createContext<Stores | null>(null);

export const RootStoreProvider = ({ children }: { children: any }) => {
  const stores = useLocalStore(() => {
    return {
      ui: new UIStore(),
    };
  });
  return (
    <RootStoreContext.Provider value={stores}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RootStoreContext.Provider>
  );
};
