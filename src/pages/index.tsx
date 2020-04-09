import React from "react";
import SEO from "../components/Seo";
import Dump from "../components/Dump";

export const Index = () => {
  return (
    <div>
      <SEO />
      <h1
        style={{
          background: "black",
          color: "white",
        }}
      >
        Hello, World
      </h1>
      <Dump>{{ hello: "world" }}</Dump>
    </div>
  );
};

export default Index;
