/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { css } from "@emotion/core";

import GlobalStyles from "./GlobalStyles";
import Header from "../Header";
import Footer from "../Footer";

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
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
