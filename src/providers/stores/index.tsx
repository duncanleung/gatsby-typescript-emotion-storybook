import React from "react";
import UIStore from "./ui";
import { useLocalStore } from "mobx-react-lite";

type Stores = {
  ui: UIStore;
};

function initStores() {
  return {
    ui: new UIStore(),
  };
}

const StoreContext = React.createContext<Stores | null>(null);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const stores = useLocalStore(() => initStores());
  return (
    <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
