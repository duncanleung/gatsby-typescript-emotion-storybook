import React from "react";
import { RootStoreContext } from "../contexts/RootStoreContext";

export default () => {
  const stores = React.useContext(RootStoreContext);
  if (!stores) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return stores;
};
