import React from "react";
import { css } from "@emotion/core";
import Header from ".";
import theme from "../../theme";

export default {
  title: "Header",
};

export const MainHeader = () => (
  <div
    css={css`
      min-height: 100vh;
      background-color: ${theme.color.primary.dark};
      padding: 48px 24px 0;
    `}
  >
    <Header />
  </div>
);
