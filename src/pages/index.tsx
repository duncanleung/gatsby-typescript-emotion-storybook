import React from "react";
import SEO from "../components/Seo";
import { PrimaryButton, PrimaryButtonDark } from "../components/Button";
import { useTheme } from "emotion-theming";
import { css } from "@emotion/core";
import Theme from "../styles/theme";

export const Index = () => {
  let theme = useTheme<typeof Theme>();
  return (
    <div
      css={css`
        display: flex;
        height: 100vh;
        > * {
          flex: 1;
          padding: 20px;
        }
      `}
    >
      <div
        css={css`
          background: ${theme.colors.darkGreen};
        `}
      >
        <SEO />
        <h1 className="h1-large">Quick waltz</h1>

        <h1 className="h1-small">Let&apos;s get started</h1>
        <PrimaryButton>contact us</PrimaryButton>
      </div>

      <div
        css={css`
          background: ${theme.colors.white};
        `}
      >
        <PrimaryButtonDark>contact us</PrimaryButtonDark>
      </div>
    </div>
  );
};

export default Index;
