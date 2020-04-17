import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as BgPattern } from "~/assets/images/bg-pattern-home-6-about-5.svg";
import { Button } from "../Button";
import { Theme } from "~/styled";
import { above } from "~/utils/styles";
import shared from "../../utils/styles/shared";

const baseStyles = (theme: Theme) => css`
  background: ${theme.color.primary.accent};
  color: ${theme.color.secondary.darker};
  padding-top: 83px;
  padding-bottom: 83px;
  position: relative;
  text-align: center;
  overflow: hidden;

  h3 {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 24px;
  }
`;

const tabletStyles = css`
  ${above(
    "md",
    css`
      padding-top: 76px;
      padding-bottom: 76px;

      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
      }
      h3 {
        margin: 0;
      }
    `
  )}
`;

const desktopStyles = css`
  ${above(
    "xxl",
    css`
      padding-top: 76px;
      padding-bottom: 76px;
      h3 {
        font-size: 48px;
        line-height: 48px;
      }
    `
  )}
`;

const bgPatternStyle = css`
  position: absolute;
  width: 200px;
  left: 0;
  bottom: -20px;

  ${above(
    "xxl",
    css`
      bottom: 0px;
    `
  )}
`;

const ContactUs = () => (
  <div
    css={(theme: Theme) => [
      shared.componentContainerStyles,
      baseStyles(theme),
      tabletStyles,
      desktopStyles,
    ]}
  >
    <BgPattern css={bgPatternStyle} />
    <div
      css={[
        shared.componentContentStyles,
        css`
          max-width: 917px;
        `,
      ]}
    >
      <h3>Ready to get started?</h3>
      <Button variant="dark">contact us</Button>
    </div>
  </div>
);

export default ContactUs;
