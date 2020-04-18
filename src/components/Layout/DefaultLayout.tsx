import React from "react";

import GlobalStyles from "./GlobalStyles";
import Header from "../Header";
import Footer from "../Footer";

type Props = {};

const DefaultLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
