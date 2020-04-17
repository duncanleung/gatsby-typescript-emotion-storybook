import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";
import { above } from "../../utils/styles";
import Features from "./Features";
import { ReactComponent as BgPattern } from "~/assets/images/bg-pattern-home-3.svg";
import shared from "../../utils/styles/shared";

const baseStyles = (theme: Theme) => css`
  background: ${theme.color.secondary.darker};
  position: relative;
  overflow: hidden;
  padding-top: 64px;
  padding-bottom: 64px;

  hr {
    display: block;
    width: 50px;
    margin: 0;
    height: 4px;
    background: ${theme.color.primary.accent};
    border: 0;
    margin-bottom: 36px;
  }

  h2 {
    width: 240px;
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 56px;
  }
`;

const tabletStyles = css`
  ${above(
    "md",
    css`
      padding-top: 100px;
      padding-bottom: 100px;

      h2 {
        margin-bottom: 64px;
        font-size: 32px;
        line-height: 32px;
        width: 445px;
      }
    `
  )}
`;

const desktopStyles = css`
  ${above(
    "xxl",
    css`
      padding-top: 140px;
      padding-bottom: 140px;

      > div {
        display: grid;
        grid-template-columns: 445px 540px;
        margin-left: auto;
        margin-right: auto;
        justify-content: space-between;

        h2,
        > div {
          margin-top: 58px;
        }
      }

      hr {
        position: absolute;
      }

      h2 {
        margin-top: 58px;
        font-size: 48px;
        line-height: 48px;
      }
    `
  )}
`;

const bgPatternStyles = css`
  width: 200px;
  position: absolute;
  top: 0;
  right: -100px;

  ${above(
    "xxl",
    css`
      top: unset;
      bottom: 0;
    `
  )}
`;

const Team = () => (
  <div
    css={(theme) => [
      shared.componentContainerStyles,
      baseStyles(theme),
      tabletStyles,
      desktopStyles,
    ]}
  >
    <div css={shared.componentContentStyles}>
      <hr />
      <h2>Build & manage distributed teams like no one else.</h2>
      <Features />
    </div>
    <BgPattern css={bgPatternStyles} />
  </div>
);

export default Team;
