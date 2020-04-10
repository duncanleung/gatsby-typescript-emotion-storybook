import React from "react";
import RootProvider from "./src/providers";

export default function RootWrapper({ element }) {
  return <RootProvider>{element}</RootProvider>;
}
