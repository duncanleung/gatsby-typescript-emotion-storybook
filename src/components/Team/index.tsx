import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";

import { above } from "../../utils/styles";
import Features from "./Features";

const baseStyles = (theme: Theme) => css`
  background: ${theme.color.secondary.darker};
  padding: 64px 24px;

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
      padding: 100px 98px;
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
      padding: 140px 165px;
      > div {
        display: grid;
        grid-template-columns: 445px 540px;
        grid-column-gap: 125px;
        max-width: max-content;
        margin-left: auto;
        margin-right: auto;

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

const Team = () => (
  <div css={(theme) => [baseStyles(theme), tabletStyles, desktopStyles]}>
    <div>
      <hr />
      <h2>Build & manage distributed teams like no one else.</h2>
      <Features />
    </div>
  </div>
);

export default Team;
