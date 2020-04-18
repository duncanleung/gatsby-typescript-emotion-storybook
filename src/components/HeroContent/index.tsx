import React from "react";
import { css } from "@emotion/core";
import { rem } from "polished";
import { Theme } from "../../styled";
import { above } from "../../utils/styles";
import { ReactComponent as BgPatternOne } from "~/assets/images/bg-pattern-home-1.svg";
import { ReactComponent as BgPatternTwo } from "~/assets/images/bg-pattern-home-2.svg";
import shared from "../../utils/styles/shared";

const bgPatternOneStyle = css`
  display: none;

  ${above(
    "xxl",
    css`
      display: block;
      width: 200px;
      position: absolute;
      left: -100px;
      top: 129px;
    `
  )}
`;

const bgPatternTwoStyle = css`
  display: block;
  position: absolute;
  width: calc(100vw - 16px);
  left: 50%;
  bottom: 0;
  max-width: 355px;
  transform: translateX(-50%);

  ${above(
    "xxl",
    css`
      left: unset;
      right: 0;
    `
  )}
`;

const baseStyles = (theme: Theme) => css`
  --padding-top: ${rem("80px")};
  --padding-bottom: ${rem("197px")};

  text-align: center;
  background: ${theme.color.primary.dark};
  padding-top: var(--padding-top);
  padding-bottom: var(--padding-bottom);
  position: relative;
  overflow: hidden;

  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    span {
      color: ${theme.color.primary.accent};
    }
  }

  p {
    margin-top: 18px;
    font-size: 15px;
    line-height: 28px;
  }
`;

const tabletStyles = () => css`
  ${above(
    "md",
    css`
      --padding-top: ${rem("112px")};
      --padding-bottom: ${rem("256px")};

      h1 {
        font-size: 64px;
        line-height: 56px;
      }

      p {
        margin: auto;
        margin-top: 24px;
        max-width: 457px;
      }
    `
  )}
`;

const desktopStyles = () => css`
  ${above(
    "xxl",
    css`
      --padding-top: ${rem("129px")};
      --padding-bottom: ${rem("250px")};

      > div {
        display: grid;
        grid-template-columns: 635px 1fr;
        grid-column-gap: 30px;
        align-items: flex-end;
        text-align: left;
      }

      h1 {
        font-size: 100px;
        line-height: 100px;
      }

      p {
        font-size: 18px;
        line-height: 28px;
        margin: 0;
      }
    `
  )}
`;

const HeroContent = () => (
  <div
    css={(theme: Theme) => [
      shared.componentContainerStyles,
      baseStyles(theme),
      tabletStyles(),
      desktopStyles(),
    ]}
  >
    <div css={shared.componentContentStyles}>
      <h1>
        Find the <br />
        best <span>talent</span>
      </h1>
      <p>
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
    </div>
    <BgPatternOne css={bgPatternOneStyle} />
    <BgPatternTwo css={bgPatternTwoStyle} />
  </div>
);

export default HeroContent;
