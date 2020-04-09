import React from "react";
// eslint-disable-next-line no-unused-vars
import { RootStoreProvider } from "./src/contexts/RootStoreContext";

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <RootStoreProvider>{element}</RootStoreProvider>
);
