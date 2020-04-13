import React from "react";
import { Theme } from "@theme/styled";
import { css } from "@emotion/core";
import { above } from "../../utils/styles";

const Hero: React.FC<{}> = ({ children }) => {
  return (
    <section
      css={(theme: Theme) => css`
        background-color: ${theme.color.primary.dark};
        padding: 48px 24px 0;

        ${above(
          "md",
          css`
            padding: 64px 40px 0;
          `
        )}

        ${above(
          "lg",
          css`
            padding: 73px 165px 0;
          `
        )}
      `}
    >
      {children}
    </section>
  );
};

export default Hero;
