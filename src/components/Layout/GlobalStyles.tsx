import React from "react";
import { Global, css } from "@emotion/core";
import { normalize } from "polished";

// import { above, spacer } from "~/utils/styles";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={(theme) => css`
        ${normalize()}
        @font-face {
          font-family: "Levvic Bold";
          src: url("./fonts/Livvic-Bold.ttf") format("truetype");
        }

        @font-face {
          font-family: "Levvic SemiBold";
          src: url("./fonts/Livvic-SemiBold.ttf") format("truetype");
        }

        @font-face {
          font-family: "Levvic Regular";
          src: url("./fonts/Livvic-Regular.ttf") format("truetype");
        }

        html,
        body {
          font-family: "Levvic SemiBold", serif;
          font-weight: 600;
          line-height: 25px;
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        /* HTML selector defaults  */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Levvic Bold", serif;
          font-weight: 700;
          margin: 0;
        }

        h1 {
          font-size: 100px;
          line-height: 100px;
        }
        h2 {
          font-size: 64px;
          line-height: 56px;
        }

        h3 {
          font-size: 48px;
          line-height: 48px;
        }

        h4 {
          font-size: 18px;
          line-height: 28px;
        }

        img {
          max-width: 100%;
          margin-bottom: ${theme.spacing.unit * 3}px;
        }
      `}
    />
  );
};

export default GlobalStyles;
