import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as BgPatternTwo } from "~/assets/images/bg-pattern-home-2.svg";
import { ReactComponent as BgPatternThree } from "~/assets/images/bg-pattern-home-3.svg";
import { above } from "../../utils/styles";

const BgPatterns = () => (
  <div
    css={css`
      margin-top: 97px;

      ${above(
        "md",
        css`
          margin-top: 156px;
        `
      )}
    `}
  >
    <BgPatternTwo
      css={css`
        display: block;
        position: relative;
        width: calc(100vw - 16px);
        left: 50%;
        max-width: 355px;
        transform: translateX(-50%);
      `}
    />
    <BgPatternThree
      css={css`
        display: block;
        position: absolute;
        width: 200px;
        right: -100px;
      `}
    />
  </div>
);

export default BgPatterns;
