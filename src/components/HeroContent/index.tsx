import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";
import { above } from "../../utils/styles";
import BgPatterns from "../BgPatterns";

const HeroContent = () => (
  <div
    css={css`
      margin-top: 80px;
      text-align: center;

      ${above(
        "md",
        css`
          margin-top: 112px;
        `
      )}
      ${above(
        "xxl",
        css`
          max-width: max-content;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          /* margin: auto; */
          margin-top: 130px;
          /* max-width: 1120px; */
          display: grid;
          grid-template-columns: 1fr 445px;
          grid-column-gap: 30px;
          align-items: end;
        `
      )}
    `}
  >
    <h1
      css={(theme: Theme) => css`
        font-weight: 700;
        font-size: 40px;
        line-height: 40px;
        span {
          color: ${theme.color.primary.accent};
        }

        ${above(
          "md",
          css`
            font-size: 64px;
            line-height: 56px;
          `
        )}

        ${above(
          "xxl",
          css`
            font-size: 100px;
            line-height: 100px;
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

        ${above(
          "md",
          css`
            margin: auto;
            margin-top: 24px;
            max-width: 457px;
          `
        )}

        ${above(
          "xxl",
          css`
            font-size: 18px;
            line-height: 28px;
            margin: 0;
          `
        )}
      `}
    >
      Finding the right people and building high performing teams can be hard.
      Most companies aren’t tapping into the abundance of global talent. We’re
      about to change that.
    </p>
    <div />
    <BgPatterns />
  </div>
);

export default HeroContent;
