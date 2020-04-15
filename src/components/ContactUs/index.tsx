import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as BgPattern } from "~/assets/images/bg-pattern-home-6-about-5.svg";
import { Button } from "../Button";
import { Theme } from "~/styled";
import { above } from "~/utils/styles";

const ContactUs = () => (
  <div
    css={(theme: Theme) => css`
      background: ${theme.color.primary.accent};
      color: ${theme.color.secondary.darker};
      padding: 83px 24px;
      position: relative;
      text-align: center;
      overflow: hidden;

      h3 {
        font-size: 32px;
        line-height: 32px;
        margin-bottom: 24px;
      }

      ${above(
        "md",
        css`
          padding: 76px 98px;
          > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 917px;
            margin: auto;
          }
          h3 {
            margin: 0;
          }
        `
      )}

      ${above(
        "xxl",
        css`
          padding: 76px 260px;
          h3 {
            font-size: 48px;
            line-height: 48px;
          }
        `
      )}
    `}
  >
    <BgPattern
      css={css`
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
      `}
    />
    <div>
      <h3>Ready to get started?</h3>
      <Button variant="dark">contact us</Button>
    </div>
  </div>
);

export default ContactUs;
