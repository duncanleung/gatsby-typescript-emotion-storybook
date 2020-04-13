import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";
import { above } from "../../utils/styles";
import BgPatterns from "../BgPatterns";

const HeroContent = () => (
  <>
    <h1
      css={(theme: Theme) => css`
        margin-top: 80px;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        span {
          color: ${theme.color.primary.accent};
        }

        ${above(
          "md",
          css`
            margin-top: 112px;
            font-size: 64px;
            line-height: 56px;
          `
        )}
      `}
    >
      Find the <br />
      best <span>talent</span>
    </h1>
    <p
      css={css`
        margin-top: 18px;
        font-size: 15px;
        line-height: 28px;
        text-align: center;

        ${above(
          "md",
          css`
            margin: auto;
            margin-top: 24px;
            max-width: 457px;
          `
        )}
      `}
    >
      Finding the right people and building high performing teams can be hard.
      Most companies aren’t tapping into the abundance of global talent. We’re
      about to change that.
    </p>
    <BgPatterns />
  </>
);

export default HeroContent;
