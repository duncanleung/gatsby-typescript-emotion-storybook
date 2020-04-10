import React from "react";
import { UIStore } from "../stores";
import { useLocalStore } from "mobx-react-lite";

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
      {children}
    </RootStoreContext.Provider>
  );
};
