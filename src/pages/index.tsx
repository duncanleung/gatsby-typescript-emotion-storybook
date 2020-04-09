import React from "react";
import SEO from "../components/Seo";
import Dump from "../components/Dump";

export const Index = () => {
  return (
    <div>
      <SEO />
      <h1 className="h1-large">Quick waltz</h1>

      <h1 className="h1-small">Let's get started</h1>
      <Dump>{{ hello: "world" }}</Dump>
    </div>
  );
};

export default Index;
